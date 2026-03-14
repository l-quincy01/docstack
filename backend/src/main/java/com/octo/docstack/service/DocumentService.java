package com.octo.docstack.service;

import com.octo.docstack.dto.document.CreateDocumentRequest;
import com.octo.docstack.dto.document.DocumentContentResponse;
import com.octo.docstack.dto.document.UpdateDocumentContentRequest;
import com.octo.docstack.dto.document.UpdateDocumentRequest;
import com.octo.docstack.dto.graph.DocumentSavedEvent;
import com.octo.docstack.entities.document.DocItem;
import com.octo.docstack.entities.document.DocItemStatus;
import com.octo.docstack.entities.topic.TopicTitleProjection;
import com.octo.docstack.exception.ResourceNotFoundException;
import com.octo.docstack.repository.document.DocumentRepository;

import com.octo.docstack.repository.topic.TopicRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.time.Instant;
import java.util.List;

@Service

public class DocumentService {

    private final DocumentRepository documentRepository;
    private final TopicRepository topicRepository;
    private final GraphService graphService;
    private final ApplicationEventPublisher eventPublisher;


    public DocumentService(DocumentRepository documentRepository, TopicRepository topicRepository, GraphService graphService, ApplicationEventPublisher eventPublisher) {
        this.documentRepository = documentRepository;
        this.topicRepository = topicRepository;
        this.graphService = graphService;
        this.eventPublisher = eventPublisher;
    }

    public DocItem create(String userId, CreateDocumentRequest req) {

        String topicId = req.getTopicId();

        String topicTitle = topicRepository
                .findProjectedByIdAndUserId(topicId, userId)
                .map(TopicTitleProjection::getTitle)
                .orElseThrow(() -> new ResourceNotFoundException("Topic not found"));
        System.out.println("Topic title:" + topicTitle);
        DocItem doc = new DocItem();
        doc.setUserId(userId);
        doc.setTopicId(topicId);
        doc.setTopicTitle(topicTitle);
        doc.setTitle(normaliseTitle(req.getTitle()));
        doc.setContent(req.getContent() == null ? "" : req.getContent());
        doc.setStatus(DocItemStatus.ACTIVE);

        //for graph creations
        DocItem savedDoc = documentRepository.save(doc);
        publishDocumentSavedEvent(savedDoc);

        return savedDoc ;
    }

    public List<DocItem> listActiveByTopic(String userId, String topicId) {
        assertTopicOwnedByUser(userId, topicId);

        return documentRepository.findByUserIdAndTopicIdAndStatusOrderByUpdatedAtDesc(
                userId,
                topicId,
                DocItemStatus.ACTIVE
        );
    }

    public DocItem getById(String userId, String documentId) {
        DocItem doc = documentRepository.findById(documentId)
                .orElseThrow(() -> new ResourceNotFoundException("Document not found"));

        if (!doc.getUserId().equals(userId)) {
            throw new ResourceNotFoundException("Document not found");
        }

        return doc;
    }

    public DocItem update(String userId, String documentId, UpdateDocumentRequest req) {
        DocItem doc = getById(userId, documentId);

        if (doc.getStatus() == DocItemStatus.TRASHED) {
            throw new IllegalArgumentException("Cannot edit a trashed document. Recover it first.");
        }

        if (StringUtils.hasText(req.getTitle())) {
            doc.setTitle(normaliseTitle(req.getTitle()));
        }
        if (req.getContent() != null) {
            doc.setContent(req.getContent());
        }
    //for graph creations
            DocItem savedDoc = documentRepository.save(doc) ;
            publishDocumentSavedEvent(savedDoc);

        return savedDoc ;

    }

    public void trash(String userId, String documentId) {
        DocItem doc = getById(userId, documentId);

        if (doc.getStatus() == DocItemStatus.TRASHED) {
            return;
        }

        doc.setStatus(DocItemStatus.TRASHED);
        documentRepository.save(doc);
        graphService.removeDocumentFromGraph(doc.getTopicId(), doc.getId());
    }

    public void recover(String userId, String documentId) {
        DocItem doc = getById(userId, documentId);

        assertTopicOwnedByUser(userId, doc.getTopicId());

        doc.setStatus(DocItemStatus.ACTIVE);

        DocItem savedDoc = documentRepository.save(doc);

        publishDocumentSavedEvent(savedDoc);

    }

    public List<DocItem> listByStatus(String userId, DocItemStatus status) {
        return documentRepository.findByUserIdAndStatusOrderByUpdatedAtDesc(
                userId,
                status
        );
    }

    public List<DocItem> listTrash(String userId) {
        return documentRepository.findByUserIdAndStatusOrderByUpdatedAtDesc(
                userId,
                DocItemStatus.TRASHED
        );
    }

    public void permanentDelete(String userId, String documentId) {
        DocItem doc = getById(userId, documentId);
        documentRepository.delete(doc);
        graphService.removeDocumentFromGraph(doc.getTopicId(), doc.getId());
    }

    private void assertTopicOwnedByUser(String userId, String topicId) {
        boolean ok = topicRepository.findByIdAndUserId(topicId, userId).isPresent();
        if (!ok) {
            throw new ResourceNotFoundException("Topic not found");
        }
    }

    private String normaliseTitle(String title) {
        if (!StringUtils.hasText(title)) {
            throw new IllegalArgumentException("Title is required");
        }
        String cleaned = title.trim().replaceAll("\\s+", " ");
        if (cleaned.length() > 120) {
            throw new IllegalArgumentException("Title must be 120 characters or less");
        }
        return cleaned;
    }


    public DocumentContentResponse updateContent(
            String documentId,
            String userId,
            UpdateDocumentContentRequest req
    ) {

        DocItem doc = documentRepository.findById(documentId)
                .orElseThrow(() -> new ResourceNotFoundException("Document not found"));

        if (!doc.getUserId().equals(userId)) {
            throw new ResourceNotFoundException("Document not found");
        }


        doc.setContent(req.getContent());
        doc.setUpdatedAt(Instant.now());



        DocItem savedDoc = documentRepository.save(doc) ;
        publishDocumentSavedEvent(savedDoc);



        return new DocumentContentResponse(
                doc.getId(),
                doc.getUpdatedAt()
        );
    }


   /* public DocItem updateThumbnail(String userId, String documentId, String thumbnailUrl) {
        DocItem doc = documentRepository.findByIdAndUserId(documentId, userId)
                .orElseThrow(() -> new ResourceNotFoundException("Document not found"));

        doc.setThumbnailUrl(thumbnailUrl);
        return documentRepository.save(doc);
    }*/

    public DocItem updateThumbnailUrl(String userId, String documentId, String thumbnailUrl) {
        DocItem doc = documentRepository.findByIdAndUserId(documentId, userId)
                .orElseThrow(() -> new ResourceNotFoundException("Document not found"));

        doc.setThumbnailUrl(thumbnailUrl);
        return documentRepository.save(doc);
    }

    private void publishDocumentSavedEvent(DocItem doc) {
        System.out.println("Publishing DocumentSavedEvent for docId=" + doc.getId());

        eventPublisher.publishEvent(new DocumentSavedEvent(
                doc.getId(),
                doc.getTopicId(),
                doc.getTitle(),
                doc.getContent()
        ));
    }

}



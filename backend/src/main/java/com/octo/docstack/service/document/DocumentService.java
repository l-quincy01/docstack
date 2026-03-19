package com.octo.docstack.service.document;

import com.octo.docstack.dto.document.CreateDocumentRequest;
import com.octo.docstack.dto.document.DocumentContentResponse;
import com.octo.docstack.dto.document.UpdateDocumentContentRequest;
import com.octo.docstack.dto.document.UpdateDocumentRequest;
import com.octo.docstack.dto.graph.DocumentSavedEvent;
import com.octo.docstack.models.document.DocItem;
import com.octo.docstack.models.document.DocItemStatus;
import com.octo.docstack.models.topic.TopicTitleProjection;
import com.octo.docstack.exception.ResourceNotFoundException;
import com.octo.docstack.repository.document.DocumentRepository;

import com.octo.docstack.repository.topic.TopicRepository;
import com.octo.docstack.service.graph.GraphService;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.time.Instant;
import java.util.List;

@Service
 public interface DocumentService {



     DocItem create(String userId, CreateDocumentRequest req)  ;

     List<DocItem> listActiveByTopic(String userId, String topicId) ;

     DocItem getById(String userId, String documentId) ;

     DocItem update(String userId, String documentId, UpdateDocumentRequest req) ;

     void trash(String userId, String documentId) ;

     void recover(String userId, String documentId);

     List<DocItem> listByStatus(String userId, DocItemStatus status) ;

     List<DocItem> listTrash(String userId) ;

     void permanentDelete(String userId, String documentId) ;


     DocumentContentResponse updateContent(
            String documentId,
            String userId,
            UpdateDocumentContentRequest req
    ) ;




     DocItem updateThumbnailUrl(String userId, String documentId, String thumbnailUrl);



}



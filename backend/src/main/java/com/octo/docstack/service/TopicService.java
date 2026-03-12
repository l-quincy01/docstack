package com.octo.docstack.service;


import com.octo.docstack.dto.topic.CreateTopicRequest;
import com.octo.docstack.dto.topic.DeleteTopicResponse;
import com.octo.docstack.dto.topic.RenameTopicRequest;
import com.octo.docstack.dto.topic.TopicResponse;
import com.octo.docstack.entities.topic.Topic;
import com.octo.docstack.exception.ResourceNotFoundException;
import com.octo.docstack.repository.document.DocumentRepository;
import com.octo.docstack.repository.topic.TopicRepository;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;

@Service
public class TopicService {

    private final TopicRepository topicRepository;
    private final DocumentRepository documentRepository;

    public TopicService(TopicRepository topicRepository, DocumentRepository documentRepository) {
        this.topicRepository = topicRepository;
        this.documentRepository = documentRepository;
    }

    public TopicResponse createTopic(String userId, CreateTopicRequest request) {
        String cleanTitle = normaliseTitle(request.getTitle());


        if (topicRepository.existsByUserIdAndTitle(userId, cleanTitle)) {
            throw new IllegalArgumentException("A topic with this title already exists");
        }

        Topic topic = new Topic(userId, cleanTitle);

        try {
            Topic saved = topicRepository.save(topic);
            return toResponse(saved);
        } catch (DuplicateKeyException e) {
            throw new IllegalArgumentException("A topic with this title already exists");
        }
    }

    public List<TopicResponse> getTopics(String userId) {
        return topicRepository.findByUserIdOrderByUpdatedAtDesc(userId)
                .stream()
                .map(this::toResponse)
                .toList();
    }

    public TopicResponse renameTopic(String userId, String topicId, RenameTopicRequest request) {
        Topic topic = topicRepository.findByIdAndUserId(topicId, userId)
                .orElseThrow(() -> new ResourceNotFoundException("Topic not found"));

        String cleanTitle = normaliseTitle(request.getTitle());

        if (topicRepository.existsByUserIdAndTitleAndIdNot(userId, cleanTitle, topicId)) {
            throw new IllegalArgumentException("A topic with this title already exists");
        }

        topic.setTitle(cleanTitle);

        try {
            Topic saved = topicRepository.save(topic);
            return toResponse(saved);
        } catch (DuplicateKeyException e) {
            throw new IllegalArgumentException("A topic with this title already exists");
        }
    }

    public DeleteTopicResponse deleteTopic(String userId, String topicId) {
        Topic topic = topicRepository.findByIdAndUserId(topicId, userId)
                .orElseThrow(() -> new ResourceNotFoundException("Topic not found"));

        long deletedDocs = documentRepository.deleteByUserIdAndTopicId(userId, topicId);
        topicRepository.delete(topic);

        return new DeleteTopicResponse(
                topicId,
                deletedDocs,
                "Topic deleted successfully"
        );
    }

    private TopicResponse toResponse(Topic topic) {
        return new TopicResponse(
                topic.getId(),
                topic.getTitle(),
                topic.getCreatedAt(),
                topic.getUpdatedAt()
        );
    }

    private String normaliseTitle(String title) {
        if (!StringUtils.hasText(title)) {
            throw new IllegalArgumentException("Topic title is required");
        }
        String cleaned = title.trim().replaceAll("\\s+", " ");
        if (cleaned.length() > 100) {
            throw new IllegalArgumentException("Topic title must be 100 characters or less");
        }
        return cleaned;
    }
}
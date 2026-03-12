package com.octo.docstack.repository.document;

import com.octo.docstack.entities.document.DocItem;

import com.octo.docstack.entities.document.DocItemStatus;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface DocumentRepository extends MongoRepository<DocItem, String> {


    long deleteByUserIdAndTopicId(String userId, String topicId);


    long countByUserIdAndTopicId(String userId, String topicId);


    long countByUserIdAndTopicIdAndStatus(
            String userId,
            String topicId,
            DocItemStatus status
    );


    List<DocItem> findByUserIdAndTopicIdAndStatusOrderByUpdatedAtDesc(
            String userId,
            String topicId,
            DocItemStatus status
    );


    List<DocItem> findByUserIdAndStatusOrderByUpdatedAtDesc(
            String userId,
            DocItemStatus status
    );


Optional<DocItem> findByIdAndUserId(String id, String userId);

}
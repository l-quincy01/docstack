package com.octo.docstack.repository;

import com.octo.docstack.entities.DocItem;

import com.octo.docstack.entities.DocItemStatus;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

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


}
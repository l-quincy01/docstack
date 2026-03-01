package com.octo.docstack.repository;

import com.octo.docstack.entities.Topic;
import com.octo.docstack.entities.TopicTitleProjection;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface TopicRepository extends MongoRepository<Topic, String> {
    List<Topic> findByUserIdOrderByUpdatedAtDesc(String userId);

    Optional<Topic> findByIdAndUserId(String id, String userId);

    boolean existsByUserIdAndTitle(String userId, String title);

    boolean existsByUserIdAndTitleAndIdNot(String userId, String title, String id);

    Optional<TopicTitleProjection> findProjectedByIdAndUserId(String id, String userId);
}
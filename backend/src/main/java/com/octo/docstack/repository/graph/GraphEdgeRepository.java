package com.octo.docstack.repository.graph;

import com.octo.docstack.entities.graph.GraphEdge;
import com.octo.docstack.entities.graph.GraphEdgeType;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface GraphEdgeRepository extends MongoRepository<GraphEdge, String> {

    List<GraphEdge> findByTopicId(String topicId);

    Optional<GraphEdge> findByTopicIdAndSourceAndTargetAndLabel(
            String topicId,
            String source,
            String target,
            GraphEdgeType label
    );

    void deleteByTopicId(String topicId);

    void deleteByTopicIdAndSource(String topicId, String source);
}

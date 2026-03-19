package com.octo.docstack.repository.graph;

import com.octo.docstack.models.graph.GraphEdge;
import com.octo.docstack.models.graph.GraphEdgeType;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface GraphEdgeRepository extends MongoRepository<GraphEdge, String> {

   // List<GraphEdge> findByTopicId(String topicId);

    Optional<GraphEdge> findByTopicIdAndSourceAndTargetAndLabel(
            String topicId,
            String source,
            String target,
            GraphEdgeType label
    );



    List<GraphEdge> findByTopicId(String topicId);

    void deleteByTopicIdAndSource(String topicId, String source);

    void deleteByTopicIdAndTarget(String topicId, String target);

    void deleteByTopicIdAndSourceAndLabel(String topicId, String source, GraphEdgeType label);

    boolean existsByTopicIdAndTargetAndLabel(String topicId, String target, GraphEdgeType label);
}

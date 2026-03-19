package com.octo.docstack.repository.graph;

import com.octo.docstack.models.graph.GraphNode;
import com.octo.docstack.models.graph.GraphNodeType;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface GraphNodeRepository extends MongoRepository<GraphNode, String> {

    List<GraphNode> findByTopicId(String topicId);

    Optional<GraphNode> findByTopicIdAndTypeAndRefId(
            String topicId,
            GraphNodeType type,
            String refId
    );

    Optional<GraphNode> findByTopicIdAndTypeAndNormalizedKey(
            String topicId,
            GraphNodeType type,
            String normalizedKey
    );

    void deleteByTopicId(String topicId);

    List<GraphNode> findByTopicIdAndType(String topicId, GraphNodeType type);

    void deleteByTopicIdAndId(String topicId, String id);
    //void deleteByTopicIdAndSourceAndLabel(String topicId, String source, GraphEdge label);
}

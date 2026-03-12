package com.octo.docstack.dto.graph;
import java.util.List;

public record TopicKnowledgeGraphResponse(
        List<GraphNodeResponse> nodes,
        List<GraphEdgeResponse> edges
) {}

package com.octo.docstack.service.impl;


import com.octo.docstack.dto.graph.GraphEdgeResponse;
import com.octo.docstack.dto.graph.GraphNodeResponse;
import com.octo.docstack.dto.graph.TopicKnowledgeGraphResponse;
import com.octo.docstack.entities.graph.GraphEdge;
import com.octo.docstack.entities.graph.GraphEdgeType;
import com.octo.docstack.entities.graph.GraphNode;
import com.octo.docstack.entities.graph.GraphNodeType;
import com.octo.docstack.repository.graph.GraphEdgeRepository;
import com.octo.docstack.repository.graph.GraphNodeRepository;
import com.octo.docstack.service.GraphService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;

@Service
@RequiredArgsConstructor
public class GraphServiceImpl implements GraphService {

    private static final String CONCEPT_FILL = "#FFC861";
    private static final String MENTION_EDGE_FILL = "#949494";

    private final GraphNodeRepository graphNodeRepository;
    private final GraphEdgeRepository graphEdgeRepository;

    @Override
    public void upsertDocumentNode(String topicId, String documentId, String documentTitle) {
        graphNodeRepository.findByTopicIdAndTypeAndRefId(topicId, GraphNodeType.DOCUMENT, documentId)
                .ifPresentOrElse(existing -> {
                    existing.setLabel(documentTitle);
                    graphNodeRepository.save(existing);
                }, () -> {
                    GraphNode node = GraphNode.builder()
                            .id("doc_" + documentId)
                            .topicId(topicId)
                            .refId(documentId)
                            .label(documentTitle)
                            .type(GraphNodeType.DOCUMENT)
                            .build();

                    graphNodeRepository.save(node);
                });
    }

    @Override
    public void rebuildMentionsForDocument(
            String topicId,
            String documentId,
            String documentTitle,
            List<String> concepts
    ) {
        upsertDocumentNode(topicId, documentId, documentTitle);

        String documentNodeId = "doc_" + documentId;

        graphEdgeRepository.deleteByTopicIdAndSource(topicId, documentNodeId);

        for (String rawConcept : concepts) {
            if (rawConcept == null || rawConcept.isBlank()) continue;

            String normalized = normalizeConcept(rawConcept);

            GraphNode conceptNode = graphNodeRepository
                    .findByTopicIdAndTypeAndNormalizedKey(topicId, GraphNodeType.CONCEPT, normalized)
                    .orElseGet(() -> graphNodeRepository.save(
                            GraphNode.builder()
                                    .id("concept_" + normalized)
                                    .topicId(topicId)
                                    .label(rawConcept.trim())
                                    .type(GraphNodeType.CONCEPT)
                                    .normalizedKey(normalized)
                                    .fill(CONCEPT_FILL)
                                    .build()
                    ));

            GraphEdge edge = GraphEdge.builder()
                    .id(documentNodeId + "__mentions__" + conceptNode.getId())
                    .topicId(topicId)
                    .source(documentNodeId)
                    .target(conceptNode.getId())
                    .label(GraphEdgeType.MENTIONS)
                    .dashed(true)
                    .fill(MENTION_EDGE_FILL)
                    .createdBy("AI")
                    .build();

            graphEdgeRepository.save(edge);
        }
    }

    @Override
    public TopicKnowledgeGraphResponse getTopicGraph(String topicId) {
        List<GraphNodeResponse> nodes = graphNodeRepository.findByTopicId(topicId)
                .stream()
                .map(node -> GraphNodeResponse.builder()
                        .id(node.getId())
                        .label(node.getLabel())
                        .type(node.getType().name())
                        .fill(node.getFill())
                        .build())
                .toList();

        List<GraphEdgeResponse> edges = graphEdgeRepository.findByTopicId(topicId)
                .stream()
                .map(edge -> GraphEdgeResponse.builder()
                        .id(edge.getId())
                        .source(edge.getSource())
                        .target(edge.getTarget())
                        .label(edge.getLabel().name())
                        .dashed(edge.getDashed())
                        .fill(edge.getFill())
                        .build())
                .toList();

        return new TopicKnowledgeGraphResponse(nodes, edges);
    }

    private String normalizeConcept(String value) {
        return value.trim()
                .toLowerCase(Locale.ROOT)
                .replaceAll("[^a-z0-9]+", "_")
                .replaceAll("^_+|_+$", "");
    }
}

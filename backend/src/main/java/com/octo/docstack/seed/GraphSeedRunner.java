/*package com.octo.docstack.seed;


import com.octo.docstack.entities.graph.GraphEdge;
import com.octo.docstack.entities.graph.GraphEdgeType;
import com.octo.docstack.entities.graph.GraphNode;
import com.octo.docstack.entities.graph.GraphNodeType;
import com.octo.docstack.repository.graph.GraphEdgeRepository;
import com.octo.docstack.repository.graph.GraphNodeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class GraphSeedRunner implements CommandLineRunner {

    private final GraphNodeRepository graphNodeRepository;
    private final GraphEdgeRepository graphEdgeRepository;

    @Override
    public void run(String... args) {
        String topicId = "69ac4b264c8810387698755d";

        graphEdgeRepository.deleteByTopicId(topicId);
        graphNodeRepository.deleteByTopicId(topicId);

        List<GraphNode> nodes = List.of(
                GraphNode.builder()
                        .id("doc_1")
                        .topicId(topicId)
                        .refId("1")
                        .label("Flyway setup")
                        .type(GraphNodeType.DOCUMENT)
                        .build(),

                GraphNode.builder()
                        .id("doc_2")
                        .topicId(topicId)
                        .refId("2")
                        .label("Mongo config")
                        .type(GraphNodeType.DOCUMENT)
                        .build(),

                GraphNode.builder()
                        .id("doc_3")
                        .topicId(topicId)
                        .refId("3")
                        .label("JWT auth flow")
                        .type(GraphNodeType.DOCUMENT)
                        .build(),

                GraphNode.builder()
                        .id("concept_flyway")
                        .topicId(topicId)
                        .label("Flyway")
                        .type(GraphNodeType.CONCEPT)
                        .normalizedKey("flyway")
                        .fill("#FFC861")
                        .build(),

                GraphNode.builder()
                        .id("concept_spring_boot")
                        .topicId(topicId)
                        .label("Spring Boot")
                        .type(GraphNodeType.CONCEPT)
                        .normalizedKey("spring_boot")
                        .fill("#FFC861")
                        .build(),

                GraphNode.builder()
                        .id("concept_mongodb")
                        .topicId(topicId)
                        .label("MongoDB")
                        .type(GraphNodeType.CONCEPT)
                        .normalizedKey("mongodb")
                        .fill("#FFC861")
                        .build(),

                GraphNode.builder()
                        .id("concept_jwt")
                        .topicId(topicId)
                        .label("JWT")
                        .type(GraphNodeType.CONCEPT)
                        .normalizedKey("jwt")
                        .fill("#FFC861")
                        .build()
        );

        List<GraphEdge> edges = List.of(
                GraphEdge.builder()
                        .id("edge_1")
                        .topicId(topicId)
                        .source("doc_1")
                        .target("concept_flyway")
                        .label(GraphEdgeType.MENTIONS)
                        .dashed(true)
                        .fill("#949494")
                        .createdBy("AI")
                        .build(),

                GraphEdge.builder()
                        .id("edge_2")
                        .topicId(topicId)
                        .source("doc_1")
                        .target("concept_spring_boot")
                        .label(GraphEdgeType.MENTIONS)
                        .dashed(true)
                        .fill("#949494")
                        .createdBy("AI")
                        .build(),

                GraphEdge.builder()
                        .id("edge_3")
                        .topicId(topicId)
                        .source("doc_2")
                        .target("concept_mongodb")
                        .label(GraphEdgeType.MENTIONS)
                        .dashed(true)
                        .fill("#949494")
                        .createdBy("AI")
                        .build(),

                GraphEdge.builder()
                        .id("edge_4")
                        .topicId(topicId)
                        .source("doc_2")
                        .target("concept_spring_boot")
                        .label(GraphEdgeType.MENTIONS)
                        .dashed(true)
                        .fill("#949494")
                        .createdBy("AI")
                        .build(),

                GraphEdge.builder()
                        .id("edge_5")
                        .topicId(topicId)
                        .source("doc_3")
                        .target("concept_jwt")
                        .label(GraphEdgeType.MENTIONS)
                        .dashed(true)
                        .fill("#949494")
                        .createdBy("AI")
                        .build(),

                GraphEdge.builder()
                        .id("edge_6")
                        .topicId(topicId)
                        .source("doc_3")
                        .target("concept_spring_boot")
                        .label(GraphEdgeType.MENTIONS)
                        .dashed(true)
                        .fill("#949494")
                        .createdBy("AI")
                        .build(),

                GraphEdge.builder()
                        .id("edge_7")
                        .topicId(topicId)
                        .source("doc_3")
                        .target("doc_2")
                        .label(GraphEdgeType.LINKS_TO)
                        .build(),

                GraphEdge.builder()
                        .id("edge_8")
                        .topicId(topicId)
                        .source("doc_1")
                        .target("doc_2")
                        .label(GraphEdgeType.LINKS_TO)
                        .build()
        );

        graphNodeRepository.saveAll(nodes);
        graphEdgeRepository.saveAll(edges);

        System.out.println("Seeded topic graph for topicId = " + topicId);
    }
}
*/
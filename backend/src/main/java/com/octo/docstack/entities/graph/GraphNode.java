package com.octo.docstack.entities.graph;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "graph_nodes")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GraphNode {

    @Id
    private String id;

    private String topicId;

    private String label;

    private GraphNodeType type;

   //id
    private String refId;


    private String normalizedKey;


    private String fill;
}

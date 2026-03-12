package com.octo.docstack.entities.graph;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "graph_edges")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GraphEdge {

    @Id
    private String id;

    private String topicId;

    private String source;

    private String target;

    private GraphEdgeType label;

    private Boolean dashed;

    private String fill;

 //meta
    private String createdBy;
}

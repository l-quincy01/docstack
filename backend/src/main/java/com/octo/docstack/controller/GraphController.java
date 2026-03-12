package com.octo.docstack.controller;




import com.octo.docstack.service.GraphService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import com.octo.docstack.dto.graph.TopicKnowledgeGraphResponse;

@RestController
@RequestMapping("/api/topics/{topicId}/graph")
@RequiredArgsConstructor
public class GraphController {

    private final GraphService graphService;

    @GetMapping
    public TopicKnowledgeGraphResponse getTopicGraph(@PathVariable String topicId) {
        return graphService.getTopicGraph(topicId);
    }
}

package com.octo.docstack.service;

import com.octo.docstack.dto.graph.GraphEdgeResponse;
import com.octo.docstack.dto.graph.GraphNodeResponse;
import com.octo.docstack.dto.graph.TopicKnowledgeGraphResponse;


import java.util.List;

public interface GraphService {

    void upsertDocumentNode(String topicId, String documentId, String documentTitle);

    void rebuildMentionsForDocument(
            String topicId,
            String documentId,
            String documentTitle,
            List<String> concepts
    );

    TopicKnowledgeGraphResponse getTopicGraph(String topicId);
}


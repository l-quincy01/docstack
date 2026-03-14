package com.octo.docstack.service;

import com.octo.docstack.dto.graph.DocumentSavedEvent;
import com.octo.docstack.dto.graph.GraphEdgeResponse;
import com.octo.docstack.dto.graph.GraphNodeResponse;
import com.octo.docstack.dto.graph.TopicKnowledgeGraphResponse;
import com.octo.docstack.entities.document.DocItem;


import java.util.List;

public interface GraphService {

    void upsertDocumentNode(String topicId, String documentId, String documentTitle);

    void rebuildMentionsForDocument(
            String topicId,
            String documentId,
            String documentTitle,
            List<String> concepts
    );


    void rebuildLinksForDocument(String topicId, String sourceDocumentId, List<String> targetDocumentIds);

    TopicKnowledgeGraphResponse getTopicGraph(String topicId);

    void cleanupOrphanConceptNodes(String topicId);

    void removeDocumentFromGraph(String topicId, String documentId);

}


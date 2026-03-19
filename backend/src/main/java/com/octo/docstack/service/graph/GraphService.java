package com.octo.docstack.service.graph;

import com.octo.docstack.dto.graph.ExtractedConcept;
import com.octo.docstack.dto.graph.TopicKnowledgeGraphResponse;


import java.util.List;

public interface GraphService {

    void upsertDocumentNode(String topicId, String documentId, String documentTitle);

    void rebuildMentionsForDocument(
            String topicId,
            String documentId,
            String documentTitle,
            List<ExtractedConcept> concepts
    );


    void rebuildLinksForDocument(String topicId, String sourceDocumentId, List<String> targetDocumentIds);

    TopicKnowledgeGraphResponse getTopicGraph(String topicId);

    void cleanupOrphanConceptNodes(String topicId);

    void removeDocumentFromGraph(String topicId, String documentId);

}


package com.octo.docstack.service.graph;

import com.octo.docstack.dto.graph.DocumentSavedEvent;

public interface DocumentGraphSyncService {
    void syncDocumentGraph(DocumentSavedEvent event);
}
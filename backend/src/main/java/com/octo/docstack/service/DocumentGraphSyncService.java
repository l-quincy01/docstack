package com.octo.docstack.service;

import com.octo.docstack.dto.graph.DocumentSavedEvent;

public interface DocumentGraphSyncService {
    void syncDocumentGraph(DocumentSavedEvent event);
}
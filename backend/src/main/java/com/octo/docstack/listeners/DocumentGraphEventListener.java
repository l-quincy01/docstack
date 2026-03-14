package com.octo.docstack.listeners;

import com.octo.docstack.dto.graph.DocumentSavedEvent;
import com.octo.docstack.service.DocumentGraphSyncService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class DocumentGraphEventListener {

    private final DocumentGraphSyncService documentGraphSyncService;

    @Async("graphTaskExecutor")
    @EventListener
    public void handleDocumentSaved(DocumentSavedEvent event) {
        System.out.println("EVENT LISTENER FIRED for docId=" + event.documentId());
        log.info("Starting async graph sync for documentId={}", event.documentId());

        try {
            documentGraphSyncService.syncDocumentGraph(event);
        } catch (Exception e) {
            log.error("Graph sync failed for documentId={}", event.documentId(), e);
            e.printStackTrace();
        }

        log.info("Finished async graph sync for documentId={}", event.documentId());
    }
}
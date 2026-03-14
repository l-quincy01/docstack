package com.octo.docstack.service.impl;

import com.octo.docstack.dto.graph.DocumentSavedEvent;
import com.octo.docstack.service.DocumentGraphSyncService;
import com.octo.docstack.service.GraphService;
import com.octo.docstack.service.graph.ConceptExtractionService;
import com.octo.docstack.service.graph.PlateLinkExtractor;
import com.octo.docstack.service.graph.PlateTextExtractor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class DocumentGraphSyncServiceImpl implements DocumentGraphSyncService {

    private final GraphService graphService;
    private final PlateTextExtractor plateTextExtractor;
    private final ConceptExtractionService conceptExtractionService;
    private final PlateLinkExtractor plateLinkExtractor;

    @Override
    public void syncDocumentGraph(DocumentSavedEvent event) {
        graphService.upsertDocumentNode(
                event.topicId(),
                event.documentId(),
                event.title()
        );

        String plainText = plateTextExtractor.extractPlainText(event.content());

        List<String> concepts = conceptExtractionService.extractConcepts(plainText);

        /*

        For debugging
         */
        System.out.println("SYNC START docId=" + event.documentId());
        System.out.println("TITLE = " + event.title());
        System.out.println("CONTENT TYPE = " + (event.content() == null ? "null" : event.content().getClass().getName()));
        System.out.println("PLAIN TEXT = " + plainText);
        System.out.println("CONCEPTS = " + concepts);
        System.out.println("SYNC END docId=" + event.documentId());

        graphService.rebuildMentionsForDocument(
                event.topicId(),
                event.documentId(),
                event.title(),
                concepts
        );

        List<String> linkedDocumentIds = plateLinkExtractor.extractLinkedDocumentIds(event.content());
        System.out.println("LINKED DOC IDS = " + linkedDocumentIds);

        graphService.rebuildLinksForDocument(
                event.topicId(),
                event.documentId(),
                linkedDocumentIds
        );

        System.out.println("SYNC END docId=" + event.documentId());

    }
}

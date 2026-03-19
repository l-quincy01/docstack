package com.octo.docstack.service.graph.impl;

import com.octo.docstack.dto.graph.DocumentSavedEvent;
import com.octo.docstack.dto.graph.ExtractedConcept;
import com.octo.docstack.service.graph.DocumentGraphSyncService;
import com.octo.docstack.service.graph.GraphService;
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

        List<ExtractedConcept> concepts = conceptExtractionService.extractConcepts(plainText);


        log.info("EXTRACTED CONCEPTS {}", concepts);




        graphService.rebuildMentionsForDocument(
                event.topicId(),
                event.documentId(),
                event.title(),
                concepts
        );

        List<String> linkedDocumentIds = plateLinkExtractor.extractLinkedDocumentIds(event.content());


        graphService.rebuildLinksForDocument(
                event.topicId(),
                event.documentId(),
                linkedDocumentIds
        );



    }
}

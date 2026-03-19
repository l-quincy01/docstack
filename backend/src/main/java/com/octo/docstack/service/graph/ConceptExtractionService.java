package com.octo.docstack.service.graph;

import com.octo.docstack.dto.graph.ExtractedConcept;

import java.util.List;

public interface ConceptExtractionService {
   // List<String> extractConcepts(String plainText);

    List<ExtractedConcept> extractConcepts(String plainText);
}
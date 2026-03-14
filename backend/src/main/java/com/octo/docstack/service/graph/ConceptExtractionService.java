package com.octo.docstack.service.graph;

import java.util.List;

public interface ConceptExtractionService {
    List<String> extractConcepts(String plainText);
}
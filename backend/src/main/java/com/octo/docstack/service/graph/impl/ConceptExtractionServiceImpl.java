package com.octo.docstack.service.graph.impl;



import com.octo.docstack.service.graph.ConceptExtractionService;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Locale;
import java.util.Set;

@Service
public class ConceptExtractionServiceImpl implements ConceptExtractionService {

    private static final List<String> KNOWN_CONCEPTS = List.of(
            "Spring Boot",
            "MongoDB",
            "Flyway",
            "Hikari",
            "JWT",
            "Clerk",
            "Postgres",
            "Kafka",
            "Docker",
            "React",
            "Next.js",
            "PlateJS",
            "Clean Architecture"
    );

    @Override
    public List<String> extractConcepts(String plainText) {
        if (plainText == null || plainText.isBlank()) {
            return List.of();
        }

        String normalizedText = plainText.toLowerCase(Locale.ROOT);
        Set<String> found = new LinkedHashSet<>();

        for (String concept : KNOWN_CONCEPTS) {
            if (normalizedText.contains(concept.toLowerCase(Locale.ROOT))) {
                found.add(concept);
            }
        }

        return found.stream().toList();
    }
}

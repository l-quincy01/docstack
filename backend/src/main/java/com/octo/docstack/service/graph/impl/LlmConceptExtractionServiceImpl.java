package com.octo.docstack.service.graph.impl;




import com.octo.docstack.dto.graph.ExtractedConcept;

import com.octo.docstack.service.ai.LlmGateway;
import com.octo.docstack.service.graph.ConceptExtractionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import tools.jackson.core.type.TypeReference;
import tools.jackson.databind.ObjectMapper;

import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;

@Service
@RequiredArgsConstructor
@Slf4j
public class LlmConceptExtractionServiceImpl implements ConceptExtractionService {

    private static final int MAX_INPUT_CHARS = 12000;
    private static final int MAX_CONCEPTS = 15;

    private static final Set<String> GENERIC_TERMS = Set.of(
            "system",
            "application",
            "platform",
            "document",
            "topic",
            "text",
            "data",
            "information",
            "user",
            "users",
            "process",
            "service"
    );

    private final LlmGateway llmGateway;
    private final ObjectMapper objectMapper;

    @Override
    public List<ExtractedConcept> extractConcepts(String plainText) {
        if (plainText == null || plainText.isBlank()) {
            return List.of();
        }

        String trimmedText = truncate(plainText, MAX_INPUT_CHARS);

        String systemPrompt = """
                You extract meaningful concepts from documents for a knowledge graph.
                Return only concepts explicitly mentioned in the text.
                Prefer technical, academic, domain-specific, product, framework, library, tool, architecture, protocol, and named-method concepts.
                Avoid generic nouns like system, data, application, document, process, service, and user.
                Return strict JSON only.
                The JSON must be an array of objects with this shape:
                [
                  { "label": "Spring Boot", "confidence": 0.96 }
                ]
                Rules:
                - Maximum 5 concepts
                - Use canonical readable labels
                - Do not invent concepts
                - Do not include duplicates
                - Confidence must be between 0.0 and 1.0
                """;

        String userPrompt = """
                Extract graph concepts from the following text:

                %s
                """.formatted(trimmedText);

        try {
            String raw = llmGateway.generateText(systemPrompt, userPrompt);

            List<ExtractedConcept> parsed = objectMapper.readValue(
                    raw,
                    new TypeReference<List<ExtractedConcept>>() {}
            );

            return sanitize(parsed);
        } catch (Exception e) {
            log.error("Failed to extract concepts via LLM", e);
            return List.of();
        }
    }

    private List<ExtractedConcept> sanitize(List<ExtractedConcept> concepts) {
        if (concepts == null || concepts.isEmpty()) {
            return List.of();
        }

        Map<String, ExtractedConcept> deduped = new LinkedHashMap<>();

        for (ExtractedConcept concept : concepts) {
            if (concept == null || concept.getLabel() == null) {
                continue;
            }

            String label = concept.getLabel().trim();
            if (label.isBlank()) {
                continue;
            }

            String key = normalize(label);
            if (key.isBlank()) {
                continue;
            }

            if (GENERIC_TERMS.contains(key.replace("_", " "))) {
                continue;
            }

            double confidence = concept.getConfidence() == null ? 0.75 : clamp(concept.getConfidence());

            ExtractedConcept cleaned = ExtractedConcept.builder()
                    .label(label)
                    .confidence(confidence)
                    .build();

            ExtractedConcept existing = deduped.get(key);
            if (existing == null || cleaned.getConfidence() > existing.getConfidence()) {
                deduped.put(key, cleaned);
            }
        }

        return deduped.values().stream()
                .sorted(Comparator.comparing(ExtractedConcept::getConfidence).reversed())
                .limit(MAX_CONCEPTS)
                .toList();
    }

    private String truncate(String text, int maxChars) {
        if (text.length() <= maxChars) {
            return text;
        }
        return text.substring(0, maxChars);
    }

    private double clamp(double value) {
        return Math.max(0.0, Math.min(1.0, value));
    }

    private String normalize(String value) {
        return value.trim()
                .toLowerCase(Locale.ROOT)
                .replaceAll("[^a-z0-9]+", "_")
                .replaceAll("^_+|_+$", "");
    }
}

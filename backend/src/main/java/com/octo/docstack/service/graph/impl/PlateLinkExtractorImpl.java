package com.octo.docstack.service.graph.impl;




import com.octo.docstack.service.graph.PlateLinkExtractor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class PlateLinkExtractorImpl implements PlateLinkExtractor {

    private final ObjectMapper objectMapper;

    @Override
    public List<String> extractLinkedDocumentIds(Object content) {
        if (content == null) {
            return List.of();
        }

        try {
            JsonNode root = objectMapper.valueToTree(content);
            Set<String> linkedDocIds = new LinkedHashSet<>();
            walk(root, linkedDocIds);
            return linkedDocIds.stream().toList();
        } catch (Exception e) {
            return List.of();
        }
    }

    private void walk(JsonNode node, Set<String> linkedDocIds) {
        if (node == null) return;

        if (node.isObject()) {
            JsonNode typeNode = node.get("type");
            JsonNode linkKindNode = node.get("linkKind");
            JsonNode docIdNode = node.get("docId");

            boolean isInternalDocumentLink =
                    typeNode != null
                            && "a".equals(typeNode.asText())
                            && linkKindNode != null
                            && "internal-document".equals(linkKindNode.asText())
                            && docIdNode != null
                            && !docIdNode.asText().isBlank();

            if (isInternalDocumentLink) {
                linkedDocIds.add(docIdNode.asText());
            }

            JsonNode children = node.get("children");
            if (children != null) {
                walk(children, linkedDocIds);
            }
        } else if (node.isArray()) {
            for (JsonNode child : node) {
                walk(child, linkedDocIds);
            }
        }
    }
}

package com.octo.docstack.service.graph.impl;





import com.octo.docstack.service.graph.PlateTextExtractor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

@Service
@RequiredArgsConstructor
public class PlateTextExtractorImpl implements PlateTextExtractor {

    private final ObjectMapper objectMapper;

    @Override
    public String extractPlainText(Object content) {
        if (content == null) {
            return "";
        }

        try {
            JsonNode root = objectMapper.valueToTree(content);
            StringBuilder sb = new StringBuilder();
            walk(root, sb);
            return sb.toString().trim().replaceAll("\\s+", " ");
        } catch (Exception e) {
            return String.valueOf(content);
        }
    }

    private void walk(JsonNode node, StringBuilder sb) {
        if (node == null) return;

        if (node.isObject()) {
            JsonNode textNode = node.get("text");
            if (textNode != null && !textNode.isNull()) {
                sb.append(textNode.asText()).append(' ');
            }

            JsonNode children = node.get("children");
            if (children != null) {
                walk(children, sb);
            }
        } else if (node.isArray()) {
            for (JsonNode child : node) {
                walk(child, sb);
            }
        }
    }
}
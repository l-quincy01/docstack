package com.octo.docstack.dto.graph;


public record DocumentSavedEvent(
        String documentId,
        String topicId,
        String title,
        Object content
) {}

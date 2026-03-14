package com.octo.docstack.service.graph;



import java.util.List;

public interface PlateLinkExtractor {
    List<String> extractLinkedDocumentIds(Object content);
}

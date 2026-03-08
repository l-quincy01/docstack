package com.octo.docstack.dto.document;

public class DocumentActionResponse {
    private String documentId;
    private String message;

    public DocumentActionResponse() {}

    public DocumentActionResponse(String documentId, String message) {
        this.documentId = documentId;
        this.message = message;
    }

    public String getDocumentId() { return documentId; }
    public String getMessage() { return message; }

    public void setDocumentId(String documentId) { this.documentId = documentId; }
    public void setMessage(String message) { this.message = message; }
}

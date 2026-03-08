package com.octo.docstack.dto.document;

import java.time.Instant;

public class DocumentContentResponse {

    private String id;
    private Instant updatedAt;

    public DocumentContentResponse(String id, Instant updatedAt) {
        this.id = id;
        this.updatedAt = updatedAt;
    }

    public String getId() {
        return id;
    }

    public Instant getUpdatedAt() {
        return updatedAt;
    }
}

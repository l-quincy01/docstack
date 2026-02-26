package com.octo.docstack.dto.document;

import com.octo.docstack.entities.DocItemStatus;
import java.time.Instant;

public class DocumentResponse {

    private String id;
    private String topicId;
    private String title;
    private String content;
    private DocItemStatus status;
    private Instant createdAt;
    private Instant updatedAt;

    public DocumentResponse() {}

    public DocumentResponse(
            String id,
            String topicId,
            String title,
            String content,
            DocItemStatus status,
            Instant createdAt,
            Instant updatedAt
    ) {
        this.id = id;
        this.topicId = topicId;
        this.title = title;
        this.content = content;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public String getId() { return id; }
    public String getTopicId() { return topicId; }
    public String getTitle() { return title; }
    public String getContent() { return content; }
    public DocItemStatus getStatus() { return status; }
    public Instant getCreatedAt() { return createdAt; }
    public Instant getUpdatedAt() { return updatedAt; }

    public void setId(String id) { this.id = id; }
    public void setTopicId(String topicId) { this.topicId = topicId; }
    public void setTitle(String title) { this.title = title; }
    public void setContent(String content) { this.content = content; }
    public void setStatus(DocItemStatus status) { this.status = status; }
    public void setCreatedAt(Instant createdAt) { this.createdAt = createdAt; }
    public void setUpdatedAt(Instant updatedAt) { this.updatedAt = updatedAt; }
}

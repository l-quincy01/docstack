package com.octo.docstack.dto.document;

import com.octo.docstack.entities.DocItemStatus;
import java.time.Instant;

public class DocumentResponse {

    private String id;
    private String topicId;
    private String topicTitle;
    private String title;
    private Object content;
    private DocItemStatus status;
    private Instant createdAt;
    private Instant updatedAt;
    private String thumbnailUrl ;

    public DocumentResponse() {}

    public DocumentResponse(
            String id,
            String topicId,
            String topicTitle,
            String title,
            Object content,
            DocItemStatus status,
            Instant createdAt,
            Instant updatedAt,
            String thumbnailUrl

    ) {
        this.id = id;
        this.topicId = topicId;
        this.topicTitle = topicTitle;
        this.title = title;
        this.content = content;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.thumbnailUrl = thumbnailUrl ;

    }

    public String getId() { return id; }
    public String getTopicId() { return topicId; }
    public String getTopicTitle() { return topicTitle; }
    public String getTitle() { return title; }
    public Object getContent() { return content; }
    public DocItemStatus getStatus() { return status; }
    public Instant getCreatedAt() { return createdAt; }
    public Instant getUpdatedAt() { return updatedAt; }
    public String getThumbnailUrl() { return thumbnailUrl; }

    public void setId(String id) { this.id = id; }
    public void setTopicId(String topicId) { this.topicId = topicId; }
    public void setTopicTitle(String topicTitle) { this.topicTitle = topicTitle; }
    public void setTitle(String title) { this.title = title; }
    public void setContent(String content) { this.content = content; }
    public void setStatus(DocItemStatus status) { this.status = status; }
    public void setCreatedAt(Instant createdAt) { this.createdAt = createdAt; }
    public void setUpdatedAt(Instant updatedAt) { this.updatedAt = updatedAt; }
    public void setThumbnailUrl() { this.thumbnailUrl = thumbnailUrl; }
}

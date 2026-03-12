package com.octo.docstack.entities.document;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.config.EnableMongoAuditing;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.index.CompoundIndex;

import java.time.Instant;


@EnableMongoAuditing
@CompoundIndex(name = "user_topic_idx", def = "{'userId': 1, 'topicId': 1}")
@Document(collection = "documents")
public class DocItem {

    @Id
    private String id;

    private String userId;
    private String topicId;
    private String topicTitle ;
    private String title;
    private DocItemStatus status  = DocItemStatus.ACTIVE;
    private Object content;

    @CreatedDate
    private Instant createdAt;

    @LastModifiedDate
    private Instant updatedAt;
    private String thumbnailUrl;




    public String getId() { return id; }
    public String getUserId() { return userId; }
    public String getTopicId() { return topicId; }
    public String getTopicTitle() { return topicTitle; }
    public DocItemStatus getStatus() { return status; }
    public String getTitle() { return title; }
    public Object getContent() { return content; }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public Instant getUpdatedAt() {
        return updatedAt;
    }
    public String getThumbnailUrl() { return thumbnailUrl; }

    public void setId(String id) { this.id = id; }
    public void setUserId(String userId) { this.userId = userId; }
    public void setTopicId(String topicId) { this.topicId = topicId; }
    public void setTopicTitle(String topicTitle) { this.topicTitle = topicTitle; }
    public void setStatus(DocItemStatus status) { this.status = status; }
    public void setTitle(String title) { this.title = title; }
    public void setContent(Object content) { this.content = content; }
    public void  setCreatedAt(Instant createdAt){this.createdAt = createdAt;}
    public void  setUpdatedAt(Instant updatedAt){this.updatedAt = updatedAt;}
    public void setThumbnailUrl(String thumbnailUrl) { this.thumbnailUrl = thumbnailUrl; }
}
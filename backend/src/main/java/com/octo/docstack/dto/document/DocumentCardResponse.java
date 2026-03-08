package com.octo.docstack.dto.document;


public class DocumentCardResponse {

    private String id;
    private String topicId;
    private String topicTitle ;
    private String title;
    private String createdAt;
    private String updatedAt;

    public DocumentCardResponse() {}

    public DocumentCardResponse(String id, String topicId, String topicTitle, String title, String createdAt, String updatedAt) {
        this.id = id;
        this.topicId = topicId;
        this.topicTitle = topicTitle;
        this.title = title;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public String getId() { return id; }
    public String getTopicId() { return topicId; }
    public String getTopicTitle() { return topicTitle; }
    public String getTitle() { return title; }
    public String getCreatedAt() { return createdAt; }
    public String getUpdatedAt() { return updatedAt; }

    public void setId(String id) { this.id = id; }
    public void setTopicId(String topicId) { this.topicId = topicId; }
    public void setTopicTitle(String topicTitle) {this.topicTitle = topicTitle;}
    public void setTitle(String title) { this.title = title; }
    public void setCreatedAt(String createdAt) { this.createdAt = createdAt; }
    public void setUpdatedAt(String updatedAt) { this.updatedAt = updatedAt; }
}
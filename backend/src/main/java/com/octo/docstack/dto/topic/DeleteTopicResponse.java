package com.octo.docstack.dto.topic;

public class DeleteTopicResponse {
    private String topicId;
    private long deletedDocuments;
    private String message;

    public DeleteTopicResponse() {}

    public DeleteTopicResponse(String topicId, long deletedDocuments, String message) {
        this.topicId = topicId;
        this.deletedDocuments = deletedDocuments;
        this.message = message;
    }

    public String getTopicId() { return topicId; }
    public long getDeletedDocuments() { return deletedDocuments; }
    public String getMessage() { return message; }

    public void setTopicId(String topicId) { this.topicId = topicId; }
    public void setDeletedDocuments(long deletedDocuments) { this.deletedDocuments = deletedDocuments; }
    public void setMessage(String message) { this.message = message; }
}
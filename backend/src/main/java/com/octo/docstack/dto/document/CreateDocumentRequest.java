package com.octo.docstack.dto.document;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class CreateDocumentRequest {

    @NotBlank(message = "Topic ID is required")
    private String topicId;

    @NotBlank(message = "Document title is required")
    @Size(max = 120, message = "Title must be 120 characters or less")
    private String title;


    private String content;

    public String getTopicId() {
        return topicId;
    }

    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }

    public void setTopicId(String topicId) {
        this.topicId = topicId;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setContent(String content) {
        this.content = content;
    }
}

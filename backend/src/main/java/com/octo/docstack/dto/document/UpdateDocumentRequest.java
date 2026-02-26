package com.octo.docstack.dto.document;


import jakarta.validation.constraints.Size;

public class UpdateDocumentRequest {

    @Size(max = 120, message = "Title must be 120 characters or less")
    private String title;

    private String content;

    public String getTitle() { return title; }
    public String getContent() { return content; }

    public void setTitle(String title) { this.title = title; }
    public void setContent(String content) { this.content = content; }
}

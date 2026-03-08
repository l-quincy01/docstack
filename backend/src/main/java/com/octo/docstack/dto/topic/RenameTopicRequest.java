package com.octo.docstack.dto.topic;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class RenameTopicRequest {

    @NotBlank(message = "New topic title is required")
    @Size(min = 1, max = 100, message = "Topic title must be between 1 and 100 characters")
    private String title;

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
}
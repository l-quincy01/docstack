package com.octo.docstack.dto.document;

import com.octo.docstack.models.document.DocItemStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
@AllArgsConstructor
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




}

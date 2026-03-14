package com.octo.docstack.dto.document;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class DocumentCardResponse {

    private String id;
    private String topicId;
    private String topicTitle ;
    private String title;
    private Object content;
    private String createdAt;
    private String updatedAt;
    private String thumbnailUrl ;




}
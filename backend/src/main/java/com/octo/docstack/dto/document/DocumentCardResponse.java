package com.octo.docstack.dto.document;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DocumentCardResponse {

    private String id;
    private String topicId;
    private String topicTitle ;
    private String title;
    private Object content;
    private String createdAt;
    private String updatedAt;
    private String thumbnailUrl ;

    public DocumentCardResponse() {}

    public DocumentCardResponse(String id, String topicId, String topicTitle, String title,  Object content, String createdAt, String updatedAt, String thumbnailUrl) {
        this.id = id;
        this.topicId = topicId;
        this.topicTitle = topicTitle;
        this.title = title;
        this.content = content ;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.thumbnailUrl = thumbnailUrl ;
    }


}
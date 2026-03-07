package com.octo.docstack.dto.document;

public class ThumbnailPresignResponse {

    private String uploadUrl;
    private String publicUrl;
    private String objectKey;

    public ThumbnailPresignResponse() {}

    public ThumbnailPresignResponse(String uploadUrl, String publicUrl, String objectKey) {
        this.uploadUrl = uploadUrl;
        this.publicUrl = publicUrl;
        this.objectKey = objectKey;
    }

    public String getUploadUrl() { return uploadUrl; }
    public void setUploadUrl(String uploadUrl) { this.uploadUrl = uploadUrl; }

    public String getPublicUrl() { return publicUrl; }
    public void setPublicUrl(String publicUrl) { this.publicUrl = publicUrl; }

    public String getObjectKey() { return objectKey; }
    public void setObjectKey(String objectKey) { this.objectKey = objectKey; }
}
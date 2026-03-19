package com.octo.docstack.service.document.impl;


import com.octo.docstack.config.R2Properties;
import com.octo.docstack.dto.document.ThumbnailPresignResponse;
import com.octo.docstack.exception.ResourceNotFoundException;
import com.octo.docstack.models.document.DocItem;
import com.octo.docstack.repository.document.DocumentRepository;
import com.octo.docstack.service.document.ThumbnailService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.presigner.S3Presigner;
import software.amazon.awssdk.services.s3.presigner.model.PresignedPutObjectRequest;
import software.amazon.awssdk.services.s3.presigner.model.PutObjectPresignRequest;

import java.time.Duration;
import java.time.Instant;
import java.util.UUID;

/*no longer using */
@Service
@RequiredArgsConstructor
public class ThumbnailServiceImpl implements ThumbnailService {

    private final DocumentRepository documentRepository;
    private final S3Presigner s3Presigner;
    private final R2Properties r2Properties;


    public ThumbnailPresignResponse createThumbnailUploadUrl(String userId, String documentId) {
        DocItem doc = documentRepository.findByIdAndUserId(documentId, userId)
                .orElseThrow(() -> new ResourceNotFoundException("Document not found"));

        String objectKey = buildObjectKey(userId, doc.getId());

        PutObjectRequest putObjectRequest = PutObjectRequest.builder()
                .bucket(r2Properties.getBucket())
                .key(objectKey)
                .contentType("image/png")
                .build();

        PutObjectPresignRequest presignRequest = PutObjectPresignRequest.builder()
                .signatureDuration(Duration.ofMinutes(10))
                .putObjectRequest(putObjectRequest)
                .build();

        PresignedPutObjectRequest presignedRequest = s3Presigner.presignPutObject(presignRequest);

        String publicUrl = r2Properties.getPublicBaseUrl() + "/" + objectKey;

        return new ThumbnailPresignResponse(
                presignedRequest.url().toString(),
                publicUrl,
                objectKey
        );
    }

    private String buildObjectKey(String userId, String documentId) {
        long now = Instant.now().toEpochMilli();
        String nonce = UUID.randomUUID().toString().substring(0, 8);
        return "document-thumbnails/" + userId + "/" + documentId + "/thumb-" + now + "-" + nonce + ".png";
    }
}

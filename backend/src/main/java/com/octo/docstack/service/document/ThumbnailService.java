package com.octo.docstack.service.document;



import com.octo.docstack.config.R2Properties;
import com.octo.docstack.dto.document.ThumbnailPresignResponse;
import com.octo.docstack.models.document.DocItem;

import com.octo.docstack.exception.ResourceNotFoundException;
import com.octo.docstack.repository.document.DocumentRepository;
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
public interface ThumbnailService {





     ThumbnailPresignResponse createThumbnailUploadUrl(String userId, String documentId) ;


}

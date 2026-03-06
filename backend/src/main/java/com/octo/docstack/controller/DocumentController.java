package com.octo.docstack.controller;



import com.octo.docstack.common.CurrentUserService;
import com.octo.docstack.dto.document.*;
import com.octo.docstack.entities.DocItem;
import com.octo.docstack.entities.DocItemStatus;
import com.octo.docstack.mapper.DocumentMapper;
import com.octo.docstack.service.DocumentService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/documents")
public class DocumentController {

    private final DocumentService documentService;
    private final DocumentMapper documentMapper;
    private final CurrentUserService currentUserService;

    public DocumentController(
            DocumentService documentService,
            DocumentMapper documentMapper,
            CurrentUserService currentUserService
    ) {
        this.documentService = documentService;
        this.documentMapper = documentMapper;
        this.currentUserService = currentUserService;
    }

    @PostMapping
    public ResponseEntity<DocumentResponse> create(
            @Valid @RequestBody CreateDocumentRequest request,
            Authentication authentication
    ) {
        String userId = currentUserService.getCurrentUserId(authentication);
        DocItem created = documentService.create(userId, request);
        return ResponseEntity.status(HttpStatus.CREATED).body(documentMapper.toDocumentResponse(created));
    }

    @GetMapping
    public ResponseEntity<List<DocumentCardResponse>> listDocuments(
            @RequestParam(required = false) DocItemStatus status,
            Authentication authentication
    ) {
        String userId = authentication.getName();

        if (status == null) {
            throw new RuntimeException("Document status cannot be null");
        }

        List<DocumentCardResponse> res =  documentService.listByStatus(userId, status)
                .stream()
                .map(documentMapper::toCardResponse)
                .toList();

        return ResponseEntity.ok(res) ;

    }





    @GetMapping("/topic/{topicId}")
    public ResponseEntity<List<DocumentCardResponse>> listActiveByTopic(
            @PathVariable String topicId,
            Authentication authentication
    ) {
        String userId = currentUserService.getCurrentUserId(authentication);

        List<DocumentCardResponse> res = documentService.listActiveByTopic(userId, topicId)
                .stream()
                .map(documentMapper::toCardResponse)
                .toList();

        return ResponseEntity.ok(res);
    }

    @GetMapping("/{documentId}")
    public ResponseEntity<DocumentResponse> getById(
            @PathVariable String documentId,
            Authentication authentication
    ) {
        String userId = currentUserService.getCurrentUserId(authentication);
        DocItem doc = documentService.getById(userId, documentId);
        return ResponseEntity.ok(documentMapper.toDocumentResponse(doc));
    }

    @PatchMapping("/{documentId}")
    public ResponseEntity<DocumentResponse> update(
            @PathVariable String documentId,
            @Valid @RequestBody UpdateDocumentRequest request,
            Authentication authentication
    ) {
        String userId = currentUserService.getCurrentUserId(authentication);
        DocItem updated = documentService.update(userId, documentId, request);
        return ResponseEntity.ok(documentMapper.toDocumentResponse(updated));
    }

    @PatchMapping("/{documentId}/trash")
    public ResponseEntity<DocumentActionResponse> trash(
            @PathVariable String documentId,
            Authentication authentication
    ) {
        String userId = currentUserService.getCurrentUserId(authentication);
        documentService.trash(userId, documentId);
        return ResponseEntity.ok(new DocumentActionResponse(documentId, "Document moved to trash"));
    }

    @PatchMapping("/{documentId}/recover")
    public ResponseEntity<DocumentActionResponse> recover(
            @PathVariable String documentId,
            Authentication authentication
    ) {
        String userId = currentUserService.getCurrentUserId(authentication);
        documentService.recover(userId, documentId);
        return ResponseEntity.ok(new DocumentActionResponse(documentId, "Document recovered"));
    }

    @PatchMapping("/{id}/content")
    public DocumentContentResponse updateContent(
            @PathVariable String id,
            @RequestBody UpdateDocumentContentRequest req,
            Authentication authentication
    ) {

        String userId = authentication.getName();

        return documentService.updateContent(
                id,
                userId,
                req
        );
    }



    @GetMapping("/trash")
    public ResponseEntity<List<DocumentCardResponse>> listTrash(Authentication authentication) {
        String userId = currentUserService.getCurrentUserId(authentication);
        List<DocumentCardResponse> res = documentService.listTrash(userId)
                .stream()
                .map(documentMapper::toCardResponse)
                .toList();

        return ResponseEntity.ok(res);
    }

    @DeleteMapping("/{documentId}")
    public ResponseEntity<DocumentActionResponse> permanentDelete(
            @PathVariable String documentId,
            Authentication authentication
    ) {
        String userId = currentUserService.getCurrentUserId(authentication);
        documentService.permanentDelete(userId, documentId);
        return ResponseEntity.ok(new DocumentActionResponse(documentId, "Document permanently deleted"));
    }
}

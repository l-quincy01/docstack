package com.octo.docstack.controller.topic;


import com.octo.docstack.common.CurrentUserService;
import com.octo.docstack.dto.topic.CreateTopicRequest;
import com.octo.docstack.dto.topic.DeleteTopicResponse;
import com.octo.docstack.dto.topic.RenameTopicRequest;
import com.octo.docstack.dto.topic.TopicResponse;
import com.octo.docstack.service.topic.TopicService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/topics")
@RequiredArgsConstructor
public class TopicController {

    private final TopicService topicService;
    private final CurrentUserService currentUserService;



    //CREATE
    @PostMapping
    public ResponseEntity<TopicResponse> createTopic(
            @Valid @RequestBody CreateTopicRequest request,
            Authentication authentication
    ) {
        String userId = currentUserService.getCurrentUserId(authentication);
        TopicResponse response = topicService.createTopic(userId, request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
    //READ
    @GetMapping
    public ResponseEntity<List<TopicResponse>> getTopics(Authentication authentication) {
        String userId = currentUserService.getCurrentUserId(authentication);
        return ResponseEntity.ok(topicService.getTopics(userId));
    }

    //UPDATE
    @PatchMapping("/{topicId}")
    public ResponseEntity<TopicResponse> renameTopic(
            @PathVariable String topicId,
            @Valid @RequestBody RenameTopicRequest request,
            Authentication authentication
    ) {
        String userId = currentUserService.getCurrentUserId(authentication);
        TopicResponse response = topicService.renameTopic(userId, topicId, request);
        return ResponseEntity.ok(response);
    }

    //DELETE
    @DeleteMapping("/{topicId}")
    public ResponseEntity<DeleteTopicResponse> deleteTopic(
            @PathVariable String topicId,
            Authentication authentication
    ) {
        String userId = currentUserService.getCurrentUserId(authentication);
        DeleteTopicResponse response = topicService.deleteTopic(userId, topicId);
        return ResponseEntity.ok(response);
    }
}
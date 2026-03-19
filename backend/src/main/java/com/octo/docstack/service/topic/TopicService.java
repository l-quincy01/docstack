package com.octo.docstack.service.topic;


import com.octo.docstack.dto.topic.CreateTopicRequest;
import com.octo.docstack.dto.topic.DeleteTopicResponse;
import com.octo.docstack.dto.topic.RenameTopicRequest;
import com.octo.docstack.dto.topic.TopicResponse;
import com.octo.docstack.models.topic.Topic;
import com.octo.docstack.exception.ResourceNotFoundException;
import com.octo.docstack.repository.document.DocumentRepository;
import com.octo.docstack.repository.topic.TopicRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;



public interface TopicService {





     TopicResponse createTopic(String userId, CreateTopicRequest request) ;

     List<TopicResponse> getTopics(String userId) ;

     TopicResponse renameTopic(String userId, String topicId, RenameTopicRequest request) ;

     DeleteTopicResponse deleteTopic(String userId, String topicId) ;


}
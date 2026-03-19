package com.octo.docstack.service.ai.impl;





import com.octo.docstack.config.OpenAiProperties;
import com.octo.docstack.dto.ai.OpenAiChatRequest;
import com.octo.docstack.dto.ai.OpenAiChatResponse;
import com.octo.docstack.exception.LlmGatewayException;
import com.octo.docstack.service.ai.LlmGateway;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.time.Duration;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class OpenAiLlmGateway implements LlmGateway {

    private final WebClient openAiWebClient;
    private final OpenAiProperties openAiProperties;

    @Override
    public String generateText(String systemPrompt, String userPrompt) {
        OpenAiChatRequest request = OpenAiChatRequest.builder()
                .model(openAiProperties.getModel())
                .temperature(0.0)
                .messages(List.of(
                        OpenAiChatRequest.Message.builder()
                                .role("system")
                                .content(systemPrompt)
                                .build(),
                        OpenAiChatRequest.Message.builder()
                                .role("user")
                                .content(userPrompt)
                                .build()
                ))
                .build();

        try {
            OpenAiChatResponse response = openAiWebClient.post()
                    .uri("/chat/completions")
                    .bodyValue(request)
                    .retrieve()
                    .onStatus(HttpStatusCode::isError, clientResponse ->
                            clientResponse.bodyToMono(String.class)
                                    .map(body -> new LlmGatewayException(
                                            "OpenAI API error: " + clientResponse.statusCode() + " - " + body
                                    ))
                    )
                    .bodyToMono(OpenAiChatResponse.class)
                    .block(Duration.ofSeconds(openAiProperties.getTimeoutSeconds()));

            if (response == null || response.getChoices() == null || response.getChoices().isEmpty()) {
                throw new LlmGatewayException("OpenAI response contained no choices");
            }

            String content = response.getChoices().get(0).getMessage() != null
                    ? response.getChoices().get(0).getMessage().getContent()
                    : null;

            if (content == null || content.isBlank()) {
                throw new LlmGatewayException("OpenAI response content was empty");
            }

            return stripMarkdownCodeFences(content);
        } catch (LlmGatewayException e) {
            throw e;
        } catch (Exception e) {
            log.error("Failed to call OpenAI gateway", e);
            throw new LlmGatewayException("Failed to call OpenAI gateway", e);
        }
    }

    private String stripMarkdownCodeFences(String raw) {
        String cleaned = raw.trim();

        if (cleaned.startsWith("```json")) {
            cleaned = cleaned.substring(7).trim();
        } else if (cleaned.startsWith("```")) {
            cleaned = cleaned.substring(3).trim();
        }

        if (cleaned.endsWith("```")) {
            cleaned = cleaned.substring(0, cleaned.length() - 3).trim();
        }

        return cleaned;
    }
}

package com.octo.docstack.service.ai;

public interface LlmGateway {
    String generateText(String systemPrompt, String userPrompt);
}
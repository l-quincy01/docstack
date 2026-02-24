package com.octo.docstack.dto;


public record ProfileResponse(
        String clerkUserId,
        String firstName,
        String lastName,
        String email
) {}
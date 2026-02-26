package com.octo.docstack.dto.profile;


public record ProfileResponse(
        String clerkUserId,
        String firstName,
        String lastName,
        String email
) {}
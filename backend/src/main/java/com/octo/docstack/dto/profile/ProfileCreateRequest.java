package com.octo.docstack.dto.profile;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record ProfileCreateRequest(
        @NotBlank String clerkUserId,
        @NotBlank String firstName,
        @NotBlank String lastName,
        @Email(message = "Invalid email") String email
) {}

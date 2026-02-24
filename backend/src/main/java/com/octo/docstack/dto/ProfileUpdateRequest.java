package com.octo.docstack.dto;

import jakarta.validation.constraints.NotBlank;

public record ProfileUpdateRequest(
        @NotBlank String firstName,
        @NotBlank String lastName
) {}

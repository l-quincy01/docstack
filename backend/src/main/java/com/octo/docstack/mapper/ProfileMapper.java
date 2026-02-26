package com.octo.docstack.mapper;

import com.octo.docstack.domain.Profile;
import com.octo.docstack.dto.profile.ProfileResponse;
import org.springframework.stereotype.Component;

@Component
public class ProfileMapper {

    public ProfileResponse toResponse(Profile profile) {
        return new ProfileResponse(
                profile.getClerkUserId(),
                profile.getFirstName(),
                profile.getLastName(),
                profile.getEmail()
        );
    }
}

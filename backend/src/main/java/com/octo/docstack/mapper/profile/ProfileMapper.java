package com.octo.docstack.mapper.profile;

import com.octo.docstack.models.profile.Profile;
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

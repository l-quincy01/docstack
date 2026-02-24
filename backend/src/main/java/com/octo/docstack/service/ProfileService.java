package com.octo.docstack.service;

import com.octo.docstack.dto.ProfileCreateRequest;
import com.octo.docstack.dto.ProfileResponse;
import com.octo.docstack.dto.ProfileUpdateRequest;

public interface ProfileService {

    ProfileResponse getMyProfile(String clerkUserId);

    ProfileResponse syncMyProfileFromClerk(String clerkUserId);

    ProfileResponse createProfile(ProfileCreateRequest request);

    ProfileResponse getProfileByClerkUserId(String clerkUserId);

    ProfileResponse updateProfile(String clerkUserId, ProfileUpdateRequest request);

    void deleteProfile(String clerkUserId);
}

package com.octo.docstack.service.impl;

import com.octo.docstack.domain.Profile;
import com.octo.docstack.dto.profile.ProfileCreateRequest;
import com.octo.docstack.dto.profile.ProfileResponse;
import com.octo.docstack.dto.profile.ProfileUpdateRequest;
import com.octo.docstack.exception.ExternalServiceException;
import com.octo.docstack.exception.ResourceNotFoundException;
import com.octo.docstack.mapper.ProfileMapper;
import com.octo.docstack.repository.profile.ProfileRepository;
import com.octo.docstack.service.ProfileService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestClient;

import java.util.Map;


@Service

public class ProfileServiceImpl implements ProfileService {



    private final ProfileRepository profileRepository ;
    private final RestClient restClient ;
    private final ProfileMapper profileMapper;

    @Value("${clerk.secret-key}")
    private String clerkSecretKey;

    public ProfileServiceImpl(ProfileRepository profileRepository , RestClient restClient, ProfileMapper profileMapper){
        this.profileRepository = profileRepository;
        this.restClient = restClient ;
        this.profileMapper = profileMapper;
    }

    @Override
    public ProfileResponse getMyProfile(String clerkUserId) {
        Profile profile = profileRepository.findByClerkUserId(clerkUserId)
                .orElseThrow(() -> new ResourceNotFoundException("Profile not found"));

        return profileMapper.toResponse(profile);
    }

    @Override
    public ProfileResponse syncMyProfileFromClerk(String clerkUserId) {

        Map<String, Object> clerkUser = restClient.get()
                .uri("https://api.clerk.com/v1/users/{id}", clerkUserId)
                .header("Authorization", "Bearer " + clerkSecretKey)
                .retrieve()
                .body(Map.class);

        if (clerkUser == null) {
            throw new ExternalServiceException("Clerk user with ID:" + clerkUserId + " not found" );
        }


        String firstName = (String) clerkUser.get("first_name");
        String lastName  = (String) clerkUser.get("last_name");


        Object emailAddressesObj = clerkUser.get("email_addresses");
        String email = null;

        if (emailAddressesObj instanceof java.util.List<?> emailList && !emailList.isEmpty()) {
            Object first = emailList.get(0);
            if (first instanceof Map<?, ?> firstMap) {
                Object addr = firstMap.get("email_address");
                if (addr != null) {
                    email = addr.toString();
                }
            }
        }

        if (email == null) {
            email = "";
        }


        String finalEmail = email;
        Profile profile = profileRepository.findByClerkUserId(clerkUserId)
                .orElseGet(() -> new Profile(clerkUserId, firstName, lastName, finalEmail));

        profile.setFirstName(firstName);
        profile.setLastName(lastName);
        profile.setEmail(email);

        Profile savedUserProfile = profileRepository.save(profile);


        return profileMapper.toResponse(savedUserProfile);
    }

    @Override
    public ProfileResponse createProfile(ProfileCreateRequest request) {

        Profile userProfile = new Profile(request.clerkUserId(), request.firstName(), request.lastName(), request.email());

        Profile savedUserProfile = profileRepository.save(userProfile) ;

        return profileMapper.toResponse(savedUserProfile);
    }

    @Override
    public ProfileResponse getProfileByClerkUserId(String clerkUserId) {

        Profile userProfile = profileRepository.findByClerkUserId(clerkUserId)
                .orElseThrow(() -> new ResourceNotFoundException("User profile from clerk with ID: " + clerkUserId + " not found." ));

        return profileMapper.toResponse(userProfile);
    }

    @Transactional
    @Override
    public ProfileResponse updateProfile(String clerkUserId, ProfileUpdateRequest request) {

        Profile userProfile = profileRepository.findByClerkUserId(clerkUserId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("User profile from clerk with ID: " + clerkUserId + " not found." ));

        userProfile.setFirstName(request.firstName());
        userProfile.setLastName(request.lastName());

        Profile savedUserProfile = profileRepository.save(userProfile);

        return profileMapper.toResponse(savedUserProfile);


    }

    @Transactional
    @Override
    public void deleteProfile(String clerkUserId) {


        try {
            restClient.delete()
                    .uri("https://api.clerk.com/v1/users/{id}", clerkUserId)
                    .header("Authorization", "Bearer " + clerkSecretKey)
                    .retrieve()
                    .toBodilessEntity();

        } catch (org.springframework.web.client.HttpClientErrorException.NotFound ex) {


            System.out.println("Clerk user already deleted: " + clerkUserId);

        } catch (Exception ex) {


            throw new ExternalServiceException(
                    "Failed to delete Clerk user: " + ex.getMessage()
            );
        }


        profileRepository.findByClerkUserId(clerkUserId)
                .ifPresent(profileRepository::delete);


    }
}

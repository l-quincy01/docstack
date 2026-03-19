package com.octo.docstack.controller.profile;


import com.octo.docstack.dto.profile.ProfileCreateRequest;
import com.octo.docstack.dto.profile.ProfileResponse;
import com.octo.docstack.dto.profile.ProfileUpdateRequest;
import com.octo.docstack.service.profile.ProfileService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/profile")
public class ProfileController {

    private final ProfileService profileService;

    public ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }

    @GetMapping("/me")
    public ProfileResponse me(@AuthenticationPrincipal Jwt jwt) {
        return profileService.getMyProfile(jwt.getSubject());
    }


    @PostMapping("/me/sync")
    public ProfileResponse sync(@AuthenticationPrincipal Jwt jwt) {
        return profileService.syncMyProfileFromClerk(jwt.getSubject());
    }

    //CREATE
    @PostMapping
    public ProfileResponse createProfile(@RequestBody @Valid ProfileCreateRequest request) {
        return profileService.createProfile(request);
    }

    //READ
    @GetMapping("/{clerkUserId}")
    public ProfileResponse getProfile(
            @PathVariable
            String clerkUserId
    ){
        return profileService.getProfileByClerkUserId(clerkUserId) ;
    }

    //UPDATE
    @PatchMapping
    public ProfileResponse updateProfile(
            @AuthenticationPrincipal Jwt jwt,
             @RequestBody  ProfileUpdateRequest request
    ){
        return profileService.updateProfile(jwt.getSubject(), request);

    }


    //DELETE
    @DeleteMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProfile(@AuthenticationPrincipal Jwt jwk){
        profileService.deleteProfile(jwk.getSubject());
    }






}

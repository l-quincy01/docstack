package com.octo.docstack.models.profile;

import lombok.Getter;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "profiles")
@Setter
@Getter
@RequiredArgsConstructor
public class Profile {

    @Id
    private String id;

    @NonNull
    private String clerkUserId;
    @NonNull
    private String firstName;
    @NonNull
    private String lastName;
    @NonNull
    private String email;



}
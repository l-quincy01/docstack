package com.octo.docstack.repository;

import com.octo.docstack.domain.Profile;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface ProfileRepository extends MongoRepository<Profile, String> {

    Optional<Profile> findByClerkUserId(String clerkUserId) ;
}

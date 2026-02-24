package com.octo.docstack.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "profiles")
public class Profile {

    @Id
    private String id;

    private String clerkUserId;
    private String firstName;
    private String lastName;
    private String email;

    public Profile() {}

    public Profile(String clerkUserId, String firstName, String lastName, String email) {
        this.clerkUserId = clerkUserId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    public String getId() { return id; }
    public String getClerkUserId() { return clerkUserId; }
    public String getFirstName() { return firstName; }
    public String getLastName() { return lastName; }
    public String getEmail() { return email; }

    public void setId(String id) { this.id = id; }
    public void setClerkUserId(String clerkUserId) { this.clerkUserId = clerkUserId; }
    public void setFirstName(String firstName) { this.firstName = firstName; }
    public void setLastName(String lastName) { this.lastName = lastName; }
    public void setEmail(String email) { this.email = email; }
}
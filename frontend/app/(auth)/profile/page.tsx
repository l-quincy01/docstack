import ProfileContent from "@/components/profile/profile-content";
import ProfileHeader from "@/components/profile/profile-header";
import React from "react";

export default function page() {
  return (
    <div>
      <ProfileHeader
        name={"name"}
        email={""}
        avatarUrl={"https://i.redd.it/8ugv2z5fdj7f1.png"}
      />
      <ProfileContent />
    </div>
  );
}

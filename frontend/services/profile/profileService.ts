import { apiFetch } from "@/lib/api";

export interface Profile {
  clerkUserId: string;
  firstName: string;
  lastName: string;
  email: string;
}

export const profileService = {
  createProfile(token: string) {
    return apiFetch("/api/profile/me/sync", { method: "POST" }, token);
  },

  getMyProfile(token: string) {
    return apiFetch<Profile>("/api/profile/me", { method: "GET" }, token);
  },

  updateProfile(token: string, data: { firstName: string; lastName: string }) {
    return apiFetch<Profile>(
      "/api/profile",
      {
        method: "PATCH",
        body: JSON.stringify(data),
      },
      token
    );
  },

  deleteProfile(token: string) {
    return apiFetch<void>("/api/profile", { method: "DELETE" }, token);
  },
};

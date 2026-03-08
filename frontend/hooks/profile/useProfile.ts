import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@clerk/nextjs";
import { profileService } from "@/services/profile/profileService";
import type { Profile } from "@/services/profile/profileService";

export function useMyProfile() {
  const { getToken } = useAuth();

  return useQuery<Profile>({
    queryKey: ["profile", "me"],
    queryFn: async () => {
      const token = await getToken();
      return profileService.getMyProfile(token!);
    },
  });
}

export function useUpdateMyProfile() {
  const { getToken } = useAuth();
  const qc = useQueryClient();

  return useMutation({
    mutationFn: async (data: { firstName: string; lastName: string }) => {
      const token = await getToken();
      return profileService.updateProfile(token!, data);
    },
    onSuccess: (updated) => {
      qc.setQueryData(["profile", "me"], updated);
    },
  });
}

export function useDeleteMyProfile() {
  const { getToken } = useAuth();
  const qc = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return profileService.deleteProfile(token!);
    },
    onSuccess: () => {
      qc.removeQueries({ queryKey: ["profile", "me"] });
      qc.clear();
    },
  });
}

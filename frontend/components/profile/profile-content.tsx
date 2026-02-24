"use client";

import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  ProfileSchema,
  type ProfileForm,
} from "@/validations/profile.validations";
import {
  useDeleteMyProfile,
  useMyProfile,
  useUpdateMyProfile,
} from "@/hooks/profile/useProfile";

export default function ProfileContent() {
  const { data: profile, isLoading, isError, error } = useMyProfile();
  const updateMutation = useUpdateMyProfile();
  const deleteMutation = useDeleteMyProfile();

  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState<ProfileForm>({
    firstName: "",
    lastName: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (profile) {
      setForm({
        firstName: profile.firstName ?? "",
        lastName: profile.lastName ?? "",
      });
    }
  }, [profile]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  }

  async function handleSave() {
    setErrors({});

    const parsed = ProfileSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const key = String(issue.path[0] ?? "root");
        fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    try {
      await updateMutation.mutateAsync(parsed.data);
      setEditing(false);
    } catch (e: any) {
      setErrors({ root: e?.message ?? "Failed to save profile" });
    }
  }

  async function handleDelete() {
    setErrors({});
    try {
      await deleteMutation.mutateAsync();
      // Optional: redirect or show a toast
    } catch (e: any) {
      setErrors({ root: e?.message ?? "Failed to delete account" });
    }
  }

  if (isLoading) return <div>Loading profile...</div>;

  if (isError) {
    return (
      <div className="text-sm text-destructive">
        {(error as any)?.message ?? "Failed to load profile"}
      </div>
    );
  }

  return (
    <Tabs defaultValue="personal" className="space-y-6">
      <TabsList className="grid w-full grid-cols-2 bg-accent/20 border-none">
        <TabsTrigger value="personal">Personal</TabsTrigger>
        <TabsTrigger value="account">Account</TabsTrigger>
      </TabsList>

      {/* Personal */}
      <TabsContent value="personal" className="space-y-6">
        <Card className="bg-accent/20 border-none">
          <CardHeader className="flex flex-row justify-between">
            <div className="flex flex-col gap-2">
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Update your personal details and profile information.
              </CardDescription>
            </div>

            <div className="flex gap-2">
              {editing && (
                <Button
                  onClick={handleSave}
                  disabled={updateMutation.isPending}
                >
                  {updateMutation.isPending ? "Saving..." : "Save"}
                </Button>
              )}

              <Button
                variant="secondary"
                onClick={() => {
                  // If cancelling, reset form back to server state
                  if (editing && profile)
                    setForm({
                      firstName: profile.firstName,
                      lastName: profile.lastName,
                    });
                  setErrors({});
                  setEditing((p) => !p);
                }}
              >
                {editing ? "Cancel" : "Edit Profile"}
              </Button>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {errors.root && (
              <p className="text-sm text-destructive">{errors.root}</p>
            )}

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  disabled={!editing}
                />
                {errors.firstName && (
                  <p className="text-xs text-destructive">{errors.firstName}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  disabled={!editing}
                />
                {errors.lastName && (
                  <p className="text-xs text-destructive">{errors.lastName}</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Account */}
      <TabsContent value="account" className="space-y-6">
        <Card className="border-destructive/50">
          <CardHeader>
            <CardTitle className="text-destructive">Danger Zone</CardTitle>
            <CardDescription>
              Irreversible and destructive actions
            </CardDescription>
          </CardHeader>

          <CardContent>
            {errors.root && (
              <p className="text-sm text-destructive mb-4">{errors.root}</p>
            )}

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-base">Delete Account</Label>
                <p className="text-muted-foreground text-sm">
                  Permanently delete your account and all data
                </p>
              </div>

              <Button
                variant="destructive"
                disabled={deleteMutation.isPending}
                onClick={handleDelete}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                {deleteMutation.isPending ? "Deleting..." : "Delete Account"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

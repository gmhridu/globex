"use client";
import { useTransition } from "react";
import { toast } from "sonner";
import Button from "../ui/Button";

export const SignoutButton = () => {
  const [isPending, startTransition] = useTransition();

  const signout = async () => {
    startTransition(async () => {
      try {
        const response = await fetch("/api/auth/signout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          toast.success("Signed out successfully!");
          // Redirect to login page
          window.location.href = "/admin/login";
        } else {
          toast.error("Failed to sign out");
        }
      } catch (error) {
        console.error("Signout error:", error);
        toast.error("An error occurred during sign out");
      }
    });
  };

  return (
    <Button onClick={signout} disabled={isPending} variant="outline">
      {isPending ? "Signing out..." : "Sign Out"}
    </Button>
  );
};

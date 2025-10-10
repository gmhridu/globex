import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "sonner";
import Button from "../ui/Button";

export const SignoutButton = () => {
  const signout = async () =>
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Signout Successfully!");
          redirect("/login");
        },
      },
    });

  return <Button onClick={signout}>Sign Out</Button>;
};

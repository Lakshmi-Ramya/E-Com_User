import Button from "@mui/material/Button";
import { signIn, signOut, useSession } from "next-auth/react";

async function logout() {
  await signOut({
    callbackUrl: process.env.NEXT_PUBLIC_URL,
  });
}

export default function MaterialButton() {
  return (
    <Button variant="contained" size="small" color="error" onClick={logout}>
      Logout
    </Button>
  );
}

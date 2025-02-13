"use client";
import { authClient } from "@/lib/auth-client";
import Button from "./Button";
import Switch from "./Switch";

const Nav = () => {
  const { data } = authClient.useSession();

  const handleSignOut = async () => {
    console.log("Signed out");
    await authClient.signOut();
  };

  return (
    <div className="flex justify-between items-center p-4 border-b-2 border-primary">
      <p>Paradish</p>
      <div className="flex items-center justify-center gap-4">
        <Switch />
        {data && <Button onClick={handleSignOut}>Sign out</Button>}
      </div>
    </div>
  );
};

export default Nav;

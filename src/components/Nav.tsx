import { SignedIn, UserButton, UserProfile } from "@clerk/nextjs";
import Switch from "./Switch";

const Nav = () => {
  return (
    <div className="flex justify-between p-4 border-b-2 border-primary">
      <p>Paradish</p>
      <div className="flex items-center justify-center gap-4">
        <Switch />
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Nav;

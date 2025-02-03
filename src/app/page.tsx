import Button from "@/components/Button";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Paradish</h1>
      <div className="flex flex-col justify-center gap-2">
        <SignedOut>
          <Link href="/register">
            <Button>Register</Button>
          </Link>
          <Link href="/login">
            <Button variant="secondary">Login</Button>
          </Link>
        </SignedOut>
        <SignedIn>
          <SignOutButton />
        </SignedIn>
      </div>
    </div>
  );
}

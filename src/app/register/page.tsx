"use client";

import Button from "@/components/Button";
import FormInput from "@/components/FormInput";
import Separator from "@/components/Separator";
import SignInWithGoogle from "@/components/SignInWithGoogleButton";
import { authClient } from "@/lib/auth-client";
import { getRecordFromFormData } from "@/utils/commonFunctions";
import Link from "next/link";
import { FormEvent } from "react";
import { PacmanLoader } from "react-spinners";

const BasicRegister = () => {
  const { isPending } = authClient.useSession();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { name, email, password } = getRecordFromFormData(formData);
    await authClient.signUp.email({
      name,
      email,
      password,
    });
  };

  const loginWithGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/joinCreateRestaurant",
    });
  };

  if (isPending) {
    return <PacmanLoader />;
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-medium text-center">
        Choose a sign up method
      </h2>
      <SignInWithGoogle onClick={loginWithGoogle} />
      <Separator>OR</Separator>
      <form className="flex flex-col gap-4 w-80" onSubmit={handleSubmit}>
        <FormInput label="Name" name="name" type="text" required />
        <FormInput label="Email" name="email" type="email" required />
        <FormInput label="Password" name="password" type="password" required />
        <Button type="submit">Sign up</Button>
        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-secondary underline cursor-pointer"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default BasicRegister;

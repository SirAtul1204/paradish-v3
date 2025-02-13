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

const Login = () => {
  const { isPending } = authClient.useSession();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { email, password } = getRecordFromFormData(formData);
    await authClient.signIn.email({
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
        <FormInput label="Email" name="email" type="email" required />
        <FormInput label="Password" name="password" type="password" required />
        <Button type="submit">Sign up</Button>
        <p className="text-sm text-center">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-secondary underline cursor-pointer"
          >
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

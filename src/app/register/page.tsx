"use client";
import { authClient } from "~/lib/auth-client";
import SignInWithGoogle from "../_components/auth-buttons/sign-in-with-google";
import SignInWithGithub from "../_components/auth-buttons/sign-in-with-github";
import SignInWithMicrosoft from "../_components/auth-buttons/sign-in-with-microsoft";
import Loader from "../_components/loader";
import { ROUTES } from "~/utils/constants";

export type RegisterFormData = {
  name: string;
  email: string;
  password: string;
};

const BasicRegister = () => {
  const { isPending } = authClient.useSession();

  const loginWithGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: ROUTES.SELECT_RESTAURANT,
    });
  };

  const loginWithGithub = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
      callbackURL: ROUTES.SELECT_RESTAURANT,
    });
  };

  const loginWithMicrosoft = async () => {
    const data = await authClient.signIn.social({
      provider: "microsoft",
      callbackURL: ROUTES.SELECT_RESTAURANT,
    });
  };

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-primary-text text-center text-xl font-medium">
        Choose a sign up method
      </h2>
      <SignInWithGoogle onClick={loginWithGoogle} />
      <SignInWithGithub onClick={loginWithGithub} />
      <SignInWithMicrosoft onClick={loginWithMicrosoft} />
    </div>
  );
};

export default BasicRegister;

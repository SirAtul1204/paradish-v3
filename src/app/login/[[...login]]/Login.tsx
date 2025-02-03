import { SignIn } from "@clerk/nextjs";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-2">
      <SignIn
        signUpUrl="/login"
        fallbackRedirectUrl="/user-type"
        afterSignOutUrl="/"
      />
    </div>
  );
};

export default Login;

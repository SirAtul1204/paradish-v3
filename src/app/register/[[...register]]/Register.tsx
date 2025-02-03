import { SignUp } from "@clerk/nextjs";

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-2">
      <SignUp
        signInUrl="/login"
        afterSignOutUrl="/"
        fallbackRedirectUrl="/user-type"
      />
    </div>
  );
};

export default Register;

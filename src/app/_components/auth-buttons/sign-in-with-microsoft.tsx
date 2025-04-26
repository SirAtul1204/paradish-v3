"use client";

import type { AuthButtonProps } from "./sign-in-with-google";

const SignInWithMicrosoft = ({ onClick }: AuthButtonProps) => (
  <button
    className={
      "bg-surface outline-border text-primary-text flex h-10 w-full cursor-pointer items-center justify-center gap-4 text-sm outline transition-all hover:opacity-90"
    }
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M2 3h9v9H2zm9 19H2v-9h9zM21 3v9h-9V3zm0 19h-9v-9h9z"
      ></path>
    </svg>
    Sign in with Microsoft
  </button>
);

export default SignInWithMicrosoft;

"use client";
import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/" })}
      className="btn px-10 py-1 rounded-md"
    >
      Sign in
    </button>
  );
};

export default SignIn;

"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

interface ProverProps {
  children: ReactNode;
}

const SessionProviders = ({ children }: ProverProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionProviders;

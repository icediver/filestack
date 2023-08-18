"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export const MainProvider = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

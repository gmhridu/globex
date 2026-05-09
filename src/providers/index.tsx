"use client";

import { TRPCReactProvider } from "@/trpc/client";
import { useEffect, useState } from "react";
import { Provider as WrapProvider } from "react-wrap-balancer";

interface ProviderProps {
  children: React.ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <TRPCReactProvider>
      <WrapProvider>{children}</WrapProvider>
    </TRPCReactProvider>
  );
};

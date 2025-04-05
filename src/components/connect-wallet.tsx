"use client";

import { Button } from "@/components/ui/button";
import { usePrivy } from "@privy-io/react-auth";
import { Wallet } from "lucide-react";

export function ConnectWallet() {
  const privy = usePrivy();
  if (privy.authenticated) {
    return null;
  }

  return (
    <Button
      onClick={() => privy.login()}
      className="w-full md:w-auto"
      variant="outline"
    >
      <Wallet className="mr-2 h-4 w-4" />
      Connect Wallet
    </Button>
  );
}

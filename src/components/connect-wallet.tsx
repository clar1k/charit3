"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Wallet, Loader2 } from "lucide-react";

export function ConnectWallet() {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const connectWallet = async (walletType: string) => {
    setIsConnecting(true);

    // Simulate wallet connection
    setTimeout(() => {
      const mockAddress =
        "0x" + Math.random().toString(16).slice(2, 12) + "...";
      setWalletAddress(mockAddress);
      setIsConnected(true);
      setIsConnecting(false);
      setIsDialogOpen(false);
    }, 1500);
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress("");
  };

  if (isConnected) {
    return (
      <Button variant="outline" onClick={disconnectWallet}>
        <Wallet className="mr-2 h-4 w-4" />
        {walletAddress}
      </Button>
    );
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Wallet className="mr-2 h-4 w-4" />
          Connect Wallet
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Connect your wallet</DialogTitle>
          <DialogDescription>
            Connect your cryptocurrency wallet to donate or create charity jars.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button
            variant="outline"
            className="justify-start h-12"
            onClick={() => connectWallet("MetaMask")}
            disabled={isConnecting}
          >
            {isConnecting ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <img
                src="/placeholder.svg?height=24&width=24"
                alt="MetaMask"
                className="mr-2 h-6 w-6"
              />
            )}
            MetaMask
          </Button>
          <Button
            variant="outline"
            className="justify-start h-12"
            onClick={() => connectWallet("WalletConnect")}
            disabled={isConnecting}
          >
            {isConnecting ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <img
                src="/placeholder.svg?height=24&width=24"
                alt="WalletConnect"
                className="mr-2 h-6 w-6"
              />
            )}
            WalletConnect
          </Button>
          <Button
            variant="outline"
            className="justify-start h-12"
            onClick={() => connectWallet("Coinbase Wallet")}
            disabled={isConnecting}
          >
            {isConnecting ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <img
                src="/placeholder.svg?height=24&width=24"
                alt="Coinbase Wallet"
                className="mr-2 h-6 w-6"
              />
            )}
            Coinbase Wallet
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

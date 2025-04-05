"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ConnectWallet } from "@/components/connect-wallet";
import { Loader2 } from "lucide-react";

export default function DonatePage() {
  const params = useParams();
  const router = useRouter();
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  // In a real app, you would fetch this data from your API or blockchain
  const charityData = {
    id: params.id,
    title: "Clean Water Initiative",
    raised: 1.8,
    goal: 3.0,
  };

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    // Simulate blockchain transaction
    setTimeout(() => {
      setIsSubmitting(false);

      router.push(`/charity/${params.id}?donated=true`);
    }, 2000);
  };

  // Simulate wallet connection check
  const checkWalletConnection = () => {
    // In a real app, this would check if the wallet is connected
    return isWalletConnected;
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="mb-6">
        <Link
          href={`/charity/${params.id}`}
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          ← Back to charity details
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Donate to {charityData.title}</CardTitle>
          <CardDescription>
            Your donation will be securely processed on the blockchain
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!checkWalletConnection() ? (
            <div className="flex flex-col items-center justify-center py-6 space-y-4">
              <p className="text-center text-muted-foreground mb-4">
                Please connect your wallet to make a donation
              </p>
              <ConnectWallet />
              <Button
                variant="outline"
                onClick={() => setIsWalletConnected(true)}
                className="mt-2"
              >
                Simulate wallet connection
              </Button>
            </div>
          ) : (
            <form onSubmit={handleDonate} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="amount">Donation Amount (ETH)</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.1"
                  step="0.01"
                  min="0.01"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Min: 0.01 ETH</span>
                  <span>
                    {charityData.raised} of {charityData.goal} ETH raised
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Add a message to your donation"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="anonymous"
                  checked={isAnonymous}
                  onCheckedChange={(checked) =>
                    setIsAnonymous(checked === true)
                  }
                />
                <Label htmlFor="anonymous" className="text-sm font-normal">
                  Make my donation anonymous
                </Label>
              </div>

              <div className="bg-muted p-4 rounded-lg text-sm">
                <p className="font-medium mb-2">Transaction Information</p>
                <ul className="space-y-1">
                  <li className="flex justify-between">
                    <span>Donation amount:</span>
                    <span>{amount || "0.00"} ETH</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Gas fee (estimated):</span>
                    <span>0.002 ETH</span>
                  </li>
                  <li className="flex justify-between font-medium">
                    <span>Total:</span>
                    <span>
                      {amount
                        ? (Number.parseFloat(amount) + 0.002).toFixed(3)
                        : "0.002"}{" "}
                      ETH
                    </span>
                  </li>
                </ul>
              </div>
            </form>
          )}
        </CardContent>
        {checkWalletConnection() && (
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href={`/charity/${params.id}`}>Cancel</Link>
            </Button>
            <Button onClick={handleDonate} disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Confirm Donation"
              )}
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}

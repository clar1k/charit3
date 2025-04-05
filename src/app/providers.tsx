"use client";

import { type ReactNode } from "react";
import { base } from "wagmi/chains";
import { MiniKitProvider } from "@coinbase/onchainkit/minikit";
import { PrivyProvider } from "@privy-io/react-auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "@privy-io/wagmi";
import { config } from "@/wagmiConfig";

const queryClient = new QueryClient();

export function Providers(props: { children: ReactNode }) {
  return (
    <MiniKitProvider
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
      chain={base}
      config={{
        appearance: {
          mode: "auto",
          theme: "snake",
          name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
          logo: process.env.NEXT_PUBLIC_ICON_URL,
        },
      }}
    >
      <PrivyProvider
        appId="cm94560es01a0l40lwld9hwk3"
        clientId="client-WY5iiuirnBZ1E28su9TSm58DqyNf3z9YtLaVXPNj7mjM7"
        config={{
          appearance: {
            theme: "light",
            accentColor: "#676FFF",
            logo: "https://your-logo-url",
          },
          embeddedWallets: { createOnLogin: "users-without-wallets" },
        }}
      >
        <QueryClientProvider client={queryClient}>
          <WagmiProvider config={config}>{props.children}</WagmiProvider>
        </QueryClientProvider>
      </PrivyProvider>
    </MiniKitProvider>
  );
}

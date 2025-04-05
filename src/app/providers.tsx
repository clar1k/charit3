"use client";

import { type ReactNode } from "react";
import { base } from "wagmi/chains";
import { MiniKitProvider } from "@coinbase/onchainkit/minikit";
import { PrivyProvider } from "@privy-io/react-auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "@privy-io/wagmi";
import { config } from "@/wagmiConfig";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function makeQueryClient() {
  return new QueryClient();
}

let browserQueryClient: QueryClient | undefined;

export function getQueryClient() {
  if (typeof window === "undefined") {
    // Server: always make a new query client
    return makeQueryClient();
  }
  // Browser: make a new query client if we don't already have one
  // This is very important so we don't re-make a new client if React
  // supsends during the initial render. This may not be needed if we
  // have a suspense boundary BELOW the creation of the query client
  if (!browserQueryClient) browserQueryClient = makeQueryClient();
  return browserQueryClient;
}

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
          loginMethods: ["wallet"],
          embeddedWallets: { createOnLogin: "users-without-wallets" },
        }}
      >
        <QueryClientProvider client={getQueryClient()}>
          <ReactQueryDevtools />
          <WagmiProvider config={config}>{props.children}</WagmiProvider>
        </QueryClientProvider>
      </PrivyProvider>
    </MiniKitProvider>
  );
}

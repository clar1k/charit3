"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ConnectWallet } from "@/components/connect-wallet";
import { CharityJarCard } from "@/components/charity-jar-card";
import { Globe, Heart, Lock } from "lucide-react";
import { Link as LinkIcon } from "lucide-react";


export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">CryptoCharity</h1>
          <p className="text-muted-foreground">
            Transparent charitable giving on the blockchain
          </p>
        </div>
        <div className="flex items-center gap-4">
          <ConnectWallet />
          <Button asChild>
            {/* <Link href="/create">Create Charity Jar</Link> */}
          </Button>
        </div>
      </header>

      <section className="mb-12">
        <Card className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Transparent Giving for Global Impact
                </h2>
                <p className="text-lg mb-6">
                  Join our community of changemakers using blockchain technology
                  to create transparent, secure, and impactful charitable
                  giving. Every donation is tracked and verified.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="secondary" size="lg" asChild>
                    {/* <Link href="/explore">Explore Causes</Link> */}
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                    size="lg"
                    asChild
                  >
                    {/* <Link href="/about">Our Mission</Link> */}
                  </Button>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="relative">
                  <div className="relative bg-white/20 rounded-2xl p-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/20 flex flex-col gap-6 rounded-lg p-6 backdrop-blur-sm">
                        <Globe className="size-10" />
                        <div className="text-lg font-medium ">Global Reach</div>
                      </div>
                      <div className="bg-white/20 flex flex-col gap-6 rounded-lg p-6 backdrop-blur-sm">
                        <Lock className="size-10" />
                        <div className="text-lg font-medium ">Secure Funds</div>
                      </div>
                      <div className="bg-white/20 flex flex-col gap-6 rounded-lg p-6 backdrop-blur-sm">
                        <LinkIcon className="size-10" />
                        <div className="text-lg font-medium ">Blockchain</div>
                      </div>
                      <div className="bg-white/20 flex flex-col gap-6 rounded-lg p-6 backdrop-blur-sm">
                        <Heart className="size-10" />
                        <div className="text-lg font-medium ">Real Impact</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Charity Jars</h2>
          <Button variant="outline" asChild>
            {/* <Link href="/explore">View All</Link> */}
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CharityJarCard
            id="1"
            title="Clean Water Initiative"
            description="Providing clean water to communities in need"
            raised={1.8}
            goal={3.0}
            contributors={24}
            category="Environment"
            daysLeft={12}
          />
          <CharityJarCard
            id="2"
            title="Education for All"
            description="Supporting education in underserved areas"
            raised={4.2}
            goal={5.0}
            contributors={56}
            category="Education"
            daysLeft={8}
          />
          <CharityJarCard
            id="3"
            title="Wildlife Conservation"
            description="Protecting endangered species and their habitats"
            raised={2.5}
            goal={10.0}
            contributors={37}
            category="Wildlife"
            daysLeft={30}
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-2">
                <span className="text-2xl">1</span>
              </div>
              <CardTitle>Connect Your Wallet</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Connect your cryptocurrency wallet to get started. We support
                multiple blockchain networks.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-2">
                <span className="text-2xl">2</span>
              </div>
              <CardTitle>Choose a Cause</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Browse charity jars or create your own for a cause you care
                about. Each jar has a transparent funding goal.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-2">
                <span className="text-2xl">3</span>
              </div>
              <CardTitle>Make a Donation</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Donate cryptocurrency directly to the charity jar. Every
                transaction is recorded on the blockchain for transparency.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

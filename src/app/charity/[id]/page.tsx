import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, Users, Share2, Heart } from "lucide-react";

interface CharityPageProps {
  params: {
    id: string;
  };
}

export default function CharityPage({ params }: CharityPageProps) {
  // In a real app, you would fetch this data from your API or blockchain
  const charityData = {
    id: params.id,
    title: "Clean Water Initiative",
    description:
      "Our mission is to provide clean, safe drinking water to communities in need around the world. Access to clean water is a fundamental human right, yet millions of people still lack this basic necessity. Your donations will fund well construction, water purification systems, and educational programs on water conservation and hygiene.",
    raised: 1.8,
    goal: 3.0,
    contributors: 24,
    category: "Environment",
    daysLeft: 12,
    organizer: {
      address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
      image: "/placeholder.svg?height=40&width=40",
    },
  };

  const progress = (charityData.raised / charityData.goal) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          ← Back to home
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline">{charityData.category}</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-1 h-3 w-3" />
                {charityData.daysLeft} days left
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4">{charityData.title}</h1>
            <p className="text-muted-foreground">{charityData.description}</p>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-lg">
                    {charityData.raised} ETH raised
                  </span>
                  <span className="text-muted-foreground">
                    of {charityData.goal} ETH goal
                  </span>
                </div>
                <Progress value={progress} className="h-2" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="mr-1 h-4 w-4" />
                    {charityData.contributors} contributors
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Heart className="mr-1 h-4 w-4" />
                      Follow
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="mr-1 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="about">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="donations">Donations</TabsTrigger>
              <TabsTrigger value="contributors">Contributors</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="p-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">About this charity jar</h3>
                <p>
                  The Clean Water Initiative aims to address the global water
                  crisis by implementing sustainable solutions in regions with
                  limited access to clean water. Our projects include:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Drilling wells in rural communities</li>
                  <li>Installing water filtration systems</li>
                  <li>Providing education on water conservation</li>
                  <li>Supporting local water management committees</li>
                </ul>
                <p>
                  All funds are managed transparently on the blockchain, and
                  regular updates will be provided on project implementation and
                  impact.
                </p>
                <h3 className="text-lg font-medium mt-6">
                  How funds will be used
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-teal-500 mb-2">
                      60%
                    </div>
                    <div className="text-sm">Direct project implementation</div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-teal-500 mb-2">
                      20%
                    </div>
                    <div className="text-sm">Equipment and supplies</div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-teal-500 mb-2">
                      15%
                    </div>
                    <div className="text-sm">Local training and education</div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-teal-500 mb-2">
                      5%
                    </div>
                    <div className="text-sm">Administration</div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="donations">
              {/* <DonationHistory charityId={params.id} /> */}
            </TabsContent>
            <TabsContent value="contributors">
              {/* <ContributorsList charityId={params.id} /> */}
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Donate Now</CardTitle>
              <CardDescription>
                Support this cause with cryptocurrency
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" size="lg" asChild>
                <Link href={`/charity/${params.id}/donate`}>Donate ETH</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Organizer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="text-xs text-muted-foreground truncate">
                  {charityData.organizer.address}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

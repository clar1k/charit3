import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users } from "lucide-react";

interface CharityJarCardProps {
  id: string;
  title: string;
  description: string;
  raised: number;
  goal: number;
  contributors: number;
  category: string;
  daysLeft: number;
}

export function CharityJarCard({
  id,
  title,
  description,
  raised,
  goal,
  contributors,
  category,
  daysLeft,
}: CharityJarCardProps) {
  const progress = (raised / goal) * 100;

  return (
    <Card className="shadow-xl overflow-hidden flex flex-col h-full border-teal-500/50 border-2 rounded-2xl">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className="mb-2">
            {category}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="mr-1 h-3 w-3" />
            {daysLeft} days left
          </div>
        </div>
        <CardTitle className="line-clamp-1">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {description}
        </p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium">{raised} ETH raised</span>
            <span className="text-muted-foreground">of {goal} ETH goal</span>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="mr-1 h-3 w-3" />
            {contributors} contributors
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex gap-2 w-full">
          <Button variant="outline" className="w-1/2" asChild>
            <Link href={`/charity/${id}`}>Details</Link>
          </Button>
          <Button className="w-1/2" asChild>
            <Link href={`/charity/${id}/donate`}>Donate</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

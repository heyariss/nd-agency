"use client";

import { supabase } from "@/lib/supabaseClient";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/moleculs/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUpIcon } from "lucide-react";
import { ChartAreaInteractive } from "@/components/moleculs/chart-area-interactive";

export default function DashboardPage() {


  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // State untuk menangani loading
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        // Jika tidak ada user, redirect ke halaman login
        router.push("/login");
      } else {
        setUser(user);
      }
      setLoading(false); // Set loading ke false setelah selesai
    };

    fetchUser();
  }, [router]);

  if (loading) {
    return <p>Loading...</p>; 
  }

  if (!user) {
    return null; 
  }

  return (
    <>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <Card className="@container/card">
          <CardHeader className="relative">
            <CardDescription>Total Project</CardDescription>
            <CardTitle className="@[250px]/card:text-4xl text-2xl font-bold text-primary tabular-nums">
              1000+
            </CardTitle>
            <div className="absolute right-4 top-4">
              <Badge variant="outline" className="flex gap-1 rounded-lg text-xs bg-secondary text-white">
                <TrendingUpIcon className="size-3" />
                +8.2%
              </Badge>
            </div>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Projects completed since inception <TrendingUpIcon className="size-4" />
            </div>
            <div className="text-muted-foreground">
              320 projects in the last 6 months
            </div>
          </CardFooter>
        </Card>

        <Card className="@container/card">
          <CardHeader className="relative">
            <CardDescription>Total Client</CardDescription>
            <CardTitle className="@[250px]/card:text-4xl text-2xl font-bold text-primary tabular-nums">
              100
            </CardTitle>
            <div className="absolute right-4 top-4">
              <Badge variant="outline" className="flex gap-1 rounded-lg text-xs bg-secondary text-white">
                <TrendingUpIcon className="size-3" />
                  +5.7%
              </Badge>
            </div>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Active clients currently engaged <TrendingUpIcon className="size-4" />
            </div>
            <div className="text-muted-foreground">
              45 new clients in the last 6 months
            </div>
          </CardFooter>
        </Card>
        <Card className="@container/card">
          <CardHeader className="relative">
            <CardDescription>Total Mandays</CardDescription>
            <CardTitle className="@[250px]/card:text-4xl text-2xl font-bold text-primary tabular-nums">
              8760 hours
            </CardTitle>
            <div className="absolute right-4 top-4">
              <Badge variant="outline" className="flex gap-1 rounded-lg text-xs bg-secondary text-white">
                <TrendingUpIcon className="size-3" />
                  +10.3%
              </Badge>
            </div>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Total hours worked across all projects <TrendingUpIcon className="size-4" />
            </div>
            <div className="text-muted-foreground">
              3,200 visitors in the last 6 months
            </div>
          </CardFooter>
        </Card>

      </div>
      <ChartAreaInteractive />
    </>
  );
}
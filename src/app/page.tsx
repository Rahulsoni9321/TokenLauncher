"use client";
import Homepage from "@/views/home/components/Homepage/Homepage";
import LeaderBoard from "@/views/home/components/LeaderBoard/page";
import { useSidebarContext } from "@/providers/SideBarprovider";
import { useRouter } from "next/navigation";
import { Sidebar } from "@/views/home/components/Sidebar/page";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
export default function Page() {
  const { leaderboard, createtoken, homepage } = useSidebarContext();
  const router = useRouter();

  if (leaderboard) {
    return <LeaderBoard />;
  } else if (homepage) {
    return <Homepage />;
  } else if (createtoken) {
    router.push("/create");
  }

  return <Homepage />;
}

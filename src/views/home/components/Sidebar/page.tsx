"use client";
import { useSidebarContext } from "@/providers/SideBarprovider";
import { Gift, LogOut, Rocket, Trophy,CircleX,ChevronsRight } from "lucide-react";
import Link from "next/link";
import { FC, ReactNode } from "react";
import { Grid } from "../svg/page";


export function Sidebar() {
  const {
    openhomepage,
    opencreatetoken,
    openleaderboard,
    setalloff,
    toggle,
    expand,
  } = useSidebarContext();
  const onclick: (() => void)[] = [
    openhomepage,
    openleaderboard,
    opencreatetoken,
  ];
  return (
    <div
      className={
        expand
          ? "w-52 transition-all bg-[#1e1f22] flex flex-col gap-10 fixed items-center h-screen overflow-y-auto py-10"
          : "w-20 bg-[#1e1f22] flex flex-col gap-10  transition-all fixed items-center h-screen overflow-y-auto py-10"
      }
    >
      <button className="w-full flex justify-end px-6 " onClick={toggle}>{expand ? <CircleX  className="w-9 h-9"/>:<ChevronsRight className="w-9 h-9"/>}</button>
      <Link onClick={setalloff} href={"/"}>
        {" "}
        <img className="w-12  h-12 rounded-full" src="/DALL·E 2024-12-10 10.56.15 - A sleek and modern logo for an application named 'TOKENLAUNCHER' that allows users to create their own tokens on the Solana blockchain. The design fea.webp"></img>
      </Link>
      <div
        className={
          expand
            ? "flex flex-col gap-5 px-3 w-full"
            : "flex flex-col gap-5 items-center w-full"
        }
      >
        {sidebaricons.map((icons, index) => {
          return (
            <Link
              onClick={onclick[index]}
              className={
                expand
                  ? "hover:rounded-r-full w-full cursor-pointer hover:bg-gray-700 flex gap-4 justify-start  items-center px-2"
                  : "hover:rounded-r-full w-full cursor-pointer flex justify-center hover:bg-gray-700"
              }
              href={"/"}
            >
              {" "}
              <div className={expand?" py-3   ":" p-3 px-2 flex justify-center w-full  "}>
                {icons.icons}
              </div>
              <div
                className={
                  expand
                    ? "cursor-pointer py-3   "
                    : "hidden"
                }
              >
                {icons.iconname}
              </div>
            </Link>
          );
        })}

        <div className={expand?"cursor-pointer p-3 hover:bg-gray-700 w-full flex justify-start px-2 gap-4 hover:rounded-r-full":"cursor-pointer p-3 hover:bg-gray-700 w-full flex justify-center hover:rounded-r-full"}>
          <LogOut className="w-7 h-7" />{" "}
          <div className={expand?"":"hidden"}>Logout</div>
        </div>
      </div>
    </div>
  );
}

const sidebaricons: { iconname: string; icons: ReactNode }[] = [
  { iconname: "Dashboard", icons: <Rocket className="w-7 h-7" /> },
  { iconname: "Leaderboard", icons: <Trophy className="w-7 h-7" /> },
  { iconname: "Create Token", icons: <Grid /> },
];

const sidebaritems = [
  "Dashboard",
  "Leaderboard",
  "Referral Program",
  "Create Token",
];

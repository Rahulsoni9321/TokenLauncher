"use client";
import React, { useState } from "react";
import {
  Dropdownsvg,
  Lightening,
  Profit,
  Searchsvg,
  Valuesvg,
} from "../svg/page";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Valuetable from "./components/Valuetable";
import Profittable from "./components/Profittable";
import Image from "next/image";

const LeaderBoard = () => {
  return (
    <div className="px-2 md:px-6">
      <div className="flex gap-1 md:gap-5 ">
        <div className="flex text-black text-[10px] md:text-[15px] p-2 rounded-full bg-yellow-400">
          <Anchortag label="e6lan" href="/"></Anchortag> &nbsp; created &nbsp;{" "}
          <Anchortag label="HP$UCKS" href="/"></Anchortag>
        </div>
        <div className="flex text-black text-[10px] md:text-[15px] p-2 rounded-full bg-green-400">
          <Anchortag label="e6lan" href="/"></Anchortag>&nbsp; bought 0.86 SOL
          &nbsp;
          <Anchortag label="SLOWANA" href="/"></Anchortag>
        </div>
      </div>
      <div className="flex flex-col gap-3 pt-[75px] lg:p-[100px]">
        <div className="flex gap-2 md:px-12">
          <div className=" text-white flex flex-col w-7/12 gap-3">
            <div className="text-2xl md:text-5xl tracking-wide w-10/12 leading-wider font-semibold">
              {" "}
              BOOSTER LEADERBOARD
            </div>
            <p className="text-xs md:text-sm">TOP 500 OF 5.4M TRADERS WORLDWIDE</p>
            <p className="text-xs md:text-sm font-normal">
              Your adventure awaits. Learn, share and connect with Booster’s
              best of the best.
            </p>
          </div>
          <div>
            <Image
              alt="cup"
              className="drop-shadow-[1px_1px_50px_#00FF6C] w-[90px] xs:w-[120px] md:w-[150px] lg:w-[240px]"
              src="/cup.8a58eef443b3f5468701.png"
              width={100}
              height={100}
            ></Image>
          </div>
        </div>
        <TableContent></TableContent>
      </div>
    </div>
  );
};

function Anchortag({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="underline underline-offset-1 text-[10px] md:text-[15px]"
    >
      {label}
    </a>
  );
}


function TableContent() {
  const [selectedvalue, setselectedvalue] = useState(dropdownlist[0].key);
  const [value, setvalue] = useState<boolean>(false);
  const [profit, setprofit] = useState<boolean>(false);

  return (
    <div className="border border-green-600 p-4 rounded-[20px]">
      <div className=" px-3 flex gap-4 md:gap-12 border-b-[1px] border-gray-500">
        <div
          onClick={() => {
            setprofit(false);
            setvalue(true);
          }}
          className={
            value
              ? "flex gap-1 p-4 border-b-2 border-white hover:cursor-pointer"
              : "flex gap-1 p-4 hover:cursor-pointer"
          }
        >
          <Valuesvg></Valuesvg>Value
        </div>
        <div
          onClick={() => {
            setprofit(true);
            setvalue(false);
            console.log(profit, value)
          }}
          className={
            profit
              ? "flex gap-1 p-4 border-b-2 border-white hover:cursor-pointer"
              : "flex gap-1 p-4 hover:cursor-pointer"
          }
        >
          <Profit></Profit>P&L
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 py-6">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button className="bg-[#272727] flex gap-5 rounded-xl justify-between px-3 py-2 text-gray-200/40  outline-none w-full ">
              {selectedvalue} <Dropdownsvg />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {dropdownlist.map((list, index) => {
              return (
                <DropdownMenuItem key={`${index}${Math.random()}`}>
                  <div
                    onClick={() => setselectedvalue(list.key)}
                    className=" p-2  hover:cursor-pointer w-full"
                  >
                    {list.value}
                  </div>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
        <div className=" text-gray-600 focus-within:text-gray-400 col-span-2   ">
          <span className=" inset-y-0 left-0 flex items-center md:pl-2 ">
            <input
              type="search"
              name="q"
              className="py-2.5 pr-10 text-sm text-white bg-[#272727] rounded-lg px-3 focus:outline-none w-full "
              placeholder="Search by user"
            />
            <button className="p-1.5 content-fit focus:outline-none focus:shadow-outline bg-[#272727] border-r rounded-lg -ml-10 z-10 border">
              <Searchsvg></Searchsvg>
            </button>
          </span>
        </div>
      </div>


      {
        value || (!profit && !value) ? <Valuetable></Valuetable> : <Profittable></Profittable>
      }

    </div>
  );
}





const dropdownlist = [
  { key: "Yesterday", value: "Yesterday" },
  { key: "Last Week", value: "Last Week" },
];


export default LeaderBoard;

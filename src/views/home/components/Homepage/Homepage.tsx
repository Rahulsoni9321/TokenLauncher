"use client";
import React, { useState } from "react";
import Card from "../Card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dropdownsvg, Lightening, Searchsvg, Usersvg } from "../svg/page";
import { useSidebarContext } from "@/providers/SideBarprovider";
import Image from "next/image";

const Homepage = () => {

  const { expand } = useSidebarContext();
  return (
    <div className={expand ? " px-2 md:px-6 ml-24 transition-all " : "px-2 md:px-6 transition-all"}>
      <div className="flex flex-col gap-8 ">
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
        <div className="w-full flex justify-center">
          <button className="bg-[#9945ff] text-white px-8 rounded-xl py-1">
            Create token
          </button>
        </div>
        <div className="w-full text-center text-4xl text-white font-bold ">
          King of the Hill
        </div>

        <TrendingCard></TrendingCard>

        <SearchSection></SearchSection>
        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 place-items-center  gap-y-3 ">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </div>
  );
};

const dropdownlist = [
  { key: "bump order", value: "bump order" },
  { key: "last reply", value: "last reply" },
  { key: "reply count", value: "reply count" },
  { key: "market cap", value: "market cap" },
  { key: "creation time", value: "creation time" },
];
const dropdownlist2 = [
  { key: "asc", value: "asc" },
  { key: "desc", value: "desc" },
];

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

function SearchSection() {
  const [selectedvalue, setselectedvalue] = useState("Bump order");
  const [selectedvalue2, setselectedvalue2] = useState("desc");

  return (
    <div className="w-full  md:flex md:justify-center ">
      <div className="md:flex gap-4 md:items-center grid grid-cols-2  flex:grow">
        <div className=" text-gray-600 focus-within:text-gray-400 col-span-2   ">
          <span className=" inset-y-0 left-0 flex items-center md:pl-2 ">
            <input
              type="search"
              name="q"
              className="py-2.5 pr-10 text-sm text-white bg-[#272727] rounded-lg px-3 focus:outline-none w-full "
              placeholder="Search..."
            />
            <button className="p-1.5 content-fit focus:outline-none focus:shadow-outline bg-[#272727] border-r rounded-lg -ml-10 z-10 border">
              <Searchsvg></Searchsvg>
            </button>
          </span>
        </div>

        <div className="col-span-1 ">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button className="bg-[#272727] flex gap-5 rounded-xl justify-between px-3 py-2 text-gray-200/40  outline-none w-full">
                {selectedvalue} <Dropdownsvg />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {dropdownlist.map((list,index) => {
                return (

                  <DropdownMenuItem>
                    <div
                      key={index}
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
        </div>
        <div className="col-span-1 ">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button className="bg-[#272727] flex gap-4 rounded-xl justify-between px-3 py-2 text-gray-200/40 outline-none w-full ">
                {selectedvalue2} <Dropdownsvg />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {dropdownlist2.map((list,index) => {
                return (
                  <DropdownMenuItem>
                    <div
                      key={index}
                      onClick={() => setselectedvalue2(list.key)}
                      className=" p-2  w-full hover:cursor-pointer"
                    >
                      {list.value}
                    </div>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

function TrendingCard() {
  return (
    <div className="w-full md:flex md:justify-center ">
      <div className="border-[1px] border-violet-400 p-3 rounded-[20px] relative w-full md:w-2/5 ">
        <div className="absolute top-0 right-0 text-violet-600 border-[1px] border-violet-500 rounded-bl-[20px] rounded-tr-[20px] border-transparent p-2 md:p-4 ">
          <Lightening></Lightening>
        </div>
        <div className="flex items-center gap-6">
          <Image
            className="w-[80px] xs:w-[90px] md:w-[114px] h-[80px] xs:h-[90px] md:h-[114px]"
            src="/token1.5543ebc5c8d3c1ce44f4.png"
            alt="token"
          ></Image>
          <div className="flex flex-col gap-2 items-start w-full">
            <div className="text-xl lg:text-2xl text-white font-medium">
              $ LOWANA
            </div>
            <div className="flex items-center gap-2 text-xs lg:text-sm">
              Created by <Usersvg></Usersvg>{" "}
              <Anchortag label="unKnownme" href="/"></Anchortag>
            </div>
            <div className="w-full text-md">
              <div className="">Market cap: 23.60 K</div>
              <div className="h-[8px] my-1 bg-[#333333] w-full relative rounded-full overflow-hidden">
                <div className="absolute h-[8px] w-2/5 z-10 bg-[#9945ff] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

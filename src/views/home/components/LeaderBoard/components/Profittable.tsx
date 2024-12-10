import React from "react";
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
import { Lightening } from "../../svg/page";

const Profittable = () => {
  const profitdetails = [
    {
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x;sdfsda",
      },
      winrate: "49%",
      profit: "$4037.07",
    },
    {
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x;sdfsda",
      },
      winrate: "49%",
      profit: "$4037.07",
    },
    {
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x;sdfsda",
      },
      winrate: "49%",
      profit: "$4037.07",
    },
    {
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x;sdfsda",
      },
      winrate: "49%",
      profit: "$4037.07",
    },
    {
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x;sdfsda",
      },
      winrate: "49%",
      profit: "$4037.07",
    },
    {
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x;sdfsda",
      },
      winrate: "49%",
      profit: "$4037.07",
    },
  ];
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-b border-gray-500 text-lg ">
          <TableHead className="w-[120px] pb-3  text-center text-gray-400">
            RANKING
          </TableHead>
          <TableHead className="w-[210px] pb-3 text-center text-gray-400 ">
            USER
          </TableHead>
          <TableHead className="text-center pb-3 text-gray-400">
            7-DAY WIN RATE
          </TableHead>
          <TableHead className="text-center pb-3 text-gray-400">
            PROFIT
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {profitdetails.map((details, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium text-center ">
              {index + 1}
            </TableCell>
            <TableCell className="text-center flex gap-2 items-center justify-center">
              <img src={details.address.imgsrc}></img>
              {details.address.address}{" "}
              <span className="text-violet-600">
                <Lightening></Lightening>
              </span>{" "}
            </TableCell>
            <TableCell className="text-center">{details.winrate}</TableCell>
            <TableCell className="text-center">{details.profit}</TableCell>
            <TableCell className="text-right">
              <button className="px-4 py-1 text-black bg-green-400 rounded-full">
                Copy
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Profittable;

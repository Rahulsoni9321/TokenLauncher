import React, { useState } from "react";
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
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import Image from "next/image";





const Valuetable = () => {
  const [currentpage, setcurrentpage] = useState<number>(1);
  let id = 1;
  let limit = 10;
  const transactiondetails = [
    {
      id:id++,
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x...sdfsda",
      },
      value: "$533.01",
      totalpoint: "905363",
    },
    {
      id:id++,
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x...sdfsda",
      },
      value: "$533.01",
      totalpoint: "905363",
    },
    {
      id:id++,
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x...sdfsda",
      },
      value: "$533.01",
      totalpoint: "903",
    },
    {
      id:id++,
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x...sdfsda",
      },
      value: "$533.01",
      totalpoint: "90536dsf3",
    },
    {
      id:id++,
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x...sdfsda",
      },
      value: "$533.01dds",
      totalpoint: "90536dsf3",
    },
    {
      id:id++,
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x...sdfsda",
      },
      value: "$533.01dds",
      totalpoint: "90536dsf3",
    },
    {
      id:id++,
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x...sdfsda",
      },
      value: "$533.01dds",
      totalpoint: "90536dsf3",
    },
    {
      id:id++,
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x...sdfsda",
      },
      value: "$533.01dds",
      totalpoint: "90536dsf3",
    },
    {
      id:id++,
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x...sdfsda",
      },
      value: "$533.01dds",
      totalpoint: "90536dsf3",
    },
    {
      id:id++,
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x...sdfsda",
      },
      value: "$533.01dds",
      totalpoint: "90536dsf3",
    },
    {
      id:id++,
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x...sdfsda",
      },
      value: "$533.01dds",
      totalpoint: "90536dsf3",
    },
    {
      id:id++,
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x...sdfsda",
      },
      value: "$533.01dds",
      totalpoint: "90536dsf3",
    },
    {
      id:id++,
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x...sdfsda",
      },
      value: "$533.01dds",
      totalpoint: "90536dsf3",
    },
    {
      id:id++,
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x...sdfsda",
      },
      value: "$533.01dds",
      totalpoint: "90536dsf3",
    },
    {
      id:id++,
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x...sdfsda",
      },
      value: "$533.01dds",
      totalpoint: "90536dsf3",
    },
    {
      id:id++,
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x...sdfsda",
      },
      value: "$533.01dds",
      totalpoint: "90536dsf3",
    },
    {
      id:id++,
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x...sdfsda",
      },
      value: "$533.01dds",
      totalpoint: "90536dsf3",
    },
    {
      id:id++,
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x...sdfsda",
      },
      value: "$533.01dds",
      totalpoint: "90536dsf3",
    },
    {
      id:id++,
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x...sdfsda",
      },
      value: "$533.01dds",
      totalpoint: "90536dsf3",
    },
    {
      id:id++,
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x...sdfsda",
      },
      value: "$533.01dds",
      totalpoint: "90536dsf3",
    },
    {
      id:id++,
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x...sdfsda",
      },
      value: "$533.01dds",
      totalpoint: "90536dsf3",
    },
    {
      id:id++,
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x...sdfsda",
      },
      value: "$533.01dds",
      totalpoint: "90536dsf3",
    },
    {
      id:id++,
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x...sdfsda",
      },
      value: "$533.01dds",
      totalpoint: "90536dsf3",
    },
    {
      id:id++,
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x...sdfsda",
      },
      value: "$533.01dds",
      totalpoint: "90536dsf3",
    },
    {
      id:id++,
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x...sdfsda",
      },
      value: "$533.01dds",
      totalpoint: "90536dsf3",
    },
    {
      id:id++,
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x...sdfsda",
      },
      value: "$533.01dds",
      totalpoint: "90536dsf3",
    },
    {
      id:id++,
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x...sdfsda",
      },
      value: "$533.01dds",
      totalpoint: "90536dsf3",
    },
    {
      id:id++,
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x...sdfsda",
      },
      value: "$533.01dds",
      totalpoint: "90536dsf3",
    },
    {
      id:id++,
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x...sdfsda",
      },
      value: "$533.01dds",
      totalpoint: "90536dsf3",
    },
    {
      id:id++,
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x...sdfsda",
      },
      value: "$533.01dds",
      totalpoint: "90536dsf3",
    },
    {
      id:id++,
      address: {
        imgsrc: "/downloadpix.png",
        address: "5000x...sdfsda",
      },
      value: "$533.01dds",
      totalpoint: "sonisf3",
    },
    ];
  

   
   

  return (
    <Table>
      <TableHeader>
        <TableRow className="border-b border-gray-500 text-sm md:text-lg ">
          <TableHead className="md:w-[120px] pb-3  text-center text-gray-400">
            RANKING
          </TableHead>
          <TableHead className="md:w-[270px] pb-3 text-center text-gray-400 ">
            USER
          </TableHead>
          <TableHead className="text-center pb-3 text-gray-400">
            VALUE
          </TableHead>
          <TableHead className="text-center pb-3 text-gray-400">
            TOTAL POINTS
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactiondetails.slice((currentpage-1)*limit,(currentpage)*limit)
          .map((details, index) => (
            <TableRow key={index} className="border-b border-gray-400">
              <TableCell className="font-medium text-center ">
                {details.id }
              </TableCell>
              <TableCell className="text-center flex gap-2 items-center justify-center">
                <Image alt="user" src={details.address.imgsrc} width={100} height={100}></Image>
                {details.address.address}{" "}
                <span className="text-violet-600 hidden md:block">
                  <Lightening></Lightening>
                </span>{" "}
              </TableCell>
              <TableCell className="text-center">{details.value}</TableCell>
              <TableCell className="text-center">
                {details.totalpoint}
              </TableCell>
              <TableCell className="text-right">
                <button className="px-4 py-1 text-black bg-green-400 rounded-full">
                  Copy
                </button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
      <TableFooter className="text-center">
        <TableRow className="text-center">
          <TableCell className="flex justify-center items-center gap-3 w-full">
            <button
              onClick={() => {
                if (currentpage === 1) {
                  return;
                }
                setcurrentpage(currentpage - 1);
              }}
              disabled={currentpage-1 === 0}
              className="rounded-full"
            >
              <FaChevronLeft></FaChevronLeft>
            </button>
            <div className="flex gap-2 items-center">
              <button>{currentpage}</button>
            </div>
            <button
              onClick={() => {
                
                if ((currentpage) * 2 >= transactiondetails.length) {
                  return;
                }
               
                setcurrentpage(currentpage + 1);
                
              }}
              disabled={(currentpage) * 2 >= transactiondetails.length}
              className="rounded-full"
            >
              <FaChevronRight />
            </button>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};


export default Valuetable;

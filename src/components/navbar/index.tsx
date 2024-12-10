import Image from "next/image";

import { Menu as MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
// import ConnectWalletButton from "../web3/ConnectWalletButton";
import OngearLogo from "../ui/OngearLogo";
import Link from "next/link";
import { NavMenu } from "./menu";
import { SelectAndConnectWalletButton } from "../connect-wallet-button";
import { WalletButton } from "@/providers/solana-provider";

export const Navbar = () => {
  return (
    <header className="w-full flex mx-auto max-w-[1280px] px-[1rem] justify-between items-center align-middle py-8 z-1">
      <Link href="/" className="flex gap-2 align-middle ">
        <OngearLogo />
      </Link>
      {/* 
      <Sheet>
        <SheetTrigger>
          <MenuIcon className="md:hidden" />
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col gap-2 align-middle">
            <Button size="sm" className="rounded-[2rem]" variant="outline">
              <Image
                src="/nova.png"
                alt="logo"
                width={20}
                height={20}
                className="pr-2"
              />
              ETH
            </Button>
            <ConnectWalletButton />
          </div>
        </SheetContent>
      </Sheet> */}

      <div className="gap-2 align-middle hidden md:flex">
        <NavMenu />

        <WalletButton />
      </div>
    </header>
  );
};

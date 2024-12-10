"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/cn";
import { NumberBadge } from "../ui/number-badge";

export const NavMenu = () => {
  const userNavlinks = [
    {
      name: "Launch Coin",
      href: "/create",
    },
  ];

  const navlinks = userNavlinks;

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navlinks.map((link) => (
          <NavigationMenuItem key={link.name}>
            <Link href={link.href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {link.name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

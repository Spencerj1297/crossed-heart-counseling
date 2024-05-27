"use client";
import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/app/components/ui/drawer";
import { useState } from "react";

export const Nav = () => {
  const textStyles = "hover:text-skyBlue cursor-pointer";
  
  const tabs = [
    { tab: "Home", link: "" },
    { tab: "About", link: "about" },
    { tab: "Services", link: "services" },
    { tab: "3-Day Intensives", link: "intensives" },
    { tab: "Resources", link: "resources" },
    { tab: "Contact", link: "link" },
  ];

  return (
    <div className="p-4 lg:py-2 flex absolute top-0 w-full z-20 bg-grey justify-between">
      <div className="lg:hidden flex p-2 order-2">
        <Drawer>
          <DrawerTrigger>
            <IconMenu2 />
          </DrawerTrigger>
          <DrawerContent className="text-3xl text-grey bg-white opacity-85">
            {tabs.map((tab, ind) => (
              <DrawerClose asChild>
              <Link key={ind} href={`/${tab.link}`}>
                <button>{tab.tab}</button>
              </Link>
              </DrawerClose>
            ))}
          </DrawerContent>
        </Drawer>
      </div>
      <div className="lg:w-1/2 lg:flex flex-col lg:py-8 lg:px-16 order-1">
        <h2 className="text-2xl lg:text-4xl">Laura Potter | M.C., L.C.P.C.</h2>
        <h3 className="lg:text-xl">Crossed Hearts Counseling</h3>
      </div>
      <div className="hidden lg:flex justify-end items-center px-16 w-1/2 gap-8 text-xl order-2">
        {tabs.map((tab, ind) => (
          <Link href={`/${tab.link}`}>
            <button key={ind} className={textStyles}>
              {tab.tab}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

"use client";
import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import Image from "next/image";
import { sideBarOptions } from "@/utils/sideBarOptions";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const pathname = usePathname();
  const buttonStyle =
    "hover:border hover:border-green-light hover:text-green-light hover:rounded-lg";

  return (
    <aside className="w-60 p-4 h-screen fixed top-0 left-0 z-10 pt-[70px] bg-white shadow-md">
      <div className="w-full flex justify-center items-center mb-8 border-b border-b-gray-300">
        <Image src={Logo} alt="Logo" width={200} height={200} />
      </div>
      <nav className="flex flex-col gap-y-12">
        <ul className=" text-light-gray space-y-4">
          {sideBarOptions.general.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className={`flex items-center gap-x-4 p-3 ${
                pathname === item.href
                  ? " bg-green-light text-white rounded-lg"
                  : buttonStyle
              }`}
            >
              <item.icon
                size={24}
                className={`${pathname === item.href && "text-white"}`}
              />

              <li className="font-semibold">{item.label}</li>
            </Link>
          ))}
        </ul>
        <span className="font-semibold text-lg">Sobre a conta</span>
        <ul className=" text-light-gray space-y-4">
          {sideBarOptions.account.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className={`flex items-center gap-x-4 p-3 ${
                pathname === item.href
                  ? " bg-green-light text-white rounded-lg"
                  : buttonStyle
              }`}
            >
              <item.icon
                size={24}
                className={`${pathname === item.href && "text-white"}`}
              />

              <li className="font-semibold">{item.label}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

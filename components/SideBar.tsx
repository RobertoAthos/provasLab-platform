"use client";
import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import Image from "next/image";
import { sideBarOptions } from "@/utils/sideBarOptions";
import Link from "next/link";

export default function SideBar() {
  const [activeLink, setActiveLink] = useState(0);

  const linkStyle =
    "flex items-center gap-x-4 p-4 hover:border hover:border-slate-200 hover:rounded-full";

  const handleSetActiveLink = (index: number, isAccountLink: boolean) => {
    if (isAccountLink && index === 0) {
        setActiveLink(-1); 
      } else {
        setActiveLink(index);
      }
  };
  return (
    <div className="w-60 p-4 h-screen absolute pt-[70px] bg-white shadow-md">
      <div className="w-full flex justify-center items-center mb-8 border-b border-b-gray-300">
        <Image src={Logo} alt="Logo" width={200} height={200} />
      </div>
      <nav className="flex flex-col gap-y-12">
        <ul className=" text-light-gray">
          {sideBarOptions.general.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className={`${linkStyle} ${
                activeLink === index && "border border-slate-200 rounded-full"
              }`}
              onClick={() => handleSetActiveLink(index, false)}
            >
              <div className="bg-white">
                <item.icon size={24} className="text-green-light" />
              </div>
              <li className="font-semibold">{item.label}</li>
            </Link>
          ))}
        </ul>
        <span className="font-semibold text-lg">Sobre a conta</span>
        <ul className=" text-light-gray">
        {sideBarOptions.account.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className={`${linkStyle} ${
                activeLink === -1 && index === 0 && "border border-slate-200 rounded-full"
              }`}
              onClick={() => handleSetActiveLink(index, true)}
            >
              <div className="bg-white">
                <item.icon size={24} className="text-green-light" />
              </div>
              <li className="font-semibold">{item.label}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}

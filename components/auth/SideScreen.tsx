import React from "react";
import Image from "next/image";
import Link from "next/link";
import vector from "@/assets/Vector 6.svg";

export default function SideScreen() {
  return (
    <div className="w-[60%] bg-primary-gradient h-screen relative">
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="text-left text-white">
          <h2 className="font-bold text-[40px]">ProvasLab</h2>
          <p className="text-[1rem] font-medium mb-4">
            Inteligência artificial feita para professores
          </p>
          <Link href="/">
            <button className="w-[130px] bg-medium-blue p-2 rounded-full hover:underline">
              Veja mais
            </button>
          </Link>
        </div>
      </div>
      <div>
        <Image
          src={vector}
          alt="vector"
          className="absolute bottom-[-15rem] left-[-10rem]"
        />
      </div>
    </div>
  );
}

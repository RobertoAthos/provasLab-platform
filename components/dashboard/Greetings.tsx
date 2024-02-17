"use client";
import { useUser } from "@/context/userContext";
import React from "react";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { SlBookOpen } from "react-icons/sl";

export default function Greetings() {
  const { user } = useUser();
  if (!user) {
    return "carregando...";
  }
  const nameArray = user.displayName.split(" ");
  const firstLetterFirstName = nameArray[0].charAt(0);
  const firstLetterLastName = nameArray[nameArray.length - 1].charAt(0);

  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  let greeting;

  if (currentHour < 12) {
    greeting = "Bom dia";
  } else if (currentHour < 18) {
    greeting = "Boa tarde";
  } else {
    greeting = "Boa noite";
  }

  const buttonStyle =
    "bg-white flex justify-around items-center gap-x-2 rounded-full p-2 border border-dark-gray hover:underline";
  return (
    <div className="w-ful m-auto p-4">
      <div className="w-full h-[200px] flex flex-col justify-start items-start bg-medium-blue p-4 rounded-lg">
        <div className="w-full max-w-screen-2xl m-auto">
          <h2 className="font-semibold text-3xl text-white">
            {greeting},{" "}
            <span className="text-green-light">
              {user.displayName.split(" ")[0]}!
            </span>
          </h2>
          <span className="text-white font-normal">
            É bom ter você novamente aqui :)
          </span>
        </div>
      </div>
      <div className="w-full max-w-screen-2xl m-auto shadow-md flex justify-between items-center px-12 h-[80px] bg-light-gradient rounded-lg mt-[-50px] sp-8">
        <div className="flex items-center gap-x-4 font-semibold">
          <div className="w-[60px] h-[60px] text-white text-3xl bg-secondary-gradient flex justify-center items-center rounded-lg">
            {firstLetterFirstName}
            {firstLetterLastName}
          </div>
          <div className="leading-4">
            <h3 className="text-dark-gray">{user.displayName}</h3>
            <span className="text-light-gray font-normal text-[14px]">
              {user.email}
            </span>
          </div>
        </div>
        <div className="space-x-4 flex font-semibold">
          <button className={buttonStyle}>
            <SlBookOpen size={20} />
            Criar plano de aula
          </button>
          <button className={buttonStyle}>
            <HiOutlineDocumentCheck size={24} />
            Criar exercícios
          </button>
        </div>
      </div>
    </div>
  );
}

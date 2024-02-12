import React from "react";
import { FaUserLarge } from "react-icons/fa6";
import { IoLockClosedSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

export default function SingupForm() {
  const inputStyle =
    "border border-slate-200 rounded-3xl px-4 py-6 flex items-center gap-x-4";
  return (
    <form className="space-y-4">
      <div className={inputStyle}>
        <FaUserLarge size={24} className="text-slate-300" />
        <input
          type="text"
          className="outline-none"
          placeholder="Nome e sobrenome"
        />
      </div>
      <div className={inputStyle}>
        <MdOutlineEmail size={24} className="text-slate-300" />
        <input
          type="email"
          className="outline-none"
          placeholder="Endereço de e-mail"
        />
      </div>
      <div className={inputStyle}>
        <IoLockClosedSharp size={24} className="text-slate-300" />
        <input type="password" className="outline-none" placeholder="Senha" />
      </div>
      <button className="bg-medium-blue hover:bg-blue-800 text-white font-normal p-6 w-full rounded-full">
        Fazer cadastro
      </button>
    </form>
  );
}

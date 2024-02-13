"use client";
import React from "react";
import { FaUserLarge } from "react-icons/fa6";
import { IoLockClosedSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpUserSchema } from "@/validation/auth";
import { useUser } from "@/context/userContext";
import FieldErrorMessage from "../FieldError";
import Spinner from "../Spinner";

interface IUser {
  username: string
  email: string,
  password: string
}

export default function SignupForm() {
  const {signUpUser, error} = useUser()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IUser>({
    resolver: zodResolver(signUpUserSchema),
  });

  const handleSignUp = async(data: IUser) => {
    try {
      await signUpUser(data.email, data.password, data.username)
    } catch (error) {
      console.log(error)
    }
  }

  const inputStyle =
    "border border-slate-200 rounded-3xl px-4 py-6 flex items-center gap-x-4";
  return (
    <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
      <div className={inputStyle}>
        <FaUserLarge size={24} className="text-slate-300" />
        <input
          {...register("username")}
          type="text"
          className="outline-none"
          placeholder="Nome e sobrenome"
          name="username"
        />
      </div>
      <FieldErrorMessage error={errors.username}/>
      <div className={inputStyle}>
        <MdOutlineEmail size={24} className="text-slate-300" />
        <input
          {...register("email")}
          type="email"
          className="outline-none"
          placeholder="Endereço de e-mail"
          name="email"
        />
      </div>
      <FieldErrorMessage error={errors.email}/>
      <div className={inputStyle}>
        <IoLockClosedSharp size={24} className="text-slate-300" />
        <input
          {...register("password")}
          type="password"
          className="outline-none"
          placeholder="Senha"
          name="password"
        />
      </div>
      <FieldErrorMessage error={errors.password}/>
      {error && (
        <div className="mt-4 bg-red-200 text-red-700 p-4 rounded-lg">
          {error}
        </div>
      )}
      <button className="bg-medium-blue hover:bg-blue-800 text-white font-normal p-6 w-full rounded-full">
        {isSubmitting ? <Spinner/> : "Fazer cadastro"}
      </button>
    </form>
  );
}

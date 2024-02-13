"use client"
import { useUser } from "@/context/userContext";
import { signInUserSchema } from "@/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { IoLockClosedSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import FieldErrorMessage from "../FieldError";
import Spinner from "../Spinner";

interface IUserLogin {
  email: string;
  password: string;
}

export default function SigninForm() {
  const { signInUser } = useUser();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IUserLogin>({
    resolver: zodResolver(signInUserSchema),
  });

  const handleSignIn = async (data: IUserLogin) => {
    try {
      await signInUser(data.email, data.password);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  const inputStyle =
    "border border-slate-200 rounded-3xl px-4 py-6 flex items-center gap-x-4";
  return (
    <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
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
      <button className="bg-medium-blue hover:bg-blue-800 text-white font-normal p-6 w-full rounded-full">
        {isSubmitting ? <Spinner/> : "Fazer login"}
      </button>
    </form>
  );
}

import SigninForm from "@/components/auth/SigninForm";
import Link from "next/link";
import React from "react";

export default function LoginUser() {
  return (
    <div className="w-full max-w-[30%] m-auto h-screen flex justify-center items-center">
      <div>
        <div className="text-dark-gray">
          <h3 className="font-bold text-[26px]">
            Olá, <span className="text-green-light">de novo!</span>
          </h3>
          <span>É bom ter você mais uma vez aqui.</span>
        </div>
        <div className="mt-[40px]">
          <SigninForm />
        </div>
        <div className="mt-4 text-center">
          <span className="text-dark-gray">
            Ainda não tem conta?{" "}
            <Link
              href="/auth/signup"
              className="text-green-light hover:underline"
            >
              Crie uma agora mesmo
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

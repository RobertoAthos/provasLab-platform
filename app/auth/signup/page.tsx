import SignupForm from "@/components/auth/SignupForm";
import Link from "next/link";
import React from "react";

export default function RegisterUser() {
  return (
    <div className="w-full max-w-[30%] m-auto h-screen flex justify-center items-center">
      <div>
        <div className="text-dark-gray">
          <h3 className="font-bold text-[26px]">Olá!</h3>
          <span>Cadastre-se para começar.</span>
        </div>
        <div className="mt-[40px]">
          <SignupForm />
        </div>
        <div className="mt-4 text-center">
          <span className="text-dark-gray">
            já tem conta?{" "}
            <Link
              href="/auth/signin"
              className="text-green-light hover:underline"
            >
              Faça login agora mesmo
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

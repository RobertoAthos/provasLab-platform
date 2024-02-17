import React from "react";
import Spinner from "./Spinner";

export default function SimplePageLoader() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-white opacity-50 fixed z-50 top-0 left-0">
        <Spinner size="lg"/>
    </div>
  );
}

"use client";
import CreateExerciseModal from "@/components/dashboard/CreateExerciseModal";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Exercises() {
  const param = useSearchParams();

  const isCreateExercise = Boolean(param.get("create_exercise"));

  return <div>{isCreateExercise && <CreateExerciseModal />}</div>;
}

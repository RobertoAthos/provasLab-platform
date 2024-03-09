"use client";
import CreateExerciseModal from "@/components/dashboard/CreateExerciseModal";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Exercises() {
  const [createExercise, setCreateExercise] = useState(false);
  const param = useSearchParams();

  useEffect(() => {
    if (Boolean(param.get("create_exercise"))) {
      setCreateExercise(true);
    }
  }, [param]);

  return <div>{createExercise && <CreateExerciseModal closeModal={()=>setCreateExercise(false)}/>}</div>;
}

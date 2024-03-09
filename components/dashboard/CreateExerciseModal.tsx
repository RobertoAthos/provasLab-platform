"use client";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import ExerciseForm from "../ExerciseForm";
import ExerciseDetailTextArea from "../ExerciseDetailTextArea";

export default function CreateExerciseModal({closeModal}:{closeModal: () => void}) {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <ExerciseForm />;
      case 2:
        return <ExerciseDetailTextArea />;
      default:
        return null;
    }
  };

  const buttonStyle =
    "bg-medium-blue w-full max-w-[200px] m-auto text-white font-semibold flex justify-around items-center gap-x-2 rounded-lg p-3 hover:underline";

  return (
    <div className="bg-white rounded-3xl shadow-md w-full max-w-6xl m-auto h-full relative">
      <div className="mt-12">
        <h3 className="text-black text-2xl font-semibold text-center p-8">
          Preencha os campos para criarmos as questões 🚀
        </h3>
        <MdClose
          onClick={closeModal}
          className="text-black text-2xl font-semibold text-center mt-4 absolute top-2 right-8 hover:text-red-500 cursor-pointer"
        />

        <form className="w-full flex flex-col justify-center items-center mt-12">
          {renderStepContent()}
        </form>
        <div className="flex justify-center p-8">
          {currentStep !== 1 && (
            <button onClick={handlePrevStep} className={buttonStyle}>
              Voltar
            </button>
          )}
          {currentStep === 1 ? (
            <button onClick={handleNextStep} className={buttonStyle}>
              Próximo
            </button>
          ) : (
            <button onClick={handleNextStep} className={buttonStyle}>
              Criar 🚀
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

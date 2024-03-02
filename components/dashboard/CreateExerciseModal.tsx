"use client"
import { useState } from "react";
import { MdClose } from "react-icons/md";
import ExerciseForm from "../ExerciseForm";

export default function CreateExerciseModal() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleCloseModal = () => {
    // Implement close modal functionality here
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <ExerciseForm />;
      // Add more cases for additional steps if needed
      default:
        return null;
    }
  };

  const buttonStyle = "bg-medium-blue w-full max-w-[200px] m-auto text-white font-semibold flex justify-around items-center gap-x-2 rounded-lg p-4 hover:underline";

  return (
    <div className="flex justify-center items-center h-screen w-full bg-black opacity-70 fixed z-50 top-0 left-0">
      <div className="bg-white rounded-lg shadow-md w-full max-w-6xl m-auto h-full relative">
        <div className="flex items-center justify-center mt-12">
          <h3 className="text-black text-2xl font-semibold text-center">
            Preencha os campos para criarmos as questões 🚀
          </h3>
        </div>
        <MdClose
          onClick={handleCloseModal}
          className="text-black text-2xl font-semibold text-center mt-4 absolute top-2 right-8 hover:text-red-500 cursor-pointer"
        />

        <form className="w-full flex justify-center items-center mt-12">
          {renderStepContent()}
        </form>
        <div>
          {currentStep !== 1 && (
            <button onClick={handlePrevStep} className={buttonStyle}>Voltar</button>
          )}
          {currentStep === 1 ? (
            <button onClick={handleNextStep} className={buttonStyle}>Próximo</button>
          ) : (
            <button onClick={handleNextStep} className={buttonStyle}>Criar 🚀</button>
          )}
        </div>
      </div>
    </div>
  );
}

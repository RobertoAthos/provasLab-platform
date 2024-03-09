import React from "react";

export default function ExerciseDetailTextArea() {
  return (
    <div className="w-full max-w-[800px] m-auto">
      <div className="mb-12">
        {" "}
        <h3 className="text-3xl font-semibold">
          Detalhes dos enunciados{" "}
          <span className="text-lg text-light-gray">(opcional)</span>
        </h3>
        <p className="text-light-gray text-lg">
          Você pode fornecer mais detalhes de como você quer sua atividade de
          forma detalhada, lembrando que quanto mais informação você fornecer,
          melhor será o resultado final.
        </p>
      </div>
      <div className="mb-6">
        <textarea
          className="w-full h-40 p-4 border border-gray-300 rounded-md transition duration-300 outline-none focus:border-blue-light resize-none"
          placeholder="Escreva os detalhes do exercício aqui..."
          maxLength={300}
        />
      </div>
      <div className="flex items-center">
        <input type="checkbox" id="noDetail" className="rounded-full" />
        <label htmlFor="noDetail" className="ml-2 font-light text-light-gray">
          Não quero detalhar
        </label>
      </div>
    </div>
  );
}

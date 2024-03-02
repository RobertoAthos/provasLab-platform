import { subjects } from "@/utils/subjects";
import React from "react";

export default function ExerciseForm() {
  const inputStyle =
    "w-[400px] border-2 border-light-gray rounded-lg p-3 outline-none bg-white";

  const labelStyle = "font-medium mb-2 text-medium-gray text-xl";
  return (
    <div className="grid gap-x-12 gap-y-5 my-6 sm:grid-cols-2">
      <div className="flex flex-col">
        <label className={labelStyle}>Matéria</label>
        <select className={inputStyle}>
          <option>Clique para selecionar</option>
          {subjects.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label className={labelStyle}>Nível de dificuldade</label>
        <select className={inputStyle}>
          <option>Clique para selecionar</option>
          <option>Fácil</option>
          <option>Médio</option>
          <option>Difícil</option>
          <option>Os alunos vão chorar</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className={labelStyle}>Assunto(s) do exercício</label>
        <input type="text" className={inputStyle} />
      </div>
      <div className="flex flex-col">
        <label className={labelStyle}>Tipo das questões</label>
        <select className={inputStyle}>
          <option>Clique para selecionar</option>
          <option>Múltipla escolha</option>
          <option>Questões abertas</option>
          <option>Mista</option>
        </select>
      </div>
    </div>
  );
}

import Greetings from "@/components/dashboard/Greetings";
import Link from "next/link";

export default function Dashboard() {
  const exercices = [];
  const classPlans = [];
  const buttonStyle = "w-[300px] font-semibold border border-green-light text-green-light px-4 py-2 rounded-lg mb-4 hover:bg-green-light hover:text-white"
  return (
    <>
      <article>
        <Greetings />
      </article>
      <section className="w-full mt-16 p-4">
        <div className="w-full bg-white max-w-screen-2xl rounded-lg shadow-md m-auto p-4">
          <article>
            <div className="flex justify-between items-center border-b border-b-slate-200">
              <h3 className="text-3xl text-medium-gray font-semibold mb-4 ">
                Exercícios mais recentes
              </h3>
              <Link href='/platform/dashboard/exercises'>
                <button className={buttonStyle}>
                  + Ver todos os exercícios
                </button>
              </Link>
            </div>
            {exercices.length === 0 ? (
                <p>Parece meio vazio aqui</p>
            ): (
              <p>aoba</p>
            )}
          </article>
          <article>
            <div className="mt-24 flex justify-between items-center border-b border-b-slate-200">
              <h3 className="text-3xl text-medium-gray font-semibold mb-4 ">
                Planos de aula mais recentes
              </h3>
              <Link href='/platform/dashboard/class-plan'>
                <button className={buttonStyle}>
                  + Ver todos os planos
                </button>
              </Link>
            </div>
            {exercices.length === 0 ? (
              <p>Parece meio vazio aqui</p>
            ): (
              <p>aoba</p>
            )}
          </article>
        </div>
      </section>
    </>
  );
}

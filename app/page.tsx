import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import heroImg from "@/assets/hero-img.svg";
import vector1 from "@/assets/Vector 1.png";
import vector2 from "@/assets/Vector 2.png";
import box1 from "@/assets/box1.png";
import box2 from "@/assets/box2.png";
import box3 from "@/assets/box3.png";
import linha from "@/assets/Vector 4.png";

export default function Home() {
  return (
    <>
      <header className="w-full p-4 max-w-screen-2xl m-auto flex justify-between items-center">
        <div>
          <Image src={logo} alt="Logo" />
        </div>
        <nav>
          <ul className="flex items-center gap-x-8">
            <li className="hover:underline hover:text-blue-light">
              <Link href="/">Início</Link>
            </li>
            <li className="hover:underline hover:text-blue-light">
              <Link href="/">Sobre</Link>
            </li>
            <li className="hover:underline hover:text-blue-light">
              <Link href="/">Serviços</Link>
            </li>
            <li className="bg-blue-light text-white p-3 rounded-lg hover:underline">
              <Link href="/">Entrar na lista de espera</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="hero" className="w-full bg-blue-light-2 p-4 relative">
          <Image
            src={vector1}
            alt="vector"
            className="w-auto absolute right-0 top-48"
          />
          <Image
            src={vector2}
            alt="vector-2"
            className="hidden xl:flex w-auto absolute left-0 bottom-0 top-72"
          />

          <div className="w-full max-w-screen-2xl m-auto flex justify-between items-center">
            <div className="w-full max-w-[778px]">
              <h1 className="text-black text-4xl leading-[50px] font-semibold">
                O Futuro do Ensino Começa Aqui: Descubra Como{" "}
                <span className="text-blue-light">
                  Facilitamos a Vida dos Professores no Desenvolvimento e
                  Avaliação de Atividades.
                </span>
              </h1>

              <p className="text-[#5C5C5C] mt-6">
                Transforme sua sala de aula em uma ferramenta poderosa para
                Professores que Querem Mais do Seu Tempo. Descubra Como
                facilitamos sua vida no desenvolvimento e Avaliação de
                Atividades.
              </p>

              <button className="bg-primary-gradient text-white p-3 rounded-lg mt-12 hover:underline">
                Seja a primeira pessoa a testar nossa plataforma
              </button>
            </div>
            <div>
              <Image
                src={heroImg}
                alt="professor criando atividades e provas"
                className="w-auto h-auto z-0"
              />
            </div>
          </div>
        </section>
        <div className="w-full border-b border-b-slate-200 p-8">
          <div className="w-full max-w-screen-2xl m-auto flex justify-between items-center">
            <div className="flex items-center gap-x-4">
              <Image src={box1} alt="box1" />
              <div>
                <span className="font-semibold text-xl">
                  Criar atividade/testes
                </span>
                <p className="text-[#5C5C5C]">Nossa IA cria para você</p>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <Image src={box2} alt="box1" />
              <div>
                <span className="font-semibold text-xl">
                  Faça correções 10x mais rápido
                </span>
                <p className="text-[#5C5C5C]">Nossa IA corrige para você</p>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <Image src={box3} alt="box1" />
              <div>
                <span className="font-semibold text-xl">
                  Planejamos a sua aula em um click
                </span>
                <p className="text-[#5C5C5C]">Nossa IA planeja a sua aula</p>
              </div>
            </div>
          </div>
        </div>

        <section className="w-full mt-24 p-8">
          <div className="w-full max-w-screen-2xl m-auto relative">
            <div className="text-center clear-start">
              <h2 className="text-4xl w-full max-w-[772px] m-auto font-semibold leading-[50px]">
                Você já viu uma{" "}
                <span className="text-blue-light">Inteligência Artificial</span>{" "}
                exclusiva para professores?
              </h2>
              <p className="w-full max-w-[730px] m-auto pt-5 text-center text-[#5C5C5C]">
                Compreendemos que a rotina do profissional da educação é intensa
                e demanda um tempo considerável para a elaboração de atividades
                ou avaliações para os alunos. Às vezes, a criatividade fica em
                segundo plano diante da falta de tempo. Permita-nos ser a
                solução para isso.
              </p>

              <button className="mt-8 border-blue-light border p-3 rounded-lg text-blue-light hover:underline">
                Quero testar a plataforma!
              </button>
            </div>
          </div>
        </section>

        <section className="w-full mt-24 p-8">

        </section>
      </main>
    </>
  );
}

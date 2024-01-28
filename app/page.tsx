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
import { IoIosArrowDown, IoIosArrowDropdown } from "react-icons/io";
import teacher from "@/assets/teacher.png";
import illustration from "@/assets/about-illustration.png";

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

              <div className="mt-12">
                <IoIosArrowDropdown
                  size={90}
                  className="animate-bounce text-blue-light"
                />
              </div>
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
            <div className="text-center">
              <div className="relative">
                <h2 className="text-4xl w-full max-w-[772px] m-auto font-semibold leading-[50px]">
                  Você já viu uma{" "}
                  <span className="text-blue-light">
                    Inteligência Artificial
                  </span>{" "}
                  exclusiva para professores?
                </h2>
                <p className="w-full max-w-[730px] m-auto pt-5 text-center text-[#5C5C5C]">
                  Compreendemos que a rotina do profissional da educação é
                  intensa e demanda um tempo considerável para a elaboração de
                  atividades ou avaliações para os alunos. Às vezes, a
                  criatividade fica em segundo plano diante da falta de tempo.
                  Permita-nos ser a solução para isso.
                </p>
              </div>
              <Image
                src={linha}
                alt="linha"
                className="w-auto absolute top-0 right-24"
              />

              <button className="mt-8 border-blue-light border p-3 rounded-lg text-blue-light hover:underline">
                Quero testar a plataforma!
              </button>
            </div>
          </div>
        </section>

        <section className="w-full mt-24 p-8">
          <div className="w-full max-w-screen-2xl m-auto flex flex-wrap justify-around">
            <div>
              <Image src={teacher} alt="professora corrigindo prova" />
            </div>
            <div>
              <h2 className="text-4xl w-full text-blue-light font-semibold">
                O que iremos oferecer:
              </h2>
              <div className="w-[600px] flex flex-col gap-y-6 text-blue-light font-semibold mt-12">
                <div className="border border-blue-light rounded-lg hover:bg-blue-light hover:text-white cursor-pointer">
                  <span className="flex items-center justify-between p-3">
                    Comandos simples, resultados poderosos{" "}
                    <IoIosArrowDown size={30} className="animate-bounce" />
                  </span>
                </div>
                <div className="border border-blue-light rounded-lg hover:bg-blue-light hover:text-white cursor-pointer">
                  <span className="flex items-center justify-between p-3">
                    Flexibilidade para todos os níveis{" "}
                    <IoIosArrowDown size={30} className="animate-bounce" />
                  </span>
                </div>
                <div className="border border-blue-light rounded-lg hover:bg-blue-light hover:text-white cursor-pointer">
                  <span className="flex items-center justify-between p-3">
                    Avaliações autênticas e precisas{" "}
                    <IoIosArrowDown size={30} className="animate-bounce" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full mt-24">
          <div className="w-full max-w-screen-2xl m-auto flex justify-between items-center">
            <div className="w-[436px]">
              <h2 className="text-4xl text-blue-light font-semibold mb-8">
                Sobre
              </h2>
              <p className="text-[#5C5C5C]">
                Estamos construindo algo incrível para facilitar a vida dos
                professores. Nosso projeto inovador é uma plataforma completa
                que utiliza inteligência artificial para auxiliar professores no
                desenvolvimento de atividades, criação de provas, planejamento
                de aulas e até mesmo na correção de avaliações.
                <br />
                <br /> Atualmente, estamos em fase de desenvolvimento,
                aprimorando cada detalhe para oferecer a melhor experiência
                possível. E queremos que você faça parte disso desde o início!
              </p>

              <button className="mt-8 border-blue-light border p-3 rounded-lg text-blue-light hover:underline">
                Quero testar a plataforma!
              </button>
            </div>
            <div>
              <Image src={illustration} alt="professora corrigindo prova" />
            </div>
          </div>
        </section>

        <section className="w-full mt-44">
          <div className="w-full max-w-screen-2xl m-auto flex flex-col justify-center items-center relative">
            <div className="text-center w-[762px]">
              <h2 className="text-4xl font-semibold">
                Seja a <span className="text-blue-light">primeira pessoa</span>{" "}
                a testar a nossa ferramenta
              </h2>
            </div>
            <Image
              src={linha}
              alt="linha"
              className="w-auto absolute top-0 right-72"
            />
            <div className="w-[800px] mt-20">
              <form className="w-full flex flex-col gap-y-6">
                <input
                  type="text"
                  placeholder="Nome"
                  className="border border-blue-light p-3 rounded-lg outline-none"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="border border-blue-light p-3 rounded-lg outline-none"
                />
              </form>
              <button className="w-full bg-primary-gradient text-white p-3 rounded-lg mt-12 hover:underline">
                Inscrever-se
              </button>
            </div>
          </div>
        </section>

        <footer className="w-full bg-blue-light-2  mt-64">
          <div className="w-full flex justify-center items-center p-8">
            <Image src={logo} alt="logo" />
          </div>
          <div className="bg-white text-center p-4">
              <span className="text-[#5C5C5C] font-medium">Copyright ® 2024 Lorem All rights Rcerved</span>
          </div>
        </footer>
      </main>
    </>
  );
}

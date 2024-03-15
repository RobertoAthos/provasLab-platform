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
        <section id="hero">
         
        </section>
       
      </main>
    </>
  );
}

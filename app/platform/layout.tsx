import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import SideBar from "@/components/SideBar";
import Footer from "@/components/dashboard/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ProvasLab | Dashboard",
  description: "IA para professores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${poppins.className} w-full flex h-screen bg-[#F8F9FA]`} id="dashboard">
      <SideBar/>
      <section className="flex flex-col w-full h-full ml-60">
        {children}
        <Footer/>
      </section>
    </div>
  )
}

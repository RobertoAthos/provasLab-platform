import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import SideBar from "@/components/SideBar";

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
    <section className={`${poppins.className} flex`} id="dashboard">
      <aside>
        <SideBar/>
      </aside>
      {children}
    </section>
  )
}

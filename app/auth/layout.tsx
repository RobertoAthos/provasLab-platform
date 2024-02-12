import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import SideScreen from "@/components/auth/SideScreen";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ProvasLab | Autenticação",
  description: "IA para professores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <main>
          <section className="flex">
            <SideScreen />
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}

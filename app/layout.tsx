import type { Metadata } from "next";
import { Poppins  as FontSans } from "next/font/google"
import "./globals.css";
import Providers from "@/providers";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "600"],
})

export const metadata: Metadata = {
  title: "ProvasLab | IA para professores",
  description: "Inteligência artificial feita para professores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn(
          "font-sans antialiased",
          fontSans.variable
        )}>
        <main>
          <Providers>
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}

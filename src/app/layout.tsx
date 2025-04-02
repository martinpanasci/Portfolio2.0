
import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import ClientWrapper from "@/components/ClientWrapper";

//Fuentes
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

//metadata
export const metadata: Metadata = {
  title: "MPanasci Portfolio",
  description: "Portfolio of Martin Panasci, a software developer based in Argentina.",
};



export default async function RootLayout({ children }: { children: React.ReactNode }) {  

  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}

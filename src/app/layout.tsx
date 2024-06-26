import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className=" min-h-screen">
      <body className="min-h-svh">
        <NavbarDemo/>
        {children}
        <footer className="bottom-0flex w-full p-4 bg-neutral-900 text-white" > 
          <div className="p-3 rounded-2xl bg-neutral-800" >
            Made by Rajpreet Singh
          </div>
        </footer>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "etse-dev",
  description: "Portfolio of Elizabeth Tse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <div className=" top-0 right-0 flex flex-col absolute py-10 px-5 z-10">
          <Link href="/">About</Link>
          <Link href="/">Experience</Link>
          <Link href="/">Contact</Link>
        </div>
        {children}
      </body>
    </html>
  );
}

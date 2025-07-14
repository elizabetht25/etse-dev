import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "etse-dev",
  description: "Portfolio of Elizabeth Tse",
  robots: "index, follow",
  authors: [{name: "Elizabeth"}],
  keywords: ["portfolio", "developer", "web development"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <div className=" top-0 right-0 fixed  flex flex-col py-10 px-5 z-30">
          <Link className="text-xl" href="/">
            About
          </Link>
          <Link className="text-xl" href="/">
            Experience
          </Link>
          <Link className="text-xl" href="/">
            Contact
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Online Notes",
  description: "Create and share your notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen overflow-x-hidden overflow-y-auto`}
         // style={{ backgroundImage: "url('/images/background.svg')" }}
      >
      <div className="fixed inset-0 bg-[url('/images/background.svg')] bg-cover bg-center bg-no-repeat -z-10"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Book Shelf",
  description: "Library that's Stays with you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative text-grey-text ${inter.className}`}>
        <div className="bg-grey flex h-screen max-w-screen overflow-hidden">
          <Sidebar />
          <div className="flex flex-col flex-1 min-w-0">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

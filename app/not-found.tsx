"use client";
import Image from "next/image";
import Logo from "@/public/logo.png";
import Link from "next/link";
import { PATHS } from "./constants";

export default function NotFound() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between md:justify-evenly p-24">
      <h1 className="text-6xl md:text-8xl">
        <span className="text-primary">404</span> Not Found :(
      </h1>
      <Link
        href={PATHS.home()}
        className="text-4xl md:text-6xl flex flex-col md:flex-row md:gap-8 items-center"
      >
        Let's head back to <Image alt="My Book Shelf Logo" src={Logo} />
      </Link>
    </main>
  );
}

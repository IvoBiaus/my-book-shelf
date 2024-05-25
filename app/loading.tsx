import Image from "next/image";
import Logo from "@/public/logo.png";

const LoadingHome = () => {
  return (
    <main className="absolute z-10 top-0 left-0 h-screen w-screen flex min-h-screen items-center justify-center p-14 md:p-24 bg-slate-50">
      <Image alt="My Book Shelf Logo" src={Logo} className="animate-pulse" />
    </main>
  );
};

export default LoadingHome;

import Image from "next/image";
import Logo from "@/public/logo.png";
import Link from "next/link";
import { PATHS } from "@/app/constants";
import { Inter } from "next/font/google";
import ArrowSvg from "../icons/arrow-svg";
import LangSvg from "../icons/lang-svg";
import DateTime from "./date-time";
import SearchInput from "./search-input";

const Header = () => {
  return (
    <header className="px-5 md:px-12 pt-5 md:pt-9 pb-3 md:pb-6 gap-4 md:gap-7 flex flex-row w-full h-fit">
      <Link href={PATHS.home()} className="xl:hidden block">
        <Image src={Logo} alt="Go Home" height={48} />
      </Link>
      <SearchInput />
      <button className="bg-white border border-grey-border rounded-full hidden xl:flex flex-row shadow-md overflow-hidden items-center gap-3 pl-5 pr-3">
        <LangSvg fillClass="fill-primary" />
        Lang
        <ArrowSvg fillClass="fill-grey-text" />
      </button>
      <DateTime />
      <button className="bg-white border border-grey-border rounded-full shadow-md overflow-hidden items-center p-[2px] pr-4 gap-4 hidden sm:flex flex-row ">
        <Image
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Your Profile"
          className="rounded-full"
          height={45}
          width={45}
        />
        <span className="text-xl">Kenson</span>
        <ArrowSvg fillClass="fill-grey-text" />
      </button>
    </header>
  );
};

export default Header;

import Image from "next/image";
import Logo from "@/public/logo.png";
import LinkButton from "./link-button";
import HomeIcon from "@/components/icons/home-svg";
import GiveGiftIcon from "@/components/icons/give-gift-svg";
import SearchIcon from "@/components/icons/search-svg";
import BookShelfIcon from "@/components/icons/book-shelf-svg";
import Link from "next/link";
import { PATHS } from "@/app/constants";

const Sidebar = () => {
  return (
    <div className="w-80 bg-white pl-16 py-10 hidden xl:flex flex-col h-full shrink-0">
      <Link href={PATHS.home()} className="mb-24">
        <Image src={Logo} alt="Go Home" width={120} />
      </Link>
      <div className="flex flex-col gap-8">
        <LinkButton
          href={PATHS.home()}
          label="Home"
          leadIcon={
            <HomeIcon className="group-hover:fill-grey-text duration-300" />
          }
        />
        <LinkButton
          href={PATHS.home()}
          label="Search"
          leadIcon={
            <SearchIcon className="group-hover:fill-grey-text duration-300" />
          }
        />
        <LinkButton
          href={PATHS.home()}
          label="My Shelf"
          leadIcon={
            <BookShelfIcon className="group-hover:fill-grey-text duration-300" />
          }
        />
        <LinkButton
          href={PATHS.home()}
          label="Contribute"
          leadIcon={
            <GiveGiftIcon className="group-hover:fill-grey-text duration-300" />
          }
        />
      </div>
      <div className="flex flex-col gap-4 mt-auto">
        <LinkButton href={PATHS.home()} label="About" />
        <LinkButton href={PATHS.home()} label="Support" />
        <LinkButton href={PATHS.home()} label="Terms & Conditions" />
        <LinkButton
          href="https://www.figma.com/community/file/1223285025012921986/my-book-shelf"
          label="Designed by Kenson"
        />
      </div>
    </div>
  );
};

export default Sidebar;

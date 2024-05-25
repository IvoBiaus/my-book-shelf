"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";

import ArrowSvg from "../icons/arrow-svg";
import SearchSvg from "../icons/search-svg";
import { PATHS } from "@/app/constants";

const SearchInput = () => {
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const {
      query: { value },
    } = e.target as EventTarget & {
      query: { value: string };
    };

    // Avoid search if query is too short
    if (value.length >= 3) {
      router.push(PATHS.books(value));
    }
  };

  return (
    <div className="bg-white border border-grey-border rounded-full flex flex-row shadow-md overflow-hidden items-center pr-7 flex-1">
      <button className="pl-5 pr-3 bg-grey-button h-full flex gap-3 items-center">
        <span>All</span> <ArrowSvg fillClass="fill-grey-text" />
      </button>
      <form onSubmit={handleSubmit} className="flex justify-between flex-1">
        <input
          name="query"
          type="text"
          placeholder="Search"
          className="px-5 outline-none w-full"
        />
        <button type="submit">
          <SearchSvg />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;

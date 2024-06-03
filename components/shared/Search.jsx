"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";

const Search = ({ placeholder = 'Search...', setSearch, value }) => {
  return (
    <div className="flex-center h-[45px] w-full overflow-hidden rounded-full  px-4 py-2 bg-[#303030]">
      <Image
        src="/assets/svg/search.svg"
        alt="search"
        width={24}
        height={24}
      />
      <Input
        type="text"
        placeholder={placeholder}
        className="p-regular-16 bg-none border-0  outline-offset-0 placeholder:text-[#f5f5f5] text-[#f5f5f5] focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        onChange={(e) => setSearch(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default Search;

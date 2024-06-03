import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

const NewsCollection = ({ imgUrl, title, desc, route }) => {
  return (
    <div className="border-y border-gray-500 w-full">
      <div className="wrapper p-4 flex flex-row items-center gap-12">
        <div className="w-[20rem] bg-black h-full rounded-md">
          <Image
            width={500}
            height={200}
            alt="news"
            src={imgUrl}
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2 md:gap-4 w-fit">
          <div className="flex flex-col gap-1">
            <p className="p-14-medium text-[#f5f5f5]">{title}</p>
          </div>
          <p className="p-12-light text-[#f5f5f5] line-clamp-1 md:line-clamp-2">
            {desc}
          </p>
          <Link href={`${route}`} className="text-[#f5f5f5] underline hover:underline-offset-2">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCollection;

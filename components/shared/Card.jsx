import React from "react";
import Category from "./Category";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

const Card = ({ title, img, genre, realese, desc, route }) => {
  return (
    <div className="w-full">
      <div className="relative flex min-h-[200px] w-full gap-2 md:gap-0 max-w-[200px] md:max-w-[400px] flex-col overflow-hidden rounded-2xl bg-[#1f1e1e] shadow-md transition-all hover:shadow-lg hover:opacity-110 md:min-h-[300px]">
        <div className="p-2 rounded-xl w-full h-[7rem] md:h-[10.5rem] ">
          <Image src={img} width={1000} height={1000} className="rounded-xl" alt={title} priority={true}/>
        </div>

        <div className="flex max-h-[200px] md:min-h-[180px] flex-col gap-2 p-5 md:p-5 md:gap-3">
          <div className="flex gap-2 md:justify-between">
            <span className="md:p-16-medium p-14-medium  rounded-full md:bg-[#121212] md:px-4 md:py-1 text-[#f5f5f5]">
              {genre}
            </span>
            <span className="md:p-16-medium p-14-medium text-[#f5f5f5]  rounded-full md:bg-[#f5f5f5] md:px-4 md:py-1 md:text-[#121212]">
              FREE
            </span>
          </div>

          <p className="md:p-14-semibold p-14-medium line-clamp-1 md:line-clamp-3 text-[#f5f5f5]">{title}</p>
          <p className="p-10-medium text-[#f5f5f5] line-clamp-2">{desc}</p>
          <div className="flex justify-between gap-5 items-center">
            <p className="p-14-medium bg-grey-500/10 hidden md:flex  text-[#f5f5f5] line-clamp-1">
              "{realese}"
            </p>
            <Link href={`/games/${route}`}>More Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

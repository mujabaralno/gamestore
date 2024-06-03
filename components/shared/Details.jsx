import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Details = ({ title, route, desc, developer, publisher, img, platform, genre }) => {
  return (
    <section className="w-full wrapper relative">
      <div className="relative flex gap-5 flex-row justify-center items-center ">
        <div className="w-[50rem] h-full shadow-lg p-2 rounded-2xl">
          <Image
            width={1000}
            height={1000}
            alt={title}
            quality={100}
            src={img}
            className="rounded-2xl "
            priority={true}
          />
        </div>
      </div>
      <div className="wrapper flex flex-col gap-5 mt-7 p-5">
        <div className="flex">
        <h1 className="md:h3-bold p-24-bold rounded-full bg-[#f5f5f5] px-4 py-2 text-[#121212]">FREE</h1>
        </div>
        <h3 className="h3-bold text-[#f5f5f5]">{title}</h3>
        <p className="p-16-medium text-[#f5f5f5]">
          {desc}
        </p>
        <div className="flex items-center gap-5">
          <span className="p-16-medium  rounded-full bg-[#f5f5f5] px-4 py-2 text-[#121212]">
            {genre}
          </span>
          <span className="p-16-medium  rounded-full bg-[#f5f5f5] px-4 py-2 text-[#121212]">
            {platform}
          </span>
        </div>

        <div className="flex flex-col md:flex-row  gap-5">
          <div className="flex items-center gap-2 p-16-medium  rounded-full bg-[#f5f5f5] px-4 py-2 text-[#121212]">
            <span className="">Developer:</span>
            <span className="">{developer}</span>
          </div>
          <div className="flex items-center gap-2 p-16-medium  rounded-full bg-[#f5f5f5] px-4 py-2 text-[#121212]">
            <span className="">Pubslisher:</span>
            <span className="">{publisher}</span>
          </div>
        </div>
        
        <Link href={`${route}`}>
          <Button className="button gradient-black hover:shadow-inner hover:bg-[#000000]/10">Download</Button>
        </Link>
      </div>
    </section>
  );
};

export default Details;

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { socialsLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="w-full relative mt-14 bg-[#1f1e1e]">
      <div className="wrapper justify-between flex items-center p-6">
        <Link href="/" className="sidebar-logo">
          <Image src="/ogame.png" alt="GameStore" width={150} height={100} />
        </Link>
        <ul className="flex flex-row gap-4 items-center">
          {socialsLinks.map((link, i) => {
            return (
              <li key={i}>
                <Link href={link.url}>
                  <Image
                    src={link.imgurl}
                    alt={link.title}
                    width={30}
                    height={50}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className=" border-gray-600 w-[57rem] border-t sm:mx-auto dark:border-gray-700 p-8">
        <p className="p-16-medium text-[#f5f5f5] text-center">
          © O Games™. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

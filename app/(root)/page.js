"use client";

import Hero from "@/components/shared/Hero";
import Image from "next/image";
import React from "react";
import Search from "@/components/shared/Search";
import Category from "@/components/shared/Category";
import Card from "@/components/shared/Card";
import Colection from "@/components/shared/Colection";
import { Button } from "@/components/ui/button";
import Link from "next/link";



export default function Home() {
  
  return (
    <main className="w-full relative wrapper">
      <Hero />
      <div className="flex justify-between items-center w-full mt-12 gap-12">
        <div className="w-[25rem]">
          <Search />
        </div>
        <div className="w-[15rem]">
          <Category />
        </div>
      </div>
      <h1 className="h1-semibold mt-7 text-[#f5f5f5]">Games</h1>
      <div className="mt-5 relative">
       <Colection />
      </div>
      <div className="mt-7 flex justify-center items-center">
        <Button className="gradient-black button transition-all hover:bg-[#000000]/10 hover:shadow-inner">
          <Link href="/games" className="text-[#f5f5f5]">
            See More
          </Link>
        </Button>
      </div>
    </main>
  );
}

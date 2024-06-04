"use client";
import React, { useState, useEffect } from "react";
import Search from "@/components/shared/Search";
import Category from "@/components/shared/Category";
import Image from "next/image";
import Card from "@/components/shared/Card";
import { getGames } from "@/app/api/api";
import Link from "next/link";

export default function Home() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSubmit = async () => {
    const data = await getGames();
    setLoading(true);
    setGames(data);
    setLoading(false);
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  

  return (
    <div className="w-full relative wrapper">
      <div className="flex flex-row gap-3 items-center">
        <Image src="/assets/svg/star.svg" width={55} height={50} alt="star" />
        <h1 className="h1-semibold text-[#f5f5f5]">Games</h1>
      </div>
      <div className="mt-5 flex justify-between items-center w-full relative gap-12">
        <div className="w-[28rem]">
          <Search />
        </div>
        <div className="w-[20rem]">
          <Category />
        </div>
      </div>
      <h3 className="mt-5 h3-bold text-[#f5f5f5]">10 Games Of The Month</h3>
      {loading ?  <div className="wrapper flex justify-center items-center gap-2 w-full min-h-[60vh]">
        <Image 
          width={50}
          height={100}
          alt="loading"
          src="/assets/svg/loading.svg"
        />
        <h3 className="h3-bold text-[#f5f5f5]">Loading...</h3>
      </div>: (
        null
      )}
      <div className="w-full grid grid-cols-2 gap-5 md:grid-cols-3 2xl:gap-0 mt-7">
        {games.slice(2, 3).map((game, i) => {
          return (
            <Link key={i} href={`/games/${game.id}`}>
            <Card
              title={game.title}
              img={game.thumbnail}
              desc={game.short_description}
              realese={game.release_date}
              genre={game.genre}
              route={game.id}
            />
          </Link>
          );
        })}

        {games.slice(5, 7).map((game, i) => {
          return (
            <Link key={i} href={`/games/${game.id}`}>
            <Card
              title={game.title}
              img={game.thumbnail}
              desc={game.short_description}
              realese={game.release_date}
              genre={game.genre}
              route={game.id}
            />
          </Link>
          );
        })}

        {games.slice(27, 28).map((game, i) => {
          return (
            <Link key={i} href={`/games/${game.id}`}>
            <Card
              title={game.title}
              img={game.thumbnail}
              desc={game.short_description}
              realese={game.release_date}
              genre={game.genre}
              route={game.id}
            />
          </Link>
          );
        })}

        {games.slice(113, 116).map((game, i) => {
          return (
            <Link key={i} href={`/games/${game.id}`}>
            <Card
              title={game.title}
              img={game.thumbnail}
              desc={game.short_description}
              realese={game.release_date}
              genre={game.genre}
              route={game.id}
            />
          </Link>
          );
        })}

        {games.slice(290, 291).map((game, i) => {
          return (
            <Link key={i} href={`/games/${game.id}`}>
            <Card
              title={game.title}
              img={game.thumbnail}
              desc={game.short_description}
              realese={game.release_date}
              genre={game.genre}
              route={game.id}
            />
          </Link>
          );
        })}
        {games.slice(0, 2).map((game, i) => {
          return (
            <Link key={i} href={`/games/${game.id}`}>
            <Card
              title={game.title}
              img={game.thumbnail}
              desc={game.short_description}
              realese={game.release_date}
              genre={game.genre}
              route={game.id}
            />
          </Link>
          );
        })}
      </div>
    </div>
  );
}

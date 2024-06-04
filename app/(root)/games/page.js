"use client";

import React, { useState, useEffect } from "react";
import Search from "@/components/shared/Search";
import Category from "@/components/shared/Category";
import Image from "next/image";
import Card from "@/components/shared/Card";
import { getGames } from "@/app/api/api";
import Link from "next/link";
import Pagination from "@/components/shared/Pagination";

export default function Home() {
  const [allGames, setAllGames] = useState([]);
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true); 
  const gamesPerPage = 15;

  const handleSubmit = async () => {
    setLoading(true); 
    const data = await getGames();
    setAllGames(data);
    setGames(data);
    setLoading(false); 
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  useEffect(() => {
    const filteredGames = allGames.filter((game) => 
      game.title.toLowerCase().includes(search.toLowerCase())
    );
    setGames(filteredGames);
  }, [search, allGames]);

  const totalPages = Math.ceil(games.length / gamesPerPage);

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;

  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-full relative wrapper">
      <div className="flex flex-row gap-3 items-center">
        <Image src="/assets/svg/game.svg" width={55} height={50} alt="star" />
        <h1 className="h1-semibold text-[#f5f5f5]">Games</h1>
      </div>
      <div className="mt-5 flex justify-between items-center w-full relative gap-12">
        <div className="w-[28rem]">
          <Search 
          setSearch={setSearch}
          value={search}
          />
        </div>
        <div className="w-[20rem]">
          <Category />
        </div>
      </div>
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
      <div className="w-full grid grid-cols-2 gap-5 md:grid-cols-3 2xl:gap-0 mt-10">
        {currentGames.map((game, i) => (
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
        ))}
      </div>

      <div className="mt-10">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

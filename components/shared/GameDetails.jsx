"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getGameDetails } from "@/app/api/api";
import Details from "@/components/shared/Details";
import Image from "next/image";

const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    if (id) {
      getGameDetails(id).then(setGame).catch(console.error);
    }
  }, [id]);

  if (!game) {
    return (
      <div className="wrapper flex justify-center items-center gap-2 w-full min-h-screen">
          <Image 
          width={50}
          height={100}
          alt="loading"
          src="/assets/svg/loading.svg"
          priority={true}
          />
          <h3 className="h3-bold text-[#f5f5f5]">Loading...</h3>
      </div>
    );
  }

  return (
    <section className="w-full h-full relative">
      <Details
        img={game.thumbnail}
        title={game.title}
        desc={game.short_description}
        developer={game.developer}
        publisher={game.publisher}
        route={game.game_url}
        platform={game.platform}
        genre={game.genre}
      />
    </section>
  );
};

export default GameDetails;

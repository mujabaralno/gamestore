import React, { useState, useEffect } from "react";
import { getGames } from "@/app/api/api";
import Card from "./Card";
import Link from "next/link";
import Image from "next/image";

const Colection = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true); 

  const handleSubmit = async () => {
    setLoading(true); 
    const data = await getGames();
    setGames(data);
    setLoading(false); 
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  if (loading) {
    return (
      <div className="wrapper flex justify-center items-center gap-2 w-full ">
        <Image 
          width={50}
          height={100}
          alt="loading"
          src="/assets/svg/loading.svg"
        />
        <h3 className="h3-bold text-[#f5f5f5]">Loading...</h3>
      </div>
    );
  }
  return (
    <div className="w-full grid grid-cols-1 gap-5 md:grid-cols-3 2xl:gap-0">
      {games.slice(0, 12).map((game, i) => {
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
  );
};

export default Colection;

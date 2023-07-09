"use client";
import { gamesStore } from "@/app/utils/gamesStore";
import { useState, useEffect, useRef } from "react";
import GameCard from "./GameCard";

const gamesPerRow = 6; //games per batch
export default function ContentGrid({ games }) {
  const contentRef = useRef(null); // ref to the content container
  const [next, setNext] = useState(gamesPerRow); //games to be loaded on next batch

  const scrollToBottom = () => {
    contentRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  //load more handler
  const loadMore = () => {
    setTimeout(scrollToBottom, 30);
    setNext(next + 3);
  };

  //for tracking present available data and saving it to the store
  useEffect(() => {
    gamesStore.games = games;
  }, [games]);

  useEffect(() => {
    //window.scrollTo(0, 0);
    //history.scrollRestoration = 'manual';
    if (history.scrollRestoration) {
      history.scrollRestoration = "manual";
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="w-full" ref={contentRef}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 md:gap-y-10 2xl:gap-28 px-10 pb-3 md:pb-5 pt-10 md:pt-12 2xl:px-20">
        {games?.slice(0, next)?.map((game) => (
          <GameCard
            key={game.id}
            id={game.id}
            thumbnail={game.thumbnail}
            title={game.title}
            genre={game.genre}
            release={game.release_date}
            platform={game.platform}
          />
        ))}
      </div>
      {next < games.length && (
        <div className="flex justify-center py-10 md:py-7 2xl:py-14">
          <button
            onClick={loadMore}
            className="w-72 md:w-[30rem] px-6 py-2 2xl:py-5 rounded-full bg-theme_medium_violet hover:bg-theme_light_violet text-white font-bold 2xl:text-3xl"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

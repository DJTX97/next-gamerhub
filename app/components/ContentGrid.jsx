"use client";
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
    setTimeout(scrollToBottom, 0);
    setNext(next + 3);
  };

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
    <div className="bg-theme_black rounded-b-2xl" ref={contentRef}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 2xl:gap-28 px-10 pt-12 2xl:px-20">
        {games?.slice(0, next)?.map((game) => (
          <GameCard
            key={game.id}
            thumbnail={game.thumbnail}
            title={game.title}
            genre={game.genre}
            release={game.release_date}
            reviews={""}
            rating={""}
          />
        ))}
      </div>
      {next < games.length && (
        <div className="flex justify-center py-7">
          <button
            onClick={loadMore}
            className="w-[30rem] px-6 py-2 rounded-full bg-theme_medium_violet hover:bg-theme_light_violet text-white font-bold"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

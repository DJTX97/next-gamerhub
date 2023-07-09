"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { gamesStore } from "@/app/utils/gamesStore";
import Link from "next/link";
export default function SearchBar() {
  const router = useRouter(); //for navigating to other pages
  const [inputValue, setInputValue] = useState(""); //input field state
  const [suggestions, setSuggestions] = useState([]); //suggestion list state

  const games = gamesStore.games; //used data

  //track input change
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  //update suggestions function
  const updateSuggestions = () => {
    const filteredGames = games.filter((game) =>
      game.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSuggestions(filteredGames.slice(0, 5));
  };

  //search button functionality
  const handleSearchButtonClick = () => {
    const searchQuery = inputValue.trim();
    if (searchQuery !== "") {
      const matchingGame = games.find(
        (game) => game.title.toLowerCase() === inputValue.toLowerCase()
      );
      if (matchingGame) {
        router.push(`/games/${matchingGame.id}`);
      } else {
        router.push(`/missing`);
      }
    }
    setInputValue("");
  };

  //hide suggestions after clicking on the page
  const handleClickOutside = () => {
    setInputValue("");
  };

  //update suggestions + hide suggestions after clicking on the page
  useEffect(() => {
    updateSuggestions();

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [inputValue]);

  return (
    <div className="text-[18px] font-normal text-theme_black">
      <div className="h-9 flex">
        <button
          className="w-10 md:w-14 flex justify-center items-center bg-theme_light_gray hover:bg-theme_medium_gray rounded-l-full"
          onClick={handleSearchButtonClick}
        >
          <svg
            className="w-6 h-6 fill-current text-theme_white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M10 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 12.606 4.192l5.101 5.1a1 1 0 0 1-1.414 1.415l-5.1-5.1A7 7 0 0 1 3 10Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <input
          className="w-32 md:w-56 pl-2 focus:outline-none rounded-r-full"
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={handleInputChange}
          onClick={() => setInputValue("")}
        ></input>
      </div>
      {inputValue !== "" && suggestions.length > 0 && (
        <div className="absolute right-6 md:right-auto z-10 w-60 mt-1">
          <ul className="rounded-xl bg-theme_white">
            {suggestions.map((game) => (
              <Link
                href={`/games/${game.id}`}
                onClick={() => setInputValue("")}
                key={game.id}
              >
                <li className="px-3 rounded-xl hover:bg-theme_light_gray">
                  {game.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

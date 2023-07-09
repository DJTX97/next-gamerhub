import ContentTitle from "./components/ContentComp/HomeTitle";
import ContentGrid from "./components/ContentComp/HomeGrid";

// const url =
//   "https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc";

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "b0acde6584msha832426d698a50bp1da0c3jsn4f8fd02f7e5a",
//     "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
//   },
// };

const url = "https://mmo-games.p.rapidapi.com/games";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b0acde6584msha832426d698a50bp1da0c3jsn4f8fd02f7e5a",
    "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
  },
  next: {
    revalidate: 300,
  },
};

//Async function to fetch data from api endpoint.
const fetchData = async () => {
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error("Something went wrong!");
  }
  //await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await res.json();
  return data;
};

export default async function Home() {
  const games = await fetchData();

  return (
    <>
      <ContentTitle />
      <ContentGrid games={games} />
    </>
  );
}

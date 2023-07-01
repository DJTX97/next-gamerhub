//import ContentGrid from "./components/ContentGrid";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ContentTitle from "./components/ContentTitle";
import ContentGrid from "./components/ContentGrid";


//const url = "https://dummyjson.com/products"

const url =
  "https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b0acde6584msha832426d698a50bp1da0c3jsn4f8fd02f7e5a",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

//Async function to fetch data from api endpoint.
const fetchData = async () => {
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error("Something went wrong!");
  }
  //await new Promise((resolve) => setTimeout(resolve, 3000));
  const data = await res.json();
  return data;
};

export default async function Home() {
  const games = await fetchData();
  console.log(games);
  //const games = ''

  return (
    <div className="2xl:max-w-[2000px]">
      <Header />
      <div className="flex mt-4 gap-5">
        <Sidebar />
        <div className="w-full">
          <ContentTitle />
          <ContentGrid games={games} />
        </div>
      </div>
    </div>
  );
}

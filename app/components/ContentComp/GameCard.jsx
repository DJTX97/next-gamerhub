import Link from "next/link";

export default function GameCard({
  title,
  genre,
  thumbnail,
  release,
  platform,
  id,
}) {
  return (
    <Link
      /*href={`/games/${id}`}*/
      href={`/games/${id}/${title.replace(/ /g, "_").replace(/[^a-zA-Z0-9_]/g, "")}`} className="flex flex-col justify-center h-72 2xl:h-80 hover:opacity-80 hover:scale-105 transition-all duration-[150ms]"
    >
      <img
        className="h-1/2 w-full rounded-t-xl"
        src={
          thumbnail !== undefined
            ? thumbnail
            : "../assets/images/placeholder.jpg"
        }
        alt=""
      />
      <div className="h-1/2 w-full flex flex-col px-2 py-1 sm:py-2 bg-theme_dark_gray rounded-b-xl text-[15px]">
        <div className="text-2xl font-bold">{title}</div>
        <div>
          Genre: <span className="font-bold">{genre}</span>
        </div>
        <div>
          Platform: <span className="font-bold">{platform}</span>
        </div>
        <div>
          Release date: <span className="font-bold">{release}</span>
        </div>
      </div>
    </Link>
  );
}

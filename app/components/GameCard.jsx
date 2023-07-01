export default function GameCard({
  title,
  genre,
  thumbnail,
  release,
  reviews,
  rating,
}) {
  return (
    <div className="flex flex-col justify-center h-72 2xl:h-80 cursor-pointer hover:opacity-80 hover:scale-105 transition-all duration-[150ms]">
      <img
        className="h-3/4 rounded-t-xl"
        src={
          thumbnail !== undefined ? thumbnail : "assets/images/placeholder.jpg"
        }
        alt="image"
      />
      <div className="flex flex-col px-2 py-1 sm:py-2 bg-theme_dark_gray rounded-b-xl text-[15px]">
        <div className="text-[22px] font-bold">{title}</div>
        <div>Genre: {genre}</div>
        <div>Release date: {release}</div>
        {/* <div>Number of reviews: {reviews}</div> */}
        <div className="self-end">Rating: {rating}</div>
      </div>
    </div>
  );
}

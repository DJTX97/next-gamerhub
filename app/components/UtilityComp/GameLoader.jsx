export default function GameLoader() {
  return (
    <div className="h-[1000px] 2xl:h-[1500px] w-full mx-10 flex flex-col items-center bg-theme_black rounded-2xl">
      <div
        className="mt-56 animate-spin inline-block w-40 h-40 border-[20px] border-current border-t-transparent text-theme_medium_violet rounded-full"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

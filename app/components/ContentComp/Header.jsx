import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className="flex justify-between items-center px-4 md:px-8 py-3 2xl:py-6 bg-theme_black text-3xl sm:text-4xl 2xl:text-6xl font-bold border-b-4 border-theme rounded-b-2xl">
      <Link href={'/'}>GamerHub</Link>
      <SearchBar/>
    </div>
  );
}

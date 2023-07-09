import "./globals.css";
import Header from "./components/ContentComp/Header";
import Footer from "./components/ContentComp/Footer";

export const metadata = {
  title: "GamerHub",
  description: "A site for true gamers.",
  icons: "/assets/favicon/fav.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center max-h-[100vh]">
        <div className="2xl:max-w-[2000px] flex flex-col gap-4">
          <Header />
          <div className="flex gap-5 justify-center">
            {/* <Sidebar /> */}
            <div className="w-[22rem] sm:w-full md:mx-10 flex flex-col items-center bg-theme_black rounded-2xl">
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

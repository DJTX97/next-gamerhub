import "./globals.css";

export const metadata = {
  title: "GamerHub",
  description: "A site for true gamers.",
  icons: "/assets/favicon/fav.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col 2xl:items-center max-h-[100vh]">{children}</body>
    </html>
  );
}

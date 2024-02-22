import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Forky",
  description: "Forky For the best recipes",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="lg:bg-violet-300 bg-violet-100  py-16 px-10 m-auto"
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}

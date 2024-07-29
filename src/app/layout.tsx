import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css';
import Header from "./components/header";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Ellis Song's portfolio: Full stack software engineer skilled in JavaScript, TypeScript, React, Next.js, Redux, Python, Node.js, Express, SQL, and NoSQL databases. Explore projects, resume, and a blog.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
      <Header />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}

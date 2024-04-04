import { Inter } from "next/font/google";
import Head from 'next/head';
import "./globals.css";
import "./styles/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Full Stack Book List",
  description: "Browse through a collection of books in our store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

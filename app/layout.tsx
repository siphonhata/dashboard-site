import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import "./globals.css";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";


export const metadata: Metadata = {
  title: 'No Name Solutions',
  description: 'Professional web development services in South Africa',
};


const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
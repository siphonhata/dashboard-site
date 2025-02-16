'use client'
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const inter = Inter({ subsets: ['latin'] });

const metadata: Metadata = {
  metadataBase: new URL('https://smartwebsync.online'),
  title: {
    template: '%s | Smart WebSync Solutions',
    default: 'Smart WebSync Solutions'
  },
  description: 'Transform your digital presence with SmartWebSync Solutions. Expert web development, seamless digital integration, and innovative business solutions.',
  keywords: ['website', 'web development', 'digital integration', 'web application', 'business solutions', 'API integration'],
  
  openGraph: {
    title: 'Smart WebSync Solutions',
    description: 'Expert web development and digital integration services',
    url: 'https://smartwebsync.online',
    siteName: 'SmartWebSync',
    locale: 'en_US',
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  verification: {
    google: 'QD_zV3eAlu2WX-pUB7i38dBZ1PBaTCNNITUkHxbqtXo',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
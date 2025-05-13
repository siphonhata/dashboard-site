import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Smart WebSync | Custom Web & SEO Solutions for Businesses in South Africa',
  description: 'We offer expert Next.js web development, SEO services, and digital marketing to help businesses grow online.',
  keywords: ['Next.js SEO', 'Web Development South Africa', 'Custom Website Solutions', 'SEO Services'],
  openGraph: {
    title: 'Smart WebSync | Custom Web & SEO Solutions',
    description: 'Next.js web development and SEO services tailored for business growth.',
    url: 'https://smartwebsync.online',
    siteName: 'Smart WebSync',
    images: [
      {
        url: 'https://smartwebsync.online/images/seo-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Smart WebSync SEO Services Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};


const ClientComponents = dynamic(() => import('./ClientComponents'), {
ssr: false,
loading: () => (
  <div className={`${inter.className} min-h-screen flex flex-col`}>
    {/* Improved loading state with animation */}
    <header className="bg-white shadow-sm py-4 px-6 animate-pulse">
      <div className="container mx-auto flex justify-between items-center">
        <div className="h-10 w-40 bg-gray-200 rounded"></div>
        <div className="hidden md:flex space-x-6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-6 w-16 bg-gray-200 rounded"></div>
          ))}
        </div>
        <div className="h-10 w-24 bg-blue-200 rounded"></div>
      </div>
    </header>
    
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-4/6 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-64 w-full bg-gray-200 rounded mt-8 animate-pulse"></div>
      </div>
    </main>
    
    <footer className="bg-gray-100 py-8 px-6">
      <div className="container mx-auto">
        <div className="h-6 w-40 bg-gray-300 rounded mx-auto mb-6 animate-pulse"></div>
        <div className="flex justify-center space-x-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-8 w-8 bg-gray-300 rounded-full animate-pulse"></div>
          ))}
        </div>
      </div>
    </footer>
  </div>
),
});

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
  <html lang="en" className="scroll-smooth">
    <body className={`${inter.className} min-h-screen flex flex-col`}>
      <ClientComponents>{children}</ClientComponents>
    </body>
  </html>
);
}
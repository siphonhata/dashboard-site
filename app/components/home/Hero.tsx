'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Hero',
};
export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <div className="relative">
      <div className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-b from-blue-50 via-white to-transparent">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Circles */}
          <div className="absolute top-0 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-100 to-purple-100 opacity-60 blur-3xl"></div>
          <div className="absolute -top-20 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-100 to-emerald-100 opacity-50 blur-3xl"></div>
          
          {/* Floating Shapes */}
          <div className="absolute bottom-20 left-32 w-64 h-64 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 rotate-45 animate-float-delayed"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div
                data-aos="fade-right"
                className="mb-6 inline-block"
              >
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/10 to-emerald-500/10 text-blue-600">
                Smart WebSync Solutions
                </span>
              </div>

              <h1
                data-aos="fade-right"
                data-aos-delay="100"
                className="text-5xl font-bold text-gray-900 sm:text-6xl lg:text-7xl tracking-tight"
              >
                <span className="block">Building Digital</span>
                <span className="block mt-1 bg-gradient-to-r from-blue-600 to-emerald-600 text-transparent bg-clip-text">
                  Excellence
                </span>
              </h1>

              <p
                data-aos="fade-right"
                data-aos-delay="200"
                className="mt-6 text-lg text-gray-600 sm:text-xl max-w-xl leading-relaxed"
              >
                Transform your business with custom web solutions built for the modern digital landscape.
                Elevate your online presence with our cutting-edge development expertise.
              </p>

              <div
                data-aos="fade-right"
                data-aos-delay="300"
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transform hover:-translate-y-0.5"
                >
                  Get Started
                  <svg 
                    className="ml-2 -mr-1 w-5 h-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>

                <Link
                  href="#services"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-xl text-blue-600 bg-blue-50 hover:bg-blue-100 transition-all duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Image/Illustration */}
            <div 
              data-aos="fade-left"
              data-aos-delay="200"
              className="lg:block relative"
            >
              <div className="relative w-full h-[500px]">
                {/* Gradient mask for the image */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-50/80 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-blue-50/80 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-transparent z-10"></div> */}
                <Image
                  src="/hero.svg"
                  alt="Web Development Illustration"
                  fill
                  className="object-contain z-0"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Creative Section Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          className="w-full h-24 fill-white transform translate-y-1"
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.92,146.53,111.31,216.6,92.83,271.15,77.93,328.27,64.15,321.39,56.44Z"
            className="relative block"
            style={{
              filter: 'drop-shadow(0px -2px 3px rgba(0, 0, 0, 0.05))'
            }}
          ></path>
        </svg>
      </div>
    </div>
  );
}
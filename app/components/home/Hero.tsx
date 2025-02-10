'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white min-h-[90vh] flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-blue-100 opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div 
            data-aos="fade-down"
            className="mb-8 inline-block"
          >
            <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              Web Development Solutions
            </span>
          </div>

          <h1 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl tracking-tight"
          >
            <span className="block">Building Digital</span>
            <span className="block text-blue-600">Excellence</span>
          </h1>

          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-6 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-8 md:max-w-3xl"
          >
            Transform your business with custom web solutions built for the modern digital landscape.
            Elevate your online presence with our cutting-edge development expertise.
          </p>

          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10 gap-4"
          >
            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 md:py-4 md:text-lg md:px-10 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
            
            <Link
              href="#services"
              className="mt-4 sm:mt-0 w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200 md:py-4 md:text-lg md:px-10"
            >
              Learn More
            </Link>
          </div>

          {/* Optional: Add some stats or social proof */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mt-20"
          >
            <div className="border-t-2 border-gray-100 pt-6">
              <p className="text-3xl font-bold text-blue-600">100+</p>
              <p className="text-sm text-gray-500">Projects Delivered</p>
            </div>
            <div className="border-t-2 border-gray-100 pt-6">
              <p className="text-3xl font-bold text-blue-600">24/7</p>
              <p className="text-sm text-gray-500">Support</p>
            </div>
            <div className="border-t-2 border-gray-100 pt-6 hidden sm:block">
              <p className="text-3xl font-bold text-blue-600">98%</p>
              <p className="text-sm text-gray-500">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
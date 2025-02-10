// app/page.tsx
'use client';


import About from "./(routes)/about/page";
import Contact from "./components/home/Contact";
import Features from "./components/home/Features";
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";


export default function Home() {
  return (
    <main className="pt-20">
      
      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>

    </main>
  );
}
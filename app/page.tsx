import ContactForm from "./components/forms/ContactForm";
import Features from "./components/home/Features";
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";


export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <ContactForm />
    </>
  );
}

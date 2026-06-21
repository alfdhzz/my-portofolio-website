import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Preloader />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </>
  );
}

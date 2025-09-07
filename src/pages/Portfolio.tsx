import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Resume from "@/components/portfolio/Resume";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
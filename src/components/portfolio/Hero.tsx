import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={profileImage}
                alt="Krishnakumar M. Profile"
                className="w-48 h-48 rounded-full object-cover border-4 border-primary hero-shadow transition-smooth hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-full bg-primary/10 hero-gradient opacity-0 hover:opacity-100 transition-smooth"></div>
            </div>
          </div>

          {/* Greeting and Name */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            My profile and Hi I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">
            Krishnakumar
          </h1>
          <h2 className="text-xl md:text-2xl text-primary font-semibold mb-6">
            BSc Computer Science Student
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Building simple and interactive web pages using HTML, CSS, and JavaScript.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection("projects")}
              className="hero-gradient hover:opacity-90 transition-smooth px-8 py-3 text-lg font-semibold rounded-lg"
            >
              View My Projects
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth px-8 py-3 text-lg font-semibold rounded-lg"
            >
              Get in Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection("about")}
              className="hover:bg-primary/10 rounded-full"
            >
              <ChevronDown className="h-6 w-6 text-primary" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
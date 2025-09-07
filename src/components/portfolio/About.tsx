const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            About Me
          </h2>
          
          <div className="card-shadow bg-card rounded-2xl p-8 md:p-12 transition-smooth hover:shadow-lg">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
              I'm <span className="text-primary font-semibold">Krishnakumar M.</span>, an aspiring software engineer with a foundation in computer science.
              I build readable, reliable, and user-friendly software, focusing on practical problem solving and creating small, impactful projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
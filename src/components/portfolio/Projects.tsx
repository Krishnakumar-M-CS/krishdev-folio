import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Math Quiz Game",
      description: "Simple arithmetic quiz built using HTML, CSS, and JavaScript.",
      github: "https://github.com/your-username/math-quiz-game",
      demo: "https://example.com/math-quiz-game",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Cyber Safety Quiz",
      description: "Interactive web quiz teaching password hygiene, phishing awareness, and safe browsing practices.",
      github: "https://github.com/your-username/cyber-safety-quiz",
      demo: "https://example.com/cyber-safety-quiz",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "E-Cart Website",
      description: "Simple prototype e-commerce cart built with HTML, CSS, and JavaScript showing product display and cart interaction.",
      github: "https://github.com/your-username/e-cart",
      demo: "https://example.com/e-cart",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Simple Calculator",
      description: "Web-based calculator performing basic arithmetic operations using HTML, CSS, and JavaScript.",
      github: "https://github.com/your-username/simple-calculator",
      demo: "https://example.com/simple-calculator",
      tech: ["HTML", "CSS", "JavaScript"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="card-shadow bg-card border-border hover:shadow-lg transition-smooth group"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-teal text-teal hover:bg-teal hover:text-teal-foreground transition-smooth"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2 text-teal" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="hero-gradient hover:opacity-90 transition-smooth"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 text-white" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
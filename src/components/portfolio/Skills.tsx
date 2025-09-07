import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = [
    { name: "HTML", color: "orange" },
    { name: "CSS", color: "blue" },
    { name: "JavaScript", color: "orange" },
    { name: "Java", color: "purple" },
    { name: "DSA", color: "emerald" },
    { name: "SQL", color: "blue" },
    { name: "Python", color: "emerald" },
    { name: "Git", color: "orange" },
    { name: "GitHub", color: "navy" }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Skills
          </h2>
          
          <div className="card-shadow bg-card rounded-2xl p-8 md:p-12 transition-smooth hover:shadow-lg">
            <div className="flex flex-wrap gap-4 justify-center">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className={`px-6 py-3 text-lg font-medium bg-${skill.color}/10 text-${skill.color} hover:bg-${skill.color} hover:text-${skill.color}-foreground transition-smooth cursor-default border border-${skill.color}/20 rounded-full`}
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
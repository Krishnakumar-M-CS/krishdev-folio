import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "krish@example.com",
      href: "mailto:krish@example.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/krishnakumar",
      href: "https://github.com/krishnakumar"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/krishnakumar",
      href: "https://linkedin.com/in/krishnakumar"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Get in Touch
          </h2>
          
          <div className="card-shadow bg-card rounded-2xl p-8 md:p-12 transition-smooth hover:shadow-lg">
            <p className="text-lg md:text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and programming.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactLinks.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <div key={index} className="text-center">
                    <Button
                      variant="ghost"
                      className="w-full h-auto p-6 flex flex-col items-center space-y-4 hover:bg-primary/10 transition-smooth group"
                      onClick={() => window.open(contact.href, contact.icon === Mail ? "_self" : "_blank")}
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                        <IconComponent className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-smooth" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{contact.label}</h3>
                        <p className="text-sm text-muted-foreground group-hover:text-primary transition-smooth">
                          {contact.value}
                        </p>
                      </div>
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
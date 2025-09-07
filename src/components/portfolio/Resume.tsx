import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const handleDownload = () => {
    // In a real implementation, this would download the actual resume file
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = 'Krishnakumar_M_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Resume
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Interested in learning more about my background and experience? 
            Download my resume to see my complete academic and project history.
          </p>
          
          <div className="card-shadow bg-card rounded-2xl p-8 md:p-12 transition-smooth hover:shadow-lg">
            <div className="flex flex-col items-center space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Download className="w-8 h-8 text-primary" />
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Download My Resume
                </h3>
                <p className="text-muted-foreground mb-6">
                  Get a detailed overview of my education, skills, and projects
                </p>
              </div>
              
              <Button
                onClick={handleDownload}
                className="hero-gradient hover:opacity-90 transition-smooth px-8 py-3 text-lg font-semibold rounded-lg hero-shadow"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              
              <p className="text-sm text-muted-foreground">
                PDF format • Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
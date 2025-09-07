import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, User } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const handleExploreWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    // Create a blob with resume content or fetch from server
    const link = document.createElement('a');
    link.href = '/api/resume/download';
    link.download = 'Bhoomika_Marigoudar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          className="floating mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile image placeholder with cosmic border */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary to-secondary p-1" data-testid="profile-image">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
              <User className="h-16 w-16 text-primary" />
            </div>
          </div>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          data-testid="hero-title"
        >
          <span className="glow-text">Bhoomika</span><br />
          <span className="text-foreground">Marigoudar</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          data-testid="hero-description"
        >
          Passionate Software Engineer crafting robust, scalable systems with AI & full-stack expertise
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            onClick={handleExploreWork}
            className="glow-button px-8 py-3 rounded-lg text-background font-semibold"
            data-testid="button-explore-work"
          >
            Explore My Work
          </Button>
          <Button
            onClick={handleDownloadResume}
            variant="outline"
            className="cosmic-card px-8 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-background transition-all"
            data-testid="button-download-resume"
          >
            Download Resume
          </Button>
        </motion.div>
        
        <motion.div 
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="https://github.com/bhoomikamarigoudar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-muted-foreground hover:text-primary transition-colors"
            data-testid="link-github"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/bhoomika-marigoudar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-muted-foreground hover:text-primary transition-colors"
            data-testid="link-linkedin"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:bhoomikamarigoudar@gmail.com"
            className="text-2xl text-muted-foreground hover:text-primary transition-colors"
            data-testid="link-email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Smartphone, Bot, Brain, Warehouse, Github, ExternalLink } from "lucide-react";
import { resumeData } from "@/lib/resume-data";

const projectIcons = {
  "E-Bank App": Smartphone,
  "YOLO11 Flood Detection": Bot,
  "LLaMA RAG": Brain,
  "Inventory Management": Warehouse,
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-testid="projects-title"
        >
          Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {resumeData.projects.map((project, index) => {
            const IconComponent = projectIcons[project.name as keyof typeof projectIcons] || Code;
            
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`project-${project.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <Card className="project-card h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary mr-3" />
                      <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-primary bg-opacity-20 text-primary"
                          data-testid={`tech-badge-${tech.toLowerCase()}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4 mt-auto">
                      {project.github && (
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="text-primary hover:text-accent transition-colors p-0"
                          data-testid={`button-github-${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-1 h-4 w-4" />
                            View Code
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="text-secondary hover:text-accent transition-colors p-0"
                          data-testid={`button-demo-${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-1 h-4 w-4" />
                            {project.name.includes("Detection") ? "Research Paper" : 
                             project.name.includes("LLaMA") ? "Publication" : "Live Demo"}
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

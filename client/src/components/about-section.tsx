import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import SkillBar from "@/components/skill-bar";
import { Trophy, Award, Database, Cloud, Code, GitBranch } from "lucide-react";

export default function AboutSection() {
  const skills = [
    { name: "Java", level: 90 },
    { name: "Python", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "C++", level: 75 },
  ];

  const technologies = [
    { name: "React.js", icon: Code, color: "text-primary" },
    { name: "Node.js", icon: Code, color: "text-accent" },
    { name: "MongoDB", icon: Database, color: "text-secondary" },
    { name: "AWS", icon: Cloud, color: "text-primary" },
    { name: "Docker", icon: Cloud, color: "text-accent" },
    { name: "Git", icon: GitBranch, color: "text-secondary" },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-testid="about-title"
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-testid="about-background"
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary">Background</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A passionate and impact-driven software engineer in the making, with hands-on experience in full-stack development, real-world AI projects, and automation frameworks. Backed by a strong foundation in computer science fundamentals, my work spans UPI systems, disaster AI, and LLM-based tools — blending innovation with scalability.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm deeply motivated to craft robust, scalable systems that customers love, and thrive in collaborative, high-performance engineering environments.
            </p>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-accent">Education</h4>
              <Card className="cosmic-card" data-testid="education-card">
                <CardContent className="p-4">
                  <h5 className="font-semibold text-foreground">Bachelor of Engineering - Computer Science & AI</h5>
                  <p className="text-primary">KLE Technological University, Hubli</p>
                  <p className="text-muted-foreground">CGPA: 8.67 | Nov 2022 - Present</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-testid="skills-section"
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary">Skills & Technologies</h3>
            
            {/* Programming Languages */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4 text-accent">Programming Languages</h4>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
            
            {/* Tech Stack */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technologies.map((tech) => (
                <Card key={tech.name} className="cosmic-card text-center" data-testid={`tech-${tech.name.toLowerCase().replace('.', '')}`}>
                  <CardContent className="p-3">
                    <tech.icon className={`h-6 w-6 ${tech.color} mb-2 mx-auto`} />
                    <p className="text-sm text-foreground">{tech.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-testid="awards-section"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-primary">Honors & Recognition</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="cosmic-card text-center" data-testid="award-amazon">
              <CardContent className="p-6">
                <Trophy className="h-8 w-8 text-accent mb-4 mx-auto" />
                <h4 className="text-lg font-semibold text-foreground mb-2">Amazon Future Engineer Scholar</h4>
                <p className="text-muted-foreground">2022-2026 Certificate</p>
              </CardContent>
            </Card>
            <Card className="cosmic-card text-center" data-testid="award-dxc">
              <CardContent className="p-6">
                <Award className="h-8 w-8 text-secondary mb-4 mx-auto" />
                <h4 className="text-lg font-semibold text-foreground mb-2">DXC Programming Minds Scholar</h4>
                <p className="text-muted-foreground">2023-2025 Certificate</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import { resumeData } from "@/lib/resume-data";

export default function ResumeSection() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/api/resume/download';
    link.download = 'Bhoomika_Marigoudar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-testid="resume-title"
        >
          Resume
        </motion.h2>
        
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button
            onClick={handleDownloadResume}
            className="glow-button px-8 py-4 rounded-lg text-background font-semibold text-lg"
            data-testid="button-download-pdf"
          >
            <Download className="mr-2 h-5 w-5" />
            Download PDF Resume
          </Button>
        </motion.div>
        
        {/* Education Timeline */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          data-testid="education-timeline"
        >
          <h3 className="text-2xl font-semibold mb-8 text-primary">Education</h3>
          <div className="space-y-8">
            {resumeData.education.map((edu, index) => (
              <motion.div 
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`education-${index}`}
              >
                <Card className="cosmic-card">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-primary">{edu.institution}</p>
                    <p className="text-muted-foreground">{edu.duration} | {edu.grade}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Publications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          data-testid="publications-section"
        >
          <h3 className="text-2xl font-semibold mb-8 text-primary">Publications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {resumeData.publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`publication-${index}`}
              >
                <Card className="cosmic-card">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">{pub.title}</h4>
                    <p className="text-muted-foreground">{pub.venue}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

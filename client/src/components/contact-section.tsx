import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactForm) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-testid="contact-title"
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-testid="contact-info"
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary">Let's Connect</h3>
            <p className="text-muted-foreground mb-8">
              I'm always excited to discuss new opportunities, innovative projects, or potential collaborations. Feel free to reach out!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4" data-testid="contact-email">
                <Card className="cosmic-card p-3">
                  <Mail className="h-5 w-5 text-primary" />
                </Card>
                <div>
                  <p className="text-foreground font-semibold">Email</p>
                  <p className="text-muted-foreground">bhoomikamarigoudar@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4" data-testid="contact-phone">
                <Card className="cosmic-card p-3">
                  <Phone className="h-5 w-5 text-secondary" />
                </Card>
                <div>
                  <p className="text-foreground font-semibold">Phone</p>
                  <p className="text-muted-foreground">+91 8073481121</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4" data-testid="contact-location">
                <Card className="cosmic-card p-3">
                  <MapPin className="h-5 w-5 text-accent" />
                </Card>
                <div>
                  <p className="text-foreground font-semibold">Location</p>
                  <p className="text-muted-foreground">Dharwad, Karnataka, India</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-8" data-testid="social-links">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="cosmic-card hover:bg-primary hover:text-background transition-all"
                data-testid="link-github-contact"
              >
                <a href="https://github.com/bhoomikamarigoudar" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="cosmic-card hover:bg-primary hover:text-background transition-all"
                data-testid="link-linkedin-contact"
              >
                <a href="https://linkedin.com/in/bhoomika-marigoudar" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="cosmic-card hover:bg-primary hover:text-background transition-all"
                data-testid="link-email-contact"
              >
                <a href="mailto:bhoomikamarigoudar@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-testid="contact-form"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground font-semibold">Name</Label>
                <Input
                  id="name"
                  {...register("name")}
                  className="contact-input mt-2"
                  placeholder="Your full name"
                  data-testid="input-name"
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1" data-testid="error-name">
                    {errors.name.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="email" className="text-foreground font-semibold">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="contact-input mt-2"
                  placeholder="your.email@example.com"
                  data-testid="input-email"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1" data-testid="error-email">
                    {errors.email.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="subject" className="text-foreground font-semibold">Subject</Label>
                <Input
                  id="subject"
                  {...register("subject")}
                  className="contact-input mt-2"
                  placeholder="Project collaboration, job opportunity, etc."
                  data-testid="input-subject"
                />
                {errors.subject && (
                  <p className="text-destructive text-sm mt-1" data-testid="error-subject">
                    {errors.subject.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="message" className="text-foreground font-semibold">Message</Label>
                <Textarea
                  id="message"
                  {...register("message")}
                  rows={5}
                  className="contact-input mt-2 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  data-testid="input-message"
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1" data-testid="error-message">
                    {errors.message.message}
                  </p>
                )}
              </div>
              
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="glow-button w-full py-4 rounded-lg text-background font-semibold text-lg"
                data-testid="button-send-message"
              >
                <Send className="mr-2 h-5 w-5" />
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

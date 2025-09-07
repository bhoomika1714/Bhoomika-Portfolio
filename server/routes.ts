import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import fs from "fs";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // In a real application, you might send an email here
      console.log("New contact form submission:", contact);
      
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data",
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message. Please try again." 
        });
      }
    }
  });

  // Resume download endpoint
  app.get("/api/resume/download", async (req, res) => {
    try {
      // In a real application, you would serve the actual PDF file
      // For now, we'll create a simple text response that triggers download
      const resumeContent = `
BHOOMIKA MARIGOUDAR
Software Engineer

Email: bhoomikamarigoudar@gmail.com
Phone: +91 8073481121
Location: Dharwad, Karnataka

SUMMARY
A passionate and impact-driven software engineer in the making, with hands-on experience in full-stack development, real-world AI projects, and automation frameworks.

EDUCATION
Bachelor of Engineering in Computer Science And Artificial Intelligence
KLE Technological University - Hubli, India
CGPA: 8.67 | Nov 2022 - Present

SKILLS
Programming Languages: Java, C++, Python, C, JavaScript
Web Development: HTML, CSS, React.js, Node.js, RESTful APIs
Databases: SQL, PostgreSQL, MongoDB, NoSQL Database Design

PROJECTS
1. E-Bank App – Secure UPI Transactions
2. YOLO11-Based Flood Victim Detection & Rescue Alert System
3. LLaMA Meets RAG: Concept-Aware Summarization of Academic Papers
4. Inventory Management System Using Object-Oriented Programming

HONORS & AWARDS
Amazon Future Engineer Scholar | 2022-2026 Certificate
DXC Programming Minds Scholar | 2023-2025 Certificate
      `.trim();

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Bhoomika_Marigoudar_Resume.pdf"');
      res.send(resumeContent);
    } catch (error) {
      console.error("Resume download error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to download resume. Please try again." 
      });
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json({ success: true, contacts });
    } catch (error) {
      console.error("Get contacts error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contacts." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

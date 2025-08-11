import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { db } from "./db";
import { insertJobSchema, insertApplicationSchema, insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { supabaseAdmin } from "./supabase";

// Auth middleware
async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }
  const { data: { user }, error } = await supabaseAdmin.auth.getUser(token);
  if (error || !user) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
  (req as any).user = user;
  next();
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Jobs endpoints
  app.get("/api/jobs", async (req, res) => {
    try {
      const jobs = await db.getJobs();
      res.json(jobs);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch jobs" });
    }
  });

  app.get("/api/jobs/slug/:slug", async (req, res) => {
    try {
      const job = await db.getJobBySlug(req.params.slug);
      if (!job) {
        return res.status(404).json({ message: "Job not found" });
      }
      res.json(job);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch job" });
    }
  });

  app.post("/api/jobs", authMiddleware, async (req, res) => {
    try {
      const jobData = insertJobSchema.parse(req.body);
      const job = await db.createJob(jobData);
      res.status(201).json(job);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid job data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create job" });
    }
  });

  app.delete("/api/jobs/:id", authMiddleware, async (req, res) => {
    try {
        await db.deleteJob(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: "Failed to delete job" });
    }
  });

  // Applications endpoints
  app.post("/api/applications", async (req, res) => {
    try {
      const appData = insertApplicationSchema.parse(req.body);
      const application = await db.createApplication(appData);
      res.status(201).json(application);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid application data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create application" });
    }
  });

  app.get("/api/applications/job/:jobId", authMiddleware, async (req, res) => {
    try {
      const applications = await db.getApplicationsByJob(req.params.jobId);
      res.json(applications);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch applications" });
    }
  });

  app.delete("/api/applications/:id", authMiddleware, async (req, res) => {
    try {
        await db.deleteApplication(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: "Failed to delete application" });
    }
  });

  // Contacts endpoints
  app.get("/api/contacts", authMiddleware, async (req, res) => {
    try {
      const contacts = await db.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contacts" });
    }
  });

  app.post("/api/contacts", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await db.createContact(contactData);
      res.status(201).json(contact);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid contact data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create contact" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
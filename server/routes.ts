import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // All API routes are removed as the client now communicates directly with Supabase.
  // The server is now only responsible for serving the frontend application.
  
  const httpServer = createServer(app);
  return httpServer;
}
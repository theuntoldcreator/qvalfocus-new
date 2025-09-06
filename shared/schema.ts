import { z } from "zod";

// Base Job Schema
export const jobSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  slug: z.string(),
  company: z.string(),
  company_logo: z.string().nullable(),
  location: z.string(),
  type: z.string(),
  level: z.string(),
  salary: z.string().nullable(),
  description: z.string(),
  requirements: z.string(),
  responsibilities: z.string(),
  benefits: z.string().nullable(),
  skills: z.array(z.string()).nullable(),
  tags: z.array(z.string()).nullable(),
  remote: z.boolean().nullable(),
  featured: z.boolean().nullable(),
  industry: z.string(),
  recruiter_name: z.string().nullable(),
  recruiter_email: z.string().nullable(),
  recruiter_phone: z.string().nullable(),
  application_type: z.string(),
  external_application_url: z.string().nullable(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const insertJobSchema = jobSchema.omit({
  id: true,
  slug: true,
  created_at: true,
  updated_at: true,
});

export const applicationSchema = z.object({
    id: z.string().uuid(),
    job_id: z.string().uuid(),
    first_name: z.string(),
    last_name: z.string(),
    email: z.string().email(),
    phone: z.string().nullable(),
    current_role: z.string().nullable(),
    experience_level: z.string().nullable(),
    linkedin: z.string().url().nullable().or(z.literal("")),
    github: z.string().url().nullable().or(z.literal("")),
    portfolio: z.string().url().nullable().or(z.literal("")),
    cover_letter: z.string().nullable(),
    resume_url: z.string().url().nullable(),
    created_at: z.string(),
});

export const insertApplicationSchema = applicationSchema.omit({
    id: true,
    created_at: true,
});

export const contactSchema = z.object({
    id: z.string().uuid(),
    type: z.enum(['client', 'candidate']),
    first_name: z.string(),
    last_name: z.string(),
    email: z.string().email(),
    company: z.string().nullable(),
    hiring_need: z.string().nullable(),
    message: z.string().nullable(),
    current_role: z.string().nullable(),
    experience_level: z.string().nullable(),
    resume_url: z.string().url().nullable(),
    created_at: z.string(),
});

export const insertContactSchema = contactSchema.omit({
    id: true,
    created_at: true,
});

// New Blog Schema
export const blogSchema = z.object({
  id: z.string().uuid(),
  slug: z.string(),
  title: z.string(),
  subtitle: z.string().nullable(),
  author: z.string(),
  authorAvatar: z.string().nullable(),
  publishDate: z.string(),
  imageUrl: z.string().nullable(),
  category: z.string(),
  content: z.string(), // Full blog content
  tags: z.array(z.string()).nullable(),
  readTimeMinutes: z.number().nullable(),
  featured: z.boolean().nullable(),
  createdAt: z.string(),
});

export const testimonialSchema = z.object({
  id: z.number(),
  name: z.string(),
  role: z.string(),
  avatar: z.string(),
  content: z.string(),
  company: z.string(),
});

export type Job = z.infer<typeof jobSchema>;
export type InsertJob = z.infer<typeof insertJobSchema>;
export type Application = z.infer<typeof applicationSchema>;
export type InsertApplication = z.infer<typeof insertApplicationSchema>;
export type Contact = z.infer<typeof contactSchema>;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Blog = z.infer<typeof blogSchema>;
export type Testimonial = z.infer<typeof testimonialSchema>;

// The other schemas are no longer backed by a database, so they are removed for now.
// I can add them back if needed.
export const insertUserSchema = z.object({});
export const insertNewsletterSchema = z.object({});
export type User = any;
export type InsertUser = any;
export type Newsletter = any;
export type InsertNewsletter = any;
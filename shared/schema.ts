import { z } from "zod";

// Base Job Schema
export const jobSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  slug: z.string(),
  company: z.string(),
  companyLogo: z.string().nullable(),
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
  recruiterName: z.string().nullable(),
  recruiterEmail: z.string().nullable(),
  recruiterPhone: z.string().nullable(),
  applicationType: z.string(),
  externalApplicationUrl: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

// InsertJob schema removed as admin panel is deleted
// export const insertJobSchema = jobSchema.omit({
//   id: true,
//   slug: true,
//   createdAt: true,
//   updatedAt: true,
// });

export const applicationSchema = z.object({
    id: z.string().uuid(),
    jobId: z.string().uuid(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    phone: z.string().nullable(),
    currentRole: z.string().nullable(),
    experienceLevel: z.string(),
    linkedin: z.string().url().nullable().or(z.literal("")),
    github: z.string().url().nullable().or(z.literal("")),
    portfolio: z.string().url().nullable().or(z.literal("")),
    coverLetter: z.string().nullable(),
    resumeUrl: z.string().url().nullable(),
    createdAt: z.string(),
});

export const insertApplicationSchema = applicationSchema.omit({
    id: true,
    createdAt: true,
});

export const contactSchema = z.object({
    id: z.string().uuid(),
    type: z.enum(['client', 'candidate']),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    company: z.string().nullable(),
    hiringNeed: z.string().nullable(),
    message: z.string().nullable(),
    currentRole: z.string().nullable(),
    experienceLevel: z.string().nullable(),
    resumeUrl: z.string().url().nullable(),
    createdAt: z.string(),
});

export const insertContactSchema = contactSchema.omit({
    id: true,
    createdAt: true,
});


export type Job = z.infer<typeof jobSchema>;
// export type InsertJob = z.infer<typeof insertJobSchema>; // Removed
export type Application = z.infer<typeof applicationSchema>;
export type InsertApplication = z.infer<typeof insertApplicationSchema>;
export type Contact = z.infer<typeof contactSchema>;
export type InsertContact = z.infer<typeof insertContactSchema>;

// The other schemas are no longer backed by a database, so they are removed for now.
// I can add them back if needed.
export const insertUserSchema = z.object({});
export const insertNewsletterSchema = z.object({});
export const insertCaseStudySchema = z.object({});
export type User = any;
export type InsertUser = any;
export type Newsletter = any;
export type InsertNewsletter = any;
export type CaseStudy = any;
export type InsertCaseStudy = any;
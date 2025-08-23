export type Job = {
  id: string;
  title: string;
  slug: string;
  company: string;
  company_logo: string | null;
  location: string;
  type: string;
  level: string;
  salary: string | null;
  description: string;
  requirements: string;
  responsibilities: string;
  benefits: string | null;
  skills: string[] | null;
  tags: string[] | null;
  remote: boolean | null;
  featured: boolean | null;
  industry: string;
  recruiter_name: string | null;
  recruiter_email: string | null;
  recruiter_phone: string | null;
  application_type: string;
  external_application_url: string | null;
  created_at: string;
  updated_at: string;
};

export type InsertJob = Omit<Job, 'id' | 'slug' | 'created_at' | 'updated_at'>;

export type Application = {
  id: string;
  job_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  current_role: string | null;
  experience_level: string | null;
  linkedin: string | null;
  github: string | null;
  portfolio: string | null;
  cover_letter: string | null;
  resume_url: string | null;
  created_at: string;
  score: number | null;
};

export type InsertApplication = Omit<Application, 'id' | 'created_at' | 'score'>;

export type Blog = {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  author: string;
  authorAvatar: string | null;
  publishDate: string;
  imageUrl: string | null;
  category: string;
  content: string;
  tags: string[] | null;
  readTimeMinutes: number | null;
  featured: boolean | null;
  status: 'draft' | 'published';
  createdAt: string;
};

export type InsertBlog = Omit<Blog, 'id' | 'createdAt'>;

export type Contact = {
  id: string;
  type: string;
  first_name: string;
  last_name: string;
  email: string;
  company: string | null;
  hiring_need: string | null;
  message: string | null;
  current_role: string | null;
  experience_level: string | null;
  resume_url: string | null;
  created_at: string;
};

export type InsertContact = Omit<Contact, 'id' | 'created_at'>;

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  testimonial: string;
};

export type NewsletterSubscription = {
  id: string;
  email: string;
  created_at: string;
};

export type InsertNewsletterSubscription = {
  email: string;
};
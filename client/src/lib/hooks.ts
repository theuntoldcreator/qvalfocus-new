import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "./supabase";
import type { Job, Application, InsertJob, InsertApplication, Blog, InsertBlog, Contact, InsertContact, Testimonial } from "@shared/schema";
import { blogs as mockBlogs, testimonials as mockTestimonials } from './data';

// Jobs
export function useJobs() {
  return useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const { data, error } = await supabase.from("jobs").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });
}

export function useJob(slug: string) {
  return useQuery({
    queryKey: ["job", slug],
    queryFn: async () => {
      const { data, error } = await supabase.from("jobs").select("*").eq("slug", slug).single();
      if (error) throw error;
      return data;
    },
  });
}

export function useCreateJob() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (job: InsertJob) => {
      const { data, error } = await supabase.from("jobs").insert(job).select().single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },
  });
}

// Applications
export function useApplications() {
  return useQuery({
    queryKey: ["applications"],
    queryFn: async () => {
      const { data, error } = await supabase.from("applications").select("*, jobs(title, slug)").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });
}

export function useCreateApplication() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (application: InsertApplication) => {
      const { data, error } = await supabase.from("applications").insert(application).select().single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["applications"] });
    },
  });
}

// Blogs (using mock data for now)
export function useBlogs() {
  return useQuery<Blog[], Error>({
    queryKey: ['blogs'],
    queryFn: async () => {
      // Replace with actual API call when ready
      return Promise.resolve(mockBlogs as unknown as Blog[]);
    },
  });
}

export function useBlog(slug: string) {
  return useQuery<Blog, Error>({
    queryKey: ['blog', slug],
    queryFn: async () => {
      // Replace with actual API call when ready
      const blog = mockBlogs.find(b => b.slug === slug);
      if (!blog) {
        throw new Error('Blog not found');
      }
      return Promise.resolve(blog as unknown as Blog);
    },
  });
}

// Contacts
export function useCreateContact() {
  return useMutation({
    mutationFn: async (contact: InsertContact) => {
      const { data, error } = await supabase.from("contacts").insert(contact).select().single();
      if (error) throw error;
      return data;
    },
  });
}

// Testimonials (using mock data)
export function useTestimonials() {
  return useQuery<Testimonial[], Error>({
    queryKey: ['testimonials'],
    queryFn: async () => {
      return Promise.resolve(mockTestimonials as unknown as Testimonial[]);
    },
  });
}
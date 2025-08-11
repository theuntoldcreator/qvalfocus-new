import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Job, Application, InsertApplication, Blog, Contact, InsertContact } from "@shared/schema";
import { blogs as mockBlogs } from './data';

// Helper to generate a URL-friendly slug
function toSlug(text: string) {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

// Jobs
export function useJobs(options: { poll?: boolean } = {}) {
  return useQuery<Job[]>({
    queryKey: ['jobs'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw new Error(error.message);
      return data as Job[];
    },
    refetchInterval: options.poll ? 60000 : false,
  });
}

export function useFeaturedJobs() {
  return useQuery<Job[]>({
    queryKey: ['jobs'],
    select: (jobs) => (jobs || []).filter(job => job.featured).slice(0, 3)
  });
}

export function useJobBySlug(slug: string) {
  return useQuery<Job>({
    queryKey: ['jobs', 'slug', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('slug', slug)
        .single();
      if (error) throw new Error(error.message);
      return data as Job;
    },
    enabled: !!slug,
  });
}

// Applications
export function useCreateApplication() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (newApplication: InsertApplication) => {
            const { data, error } = await supabase
                .from('applications')
                .insert([newApplication])
                .select()
                .single();
            if (error) throw new Error(error.message);
            return data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['applications', 'job', data.job_id] });
        },
    });
}

// Contacts
export function useCreateContact() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (newContact: InsertContact) => {
            const { data, error } = await supabase
                .from('contacts')
                .insert([newContact])
                .select()
                .single();
            if (error) throw new Error(error.message);
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['contacts'] });
        },
    });
}

// Blog Hooks (replacing Case Study hooks)
export function useBlogs() {
  return useQuery<Blog[]>({
    queryKey: ['blogs'],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
      return mockBlogs;
    },
  });
}

export function useFeaturedBlogs() {
  return useQuery<Blog[]>({
    queryKey: ['featured-blogs'],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
      return mockBlogs.filter(blog => blog.featured).slice(0, 2);
    },
  });
}

export function useBlogPostBySlug(slug: string) {
  return useQuery<Blog>({
    queryKey: ['blog', slug],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
      const post = mockBlogs.find((b: any) => b.slug === slug);
      if (!post) {
        throw new Error('Blog post not found');
      }
      return post;
    },
    enabled: !!slug,
  });
}

export function useSubscribeNewsletter() {
  return useMutation({
    mutationFn: async (data: { email: string }) => {
      console.log("Subscribing to newsletter:", data.email);
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { success: true };
    },
  });
}
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Job, Application, InsertJob, InsertApplication, Blog, InsertBlog, Contact, InsertContact, Testimonial, NewsletterSubscription, InsertNewsletterSubscription } from "@shared/schema";
import { blogs as mockBlogs, testimonials as mockTestimonials } from './data';

// Jobs
export function useJobs() {
  return useQuery<Job[], Error>({
    queryKey: ["jobs"],
    queryFn: async () => {
      const { data, error } = await supabase.from("jobs").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });
}

export function useFeaturedJobs() {
    return useQuery<Job[], Error>({
      queryKey: ["featured-jobs"],
      queryFn: async () => {
        const { data, error } = await supabase.from("jobs").select("*").eq('featured', true).limit(4).order("created_at", { ascending: false });
        if (error) throw error;
        return data;
      },
    });
}

export function useJob(slug: string) {
  return useQuery<Job, Error>({
    queryKey: ["job", slug],
    queryFn: async () => {
      const { data, error } = await supabase.from("jobs").select("*").eq("slug", slug).single();
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
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

export function useUpdateJob() {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: async (job: Job) => {
        const { data, error } = await supabase.from("jobs").update(job).eq('id', job.id).select().single();
        if (error) throw error;
        return data;
      },
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["jobs"] });
        queryClient.invalidateQueries({ queryKey: ["job", data.slug] });
      },
    });
}

export function useDeleteJob() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (id: string) => {
            const { error } = await supabase.from("jobs").delete().eq('id', id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["jobs"] });
        },
    });
}


// Applications
export function useApplications(jobId?: string) {
  return useQuery({
    queryKey: ["applications", jobId],
    queryFn: async () => {
      let query = supabase.from("applications").select("*, jobs(title, slug)").order("created_at", { ascending: false });
      if (jobId) {
        query = query.eq('job_id', jobId);
      }
      const { data, error } = await query;
      if (error) throw error;
      return data;
    },
    enabled: !!jobId,
  });
}

export function useAllApplications() {
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

export function useDeleteApplication() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (id: string) => {
            const { error } = await supabase.from("applications").delete().eq('id', id);
            if (error) throw error;
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
    queryFn: async () => Promise.resolve(mockBlogs as unknown as Blog[]),
  });
}

export function useBlog(slug: string) {
  return useQuery<Blog, Error>({
    queryKey: ['blog', slug],
    queryFn: async () => {
      const blog = mockBlogs.find(b => b.slug === slug);
      if (!blog) throw new Error('Blog not found');
      return Promise.resolve(blog as unknown as Blog);
    },
    enabled: !!slug,
  });
}

export function useCreateBlog() {
    return useMutation({ mutationFn: async (blog: InsertBlog) => { console.log("Creating blog", blog); return Promise.resolve(blog); } });
}
export function useUpdateBlog() {
    return useMutation({ mutationFn: async (blog: Blog) => { console.log("Updating blog", blog); return Promise.resolve(blog); } });
}
export function useDeleteBlog() {
    return useMutation({ mutationFn: async (id: string) => { console.log("Deleting blog", id); return Promise.resolve(); } });
}

// Contacts
export function useContacts() {
    return useQuery<Contact[], Error>({
        queryKey: ["contacts"],
        queryFn: async () => {
            const { data, error } = await supabase.from("contacts").select("*").order("created_at", { ascending: false });
            if (error) throw error;
            return data;
        },
    });
}

export function useCreateContact() {
  return useMutation({
    mutationFn: async (contact: InsertContact) => {
      const { data, error } = await supabase.from("contacts").insert(contact).select().single();
      if (error) throw error;
      return data;
    },
  });
}

export function useDeleteContact() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (id: string) => {
            const { error } = await supabase.from("contacts").delete().eq('id', id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["contacts"] });
        },
    });
}

// Newsletter
export function useNewsletterSubscriptions() {
    return useQuery<NewsletterSubscription[], Error>({
        queryKey: ["newsletter_subscriptions"],
        queryFn: async () => {
            const { data, error } = await supabase.from("newsletter_subscriptions").select("*").order("created_at", { ascending: false });
            if (error) throw error;
            return data;
        },
    });
}

export function useSubscribeNewsletter() {
    return useMutation({
        mutationFn: async (subscription: InsertNewsletterSubscription) => {
            const { data, error } = await supabase.from("newsletter_subscriptions").insert(subscription).select().single();
            if (error) throw error;
            return data;
        },
    });
}

export function useDeleteNewsletterSubscription() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (id: string) => {
            const { error } = await supabase.from("newsletter_subscriptions").delete().eq('id', id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["newsletter_subscriptions"] });
        },
    });
}


// Testimonials (using mock data)
export function useTestimonials() {
  return useQuery<Testimonial[], Error>({
    queryKey: ['testimonials'],
    queryFn: async () => Promise.resolve(mockTestimonials as unknown as Testimonial[]),
  });
}
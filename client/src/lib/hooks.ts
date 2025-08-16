import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Job, Application, InsertJob, InsertApplication, Blog, Contact, InsertContact, Testimonial } from "@shared/schema";
import { blogs as mockBlogs, testimonials as mockTestimonials } from './data';

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

export function useCreateJob() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (newJob: InsertJob) => {
            const slug = toSlug(newJob.title);
            const { data, error } = await supabase
                .from('jobs')
                .insert([{ ...newJob, slug }])
                .select()
                .single();
            if (error) {
              console.error("Supabase insert error:", error);
              throw new Error(error.message);
            }
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['jobs'] });
        },
    });
}

export function useDeleteJob() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (id: string) => {
            const { error } = await supabase.from('jobs').delete().eq('id', id);
            if (error) throw new Error(error.message);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['jobs'] });
        },
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
            queryClient.invalidateQueries({ queryKey: ['applications', 'all'] });
        },
    });
}

export function useApplications(jobId: string) {
    return useQuery<Application[]>({
        queryKey: ['applications', 'job', jobId],
        queryFn: async () => {
            const { data, error } = await supabase
                .from('applications')
                .select('*')
                .eq('job_id', jobId)
                .order('created_at', { ascending: false });
            if (error) throw new Error(error.message);
            return data as Application[];
        },
        enabled: !!jobId,
    });
}

export function useDeleteApplication() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (id: string) => {
            const { error } = await supabase.from('applications').delete().eq('id', id);
            if (error) throw new Error(error.message);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['applications'] });
        },
    });
}

type ApplicationWithJob = Application & {
  jobs: {
    title: string;
    slug: string;
  } | null;
};

export function useAllApplications() {
    return useQuery<ApplicationWithJob[]>({
        queryKey: ['applications', 'all'],
        queryFn: async () => {
            const { data, error } = await supabase
                .from('applications')
                .select(`
                    *,
                    jobs (
                        title,
                        slug
                    )
                `)
                .order('created_at', { ascending: false });
            if (error) throw new Error(error.message);
            return data as ApplicationWithJob[];
        },
    });
}

// Contacts
export function useContacts() {
    return useQuery<Contact[]>({
        queryKey: ['contacts'],
        queryFn: async () => {
            const { data, error } = await supabase
                .from('contacts')
                .select('*')
                .order('created_at', { ascending: false });
            if (error) throw new Error(error.message);
            return data as Contact[];
        },
    });
}

export function useCreateContact() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (newContact: InsertContact) => {
            const { data, error } = await supabase
                .from('contacts')
                .insert([newContact]);
            if (error) throw new Error(error.message);
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['contacts'] });
        },
    });
}

// Testimonials
export function useTestimonials() {
  return useQuery<Testimonial[]>({
    queryKey: ['testimonials'],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
      return mockTestimonials;
    },
  });
}

// Blog Hooks (unchanged)
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
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: { email: string }) => {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email: data.email }]);
      if (error) {
        if (error.code === '23505') {
          throw new Error('This email is already subscribed.');
        }
        throw new Error(error.message);
      }
      return { success: true };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['newsletter_subscriptions'] });
    },
  });
}

export function useNewsletterSubscriptions() {
    return useQuery<{ id: string; email: string; created_at: string }[]>({
        queryKey: ['newsletter_subscriptions'],
        queryFn: async () => {
            const { data, error } = await supabase
                .from('newsletter_subscriptions')
                .select('*')
                .order('created_at', { ascending: false });
            if (error) throw new Error(error.message);
            return data || [];
        },
    });
}
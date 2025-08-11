import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Job, Application, InsertApplication, CaseStudy, Contact, InsertContact } from "@shared/schema";
import { caseStudies as mockCaseStudies } from './data';

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

// Admin-related job mutations removed
// export function useCreateJob() { ... }
// export function useDeleteJob() { ... }

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

// Admin-related application queries/mutations removed
// export function useApplications(jobId: string) { ... }
// export function useDeleteApplication() { ... }
// export function useAllApplications() { ... }

// Contacts
// Admin-related contact queries/mutations removed
// export function useContacts() { ... }

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

// Mocked Hooks (unchanged)
export function useCaseStudies() {
  return useQuery<CaseStudy[]>({
    queryKey: ['case-studies'],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      return mockCaseStudies;
    },
  });
}

export function useFeaturedCaseStudies() {
  return useQuery<CaseStudy[]>({
    queryKey: ['featured-case-studies'],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      return mockCaseStudies.slice(0, 2);
    },
  });
}

export function useCaseStudyBySlug(slug: string) {
  return useQuery<CaseStudy>({
    queryKey: ['case-study', slug],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      const study = mockCaseStudies.find((cs: any) => cs.slug === slug);
      if (!study) {
        throw new Error('Case study not found');
      }
      return study;
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
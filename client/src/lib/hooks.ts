import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "./queryClient";
import type { Job, Application, InsertJob, InsertApplication, CaseStudy, Contact, InsertContact } from "@shared/schema";
import { caseStudies as mockCaseStudies } from './data';
import { supabase } from "@/integrations/supabase/client";

// Jobs
export function useJobs(options: { poll?: boolean } = {}) {
  return useQuery<Job[]>({
    queryKey: ['/api/jobs'],
    refetchInterval: options.poll ? 60000 : false, // Poll every 60 seconds if enabled
  });
}

export function useFeaturedJobs() {
  return useQuery<Job[]>({
    queryKey: ['/api/jobs'],
    select: (jobs) => jobs.filter(job => job.featured).slice(0, 3)
  });
}

export function useJobBySlug(slug: string) {
  return useQuery<Job>({
    queryKey: ['/api/jobs/slug', slug],
    enabled: !!slug,
  });
}

export function useCreateJob() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newJob: InsertJob) => apiRequest('POST', '/api/jobs', newJob),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['/api/jobs'] });
        },
    });
}

export function useDeleteJob() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: string) => apiRequest('DELETE', `/api/jobs/${id}`),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['/api/jobs'] });
        },
    });
}

// Applications
export function useCreateApplication() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (newApplication: InsertApplication) => {
            const res = await apiRequest('POST', '/api/applications', newApplication);
            return res.json();
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['/api/applications/job', data.jobId] });
        },
    });
}

export function useApplications(jobId: string) {
    return useQuery<Application[]>({
        queryKey: ['/api/applications/job', jobId],
        enabled: !!jobId,
    });
}

export function useDeleteApplication() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: string) => apiRequest('DELETE', `/api/applications/${id}`),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['/api/applications/job'] });
        },
    });
}

// Contacts
export function useContacts() {
    return useQuery<Contact[]>({
        queryKey: ['/api/contacts'],
    });
}

export function useCreateContact() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newContact: InsertContact) => apiRequest('POST', '/api/contacts', newContact),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['/api/contacts'] });
        },
    });
}

// Mocked Hooks
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
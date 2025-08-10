import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "./queryClient";
import type { Job, Application, Contact, Newsletter, CaseStudy, InsertApplication, InsertContact } from "@shared/schema";

// Jobs
export function useJobs(filters?: { location?: string; type?: string; industry?: string; search?: string }) {
  const queryParams = new URLSearchParams();
  if (filters?.location && filters.location !== 'All Locations') queryParams.set('location', filters.location);
  if (filters?.type && filters.type !== 'All Types') queryParams.set('type', filters.type);
  if (filters?.industry) queryParams.set('industry', filters.industry);
  if (filters?.search) queryParams.set('search', filters.search);

  return useQuery<Job[]>({
    queryKey: ['/api/jobs', queryParams.toString()],
    queryFn: async () => {
      const url = `/api/jobs${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch jobs');
      return response.json();
    }
  });
}

export function useFeaturedJobs() {
  return useQuery<Job[]>({
    queryKey: ['/api/jobs/featured'],
  });
}

export function useJob(id: string) {
  return useQuery<Job>({
    queryKey: ['/api/jobs', id],
    enabled: !!id,
  });
}

export function useJobBySlug(slug: string) {
  return useQuery<Job>({
    queryKey: ['/api/jobs/slug', slug],
    enabled: !!slug,
  });
}

// Applications
export function useCreateApplication() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (application: InsertApplication) => {
      const response = await apiRequest('POST', '/api/applications', application);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/applications'] });
    },
  });
}

// Contacts
export function useCreateContact() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (contact: InsertContact) => {
      const response = await apiRequest('POST', '/api/contacts', contact);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/contacts'] });
    },
  });
}

// Newsletter
export function useSubscribeNewsletter() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (newsletter: { email: string }) => {
      const response = await apiRequest('POST', '/api/newsletter/subscribe', newsletter);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/newsletter'] });
    },
  });
}

// Case Studies
export function useCaseStudies() {
  return useQuery<CaseStudy[]>({
    queryKey: ['/api/case-studies'],
  });
}

export function useFeaturedCaseStudies() {
  return useQuery<CaseStudy[]>({
    queryKey: ['/api/case-studies/featured'],
  });
}

export function useCaseStudy(id: string) {
  return useQuery<CaseStudy>({
    queryKey: ['/api/case-studies', id],
    enabled: !!id,
  });
}

export function useCaseStudyBySlug(slug: string) {
  return useQuery<CaseStudy>({
    queryKey: ['/api/case-studies/slug', slug],
    enabled: !!slug,
  });
}
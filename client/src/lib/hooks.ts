import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "./queryClient";
import type { Job, Application, InsertJob, InsertApplication } from "@shared/schema";

// Jobs
export function useJobs() {
  return useQuery<Job[]>({
    queryKey: ['/api/jobs'],
    queryFn: async () => {
      const response = await fetch('/api/jobs');
      if (!response.ok) throw new Error('Failed to fetch jobs');
      return response.json();
    }
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
        onSuccess: (_data, id) => {
            // This is a bit tricky, we need to find which query to invalidate
            // For now, let's refetch all application queries
            queryClient.invalidateQueries({ queryKey: ['/api/applications'] });
        },
    });
}

// NOTE: Other hooks are removed for now as their backend counterparts were removed.
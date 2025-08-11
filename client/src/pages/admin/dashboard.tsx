import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { useJobs, useDeleteJob } from "@/lib/hooks";
import { JobForm } from "@/components/admin/job-form";
import { ApplicationList } from "@/components/admin/application-list";
import { useState } from "react";
import type { Job } from "@shared/schema";
import { supabase } from "@/integrations/supabase/client";
import { useLocation } from "wouter";

export default function AdminDashboardPage() {
  const { data: jobs, isLoading: isLoadingJobs } = useJobs();
  const deleteJob = useDeleteJob();
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [_, navigate] = useLocation();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl font-bold">Admin Dashboard</h1>
            <Button variant="destructive" onClick={handleSignOut}>Sign Out</Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Post/Edit Job Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Post a New Job</h2>
              <JobForm />
            </div>

            {/* Job Listings & Applications */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Manage Job Listings</h2>
                {isLoadingJobs ? (
                  <p>Loading jobs...</p>
                ) : (
                  <ul className="space-y-4">
                    {jobs?.map((job) => (
                      <li key={job.id} className="flex justify-between items-center p-4 border rounded-lg">
                        <div>
                          <p className="font-semibold">{job.title}</p>
                          <p className="text-sm text-slate-500">{job.location}</p>
                        </div>
                        <div className="space-x-2">
                          <Button variant="outline" size="sm" onClick={() => setSelectedJob(job)}>
                            View Apps
                          </Button>
                          <Button variant="destructive" size="sm" onClick={() => deleteJob.mutate(job.id)}>
                            Delete
                          </Button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {selectedJob && (
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                   <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Applications for {selectedJob.title}</h2>
                    <Button variant="ghost" size="sm" onClick={() => setSelectedJob(null)}>Close</Button>
                   </div>
                  <ApplicationList jobId={selectedJob.id} />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
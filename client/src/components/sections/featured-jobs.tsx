import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { JobCard } from "@/components/job/job-card";
import { JobFilters } from "@/components/job/job-filters";
import { useFeaturedJobs } from "@/lib/hooks";
import { Skeleton } from "@/components/ui/skeleton";

export function FeaturedJobs() {
  const { data: jobs, isLoading } = useFeaturedJobs();

  return (
    <section id="jobs" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Featured Opportunities</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Discover roles that match your expertise and career aspirations.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button asChild className="bg-theme-orange hover:bg-theme-orange-dark">
              <Link to="/jobs">View All Jobs</Link>
            </Button>
          </div>
        </div>
        
        <JobFilters className="mb-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="glass dark:glass-dark rounded-xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <Skeleton className="w-12 h-12 rounded-lg" />
                  <Skeleton className="w-16 h-6 rounded-full" />
                </div>
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-4" />
                <Skeleton className="h-16 w-full mb-4" />
                <div className="flex gap-2 mb-4">
                  <Skeleton className="h-6 w-16" />
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-6 w-12" />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <Skeleton className="h-4 w-32 mb-1" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                  <Skeleton className="h-8 w-16" />
                </div>
              </div>
            ))
          ) : (
            jobs?.map((job) => (
              <JobCard key={job.id} job={job} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
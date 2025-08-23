import { JobCard } from "@/components/job/job-card";
import { JobFilters } from "@/components/job/job-filters";
import { useFeaturedJobs } from "@/lib/hooks";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { type Job } from "@shared/schema";

export function FeaturedJobs() {
  const { data: jobs, isLoading } = useFeaturedJobs();

  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Featured Jobs</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Latest Job Openings
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Explore our most recent and exciting job opportunities.
          </p>
        </div>
        <div className="mt-12">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-32 w-full" />
            </div>
          ) : (
            jobs && jobs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {jobs.map((job: Job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">No featured jobs available at the moment.</p>
            )
          )}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/jobs">View All Jobs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
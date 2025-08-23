import { useState } from "react";
import { useJobs } from "@/lib/hooks";
import { JobCard } from "@/components/job/job-card";
import { JobFilters } from "@/components/job/job-filters";
import { Skeleton } from "@/components/ui/skeleton";
import { type Job } from "@shared/schema";

export default function JobsPage() {
  const { data: jobs, isLoading } = useJobs();
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [typeQuery, setTypeQuery] = useState("");
  const [levelQuery, setLevelQuery] = useState("");
  const [industryQuery, setIndustryQuery] = useState("");

  const filteredJobs = jobs?.filter((job: Job) => {
    const searchLower = searchQuery.toLowerCase();
    const locationLower = locationQuery.toLowerCase();

    return (
      (job.title.toLowerCase().includes(searchLower) ||
        job.company.toLowerCase().includes(searchLower) ||
        job.description.toLowerCase().includes(searchLower)) &&
      job.location.toLowerCase().includes(locationLower) &&
      (typeQuery === "" || job.type === typeQuery) &&
      (levelQuery === "" || job.level === levelQuery) &&
      (industryQuery === "" || job.industry === industryQuery)
    );
  }) || [];

  return (
    <>
      <header className="bg-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900">Find Your Next Opportunity</h1>
          <p className="mt-4 text-lg text-slate-600">
            Browse through our open positions and find a job that's right for you.
          </p>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <JobFilters
              onSearchChange={setSearchQuery}
              onLocationChange={setLocationQuery}
              onTypeChange={setTypeQuery}
              onLevelChange={setLevelQuery}
              onIndustryChange={setIndustryQuery}
            />
          </aside>
          <div className="lg:col-span-3">
            {isLoading ? (
              <div className="space-y-6">
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-32 w-full" />
              </div>
            ) : (
              filteredJobs.length > 0 ? (
                <div className="space-y-6">
                  {filteredJobs.map((job: Job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold">No Jobs Found</h3>
                  <p className="text-slate-500 mt-2">
                    We couldn't find any jobs matching your criteria. Try adjusting your filters.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </main>
    </>
  );
}
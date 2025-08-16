import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { JobCard } from "@/components/job/job-card";
import { JobFilters } from "@/components/job/job-filters";
import { useJobs } from "@/lib/hooks";
import { Skeleton } from "@/components/ui/skeleton";
import { Briefcase, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/providers/auth-provider";

export default function JobsPage() {
  const { data: jobs, isLoading } = useJobs({ poll: true });
  const { session } = useAuth();
  const [filters, setFilters] = useState({
    search: "",
    location: "All Locations",
    type: "All Types",
  });

  const filteredJobs = jobs?.filter(job => {
    const searchLower = filters.search.toLowerCase();
    const searchMatch = filters.search === "" || 
                        job.title.toLowerCase().includes(searchLower) ||
                        job.description.toLowerCase().includes(searchLower) ||
                        (job.skills && job.skills.join(' ').toLowerCase().includes(searchLower));

    const locationMatch = filters.location === "All Locations" || job.location === filters.location;
    const typeMatch = filters.type === "All Types" || job.type === filters.type;
    
    return searchMatch && locationMatch && typeMatch;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Header />
      <main className="pt-20 md:pt-28">
        <section className="py-16 md:py-24 bg-white dark:bg-slate-800 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
              Find Your Next <span className="text-gradient">Opportunity</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Explore roles that match your expertise and career aspirations. Your future starts here.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-8 gap-4">
            <h2 className="text-3xl font-bold">
              Open Positions ({isLoading ? '...' : filteredJobs?.length ?? 0})
            </h2>
            {session && (
              <Button variant="outline" asChild>
                <Link to="/admin/dashboard">Admin Portal</Link>
              </Button>
            )}
          </div>

          <JobFilters onFiltersChange={setFilters} className="mb-8" />

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-64 rounded-2xl" />
              ))}
            </div>
          ) : filteredJobs && filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border-2 border-dashed rounded-2xl">
              <Search className="w-16 h-16 text-slate-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">No Matching Positions</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-md mx-auto">
                We couldn't find any jobs matching your criteria. Try adjusting your filters or check back later!
              </p>
            </div>
          )}
        </div>

        <section className="py-20 bg-slate-100 dark:bg-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Don't See a Fit?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
              We're always looking for talented individuals. Submit your resume to be considered for future opportunities.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact?type=candidate">Join Our Talent Network</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
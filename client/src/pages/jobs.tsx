import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { JobCard } from "@/components/job/job-card";
import { useJobs } from "@/lib/hooks";
import { Skeleton } from "@/components/ui/skeleton";
import { Briefcase, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const jobCategories = [
  "All",
  "Engineering",
  "Design",
  "Marketing",
  "Sales",
  "Customer Support",
  "Operations"
];

export default function JobsPage() {
  const { data: jobs, isLoading } = useJobs({ refetchInterval: 60000 }); // Poll every 1 minute
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredJobs = jobs?.filter(job => {
    const searchLower = searchQuery.toLowerCase();
    const searchMatch = searchQuery === "" || 
                        job.title.toLowerCase().includes(searchLower) ||
                        job.description.toLowerCase().includes(searchLower) ||
                        (job.skills && job.skills.join(' ').toLowerCase().includes(searchLower));

    // This is a placeholder for category filtering. 
    // It can be expanded once job categories are available in your data.
    const categoryMatch = activeCategory === "All" || 
                          (activeCategory === "Engineering" && job.industry === "Information Technology");

    return searchMatch && categoryMatch;
  });

  return (
    <>
      <div className="bg-white dark:bg-slate-900">
        {/* Header and Footer are now handled by RootLayout */}
        <main className="pt-20 md:pt-28">
          {/* Hero Section */}
          <section className="pt-16 md:pt-24 pb-16 md:pb-24 text-center bg-slate-50 dark:bg-slate-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                Find your dream job at <span className="text-gradient">QvalFocus</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                We are looking for passionate people to join our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
                <div className="relative flex-grow">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input 
                    placeholder="Search for jobs..."
                    className="pl-12 h-12 text-base"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button size="lg" className="h-12 bg-theme-orange hover:bg-theme-orange-dark">Search</Button>
              </div>
            </div>
          </section>

          {/* Jobs Listing Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Filters */}
              <aside className="lg:col-span-1">
                <h2 className="text-xl font-bold mb-6">Categories</h2>
                <ul className="space-y-2">
                  {jobCategories.map(category => (
                    <li key={category}>
                      <button
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                          "w-full text-left px-4 py-2 rounded-lg transition-colors text-slate-700 dark:text-slate-300",
                          activeCategory === category 
                            ? "bg-primary/10 text-primary font-semibold" 
                            : "hover:bg-slate-100 dark:hover:bg-slate-800"
                        )}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </aside>

              {/* Job Cards */}
              <div className="lg:col-span-3">
                {isLoading ? (
                  <div className="space-y-6">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <Skeleton key={i} className="h-24 rounded-lg" />
                    ))}
                  </div>
                ) : filteredJobs && filteredJobs.length > 0 ? (
                  <div className="space-y-6">
                    {filteredJobs.map((job) => (
                      <JobCard key={job.id} job={job} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20 border-2 border-dashed rounded-2xl">
                    <Briefcase className="w-16 h-16 text-slate-400 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-4">No Matching Positions</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-md mx-auto">
                      We couldn't find any jobs matching your criteria. Try a different search or category!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
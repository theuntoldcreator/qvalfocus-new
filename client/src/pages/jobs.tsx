import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { JobCard } from "@/components/job/job-card";
import { JobFilters } from "@/components/job/job-filters";
import { Skeleton } from "@/components/ui/skeleton";
import { useJobs } from "@/lib/hooks";
import { Briefcase, MapPin, Clock, Filter } from "lucide-react";

export default function JobsPage() {
  const [filters, setFilters] = useState({
    search: "",
    location: "All Locations",
    type: "All Types"
  });

  const { data: jobs, isLoading, error } = useJobs(filters);

  const handleFiltersChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
            }}
          >
            <div className="absolute inset-0 bg-slate-900/70"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                Find Your Next <span className="text-gradient">Career Opportunity</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto">
                Discover roles at innovative companies that match your skills, 
                ambitions, and career goals.
              </p>
            </div>
          </div>
        </section>

        {/* Jobs Listing */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-4">Available Positions</h2>
                <p className="text-slate-600 dark:text-slate-300">
                  {jobs ? `${jobs.length} positions found` : "Loading positions..."}
                </p>
              </div>
              
              <div className="mt-4 md:mt-0">
                <JobFilters onFiltersChange={handleFiltersChange} />
              </div>
            </div>

            {error && (
              <div className="text-center py-12">
                <div className="text-red-500 mb-4">Failed to load jobs</div>
                <Button onClick={() => window.location.reload()}>Try Again</Button>
              </div>
            )}

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 9 }).map((_, i) => (
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
                ))}
              </div>
            ) : jobs && jobs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <Briefcase className="w-16 h-16 text-slate-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">No positions found</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-md mx-auto">
                  No jobs match your current filters. Try adjusting your search criteria or check back later for new opportunities.
                </p>
                <Button onClick={() => setFilters({ search: "", location: "All Locations", type: "All Types" })}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Career Resources */}
        <section className="py-20 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Career Resources</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Tools and resources to help you succeed in your job search and career advancement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass dark:glass-dark rounded-2xl p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Resume Tips</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Expert advice on crafting resumes that get noticed by hiring managers and ATS systems.
                </p>
                <Button variant="outline">Coming Soon</Button>
              </div>

              <div className="glass dark:glass-dark rounded-2xl p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Interview Prep</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Comprehensive interview preparation guides for technical and behavioral interviews.
                </p>
                <Button variant="outline">Coming Soon</Button>
              </div>

              <div className="glass dark:glass-dark rounded-2xl p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Relocation Guide</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Resources for relocating to new cities, including visa information and cost of living data.
                </p>
                <Button variant="outline">Coming Soon</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Job Alerts CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Never Miss Your Dream Job
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Get personalized job alerts delivered to your inbox based on your skills and preferences.
            </p>
            <Button size="lg" variant="default" className="bg-white text-primary hover:bg-slate-200">
              Set Up Job Alerts
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
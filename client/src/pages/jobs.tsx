import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { JobCard } from "@/components/job/job-card";
import { useJobs } from "@/lib/hooks";
import { Skeleton } from "@/components/ui/skeleton";
import { Briefcase } from "lucide-react";
import { Link } from "wouter";
import { useAuth } from "@/providers/auth-provider";

export default function JobsPage() {
  const { data: jobs, isLoading } = useJobs({ poll: true });
  const { session } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Header />
      <main className="pt-20"> {/* Added pt-20 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-sans">
              Careers
            </h1>
            <Button variant="outline" asChild>
              {session ? (
                <Link href="/admin/dashboard">Admin Portal</Link>
              ) : (
                <Link href="/admin/login">Admin Login</Link>
              )}
            </Button>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-64 rounded-2xl" />
              ))}
            </div>
          ) : jobs && jobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border-2 border-dashed rounded-2xl">
              <Briefcase className="w-16 h-16 text-slate-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">No Open Positions</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-md mx-auto">
                We are not currently hiring, but please check back soon!
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
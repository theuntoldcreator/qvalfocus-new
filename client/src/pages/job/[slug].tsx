import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ApplyForm } from "@/components/job/apply-form";
import { JobDetails } from "@/components/job/job-details";
import { useJobBySlug } from "@/lib/hooks";
import { ArrowLeft } from "lucide-react";

export default function JobPage() {
  const { slug } = useParams();
  const { data: job, isLoading, error } = useJobBySlug(slug || "");

  if (error) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              The job you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/jobs">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Jobs
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Header />
      
      <main className="pt-20 md:pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-6">
            <Link to="/jobs">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Jobs
              </Button>
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <Skeleton className="h-12 w-3/4 mb-4" />
                <Skeleton className="h-6 w-1/2 mb-8" />
                <div className="space-y-4 mb-8">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
                <Skeleton className="h-64 w-full" />
              </div>
              <div>
                <Skeleton className="h-96 w-full" />
              </div>
            </div>
          ) : job ? (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <JobDetails job={job} />
              </div>
              <div className="lg:col-span-2">
                <div className="sticky top-28">
                  <ApplyForm job={job} />
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {/* Similar Jobs */}
        <section className="py-20 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center">Similar Opportunities</h2>
            <div className="text-center">
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                Discover more opportunities that match your skills and interests.
              </p>
              <Button asChild>
                <Link to="/jobs">View All Jobs</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
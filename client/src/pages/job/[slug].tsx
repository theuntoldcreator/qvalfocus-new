import { useParams, Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { ApplyForm } from "@/components/job/apply-form";
import { JobDetails } from "@/components/job/job-details";
import { useJobBySlug } from "@/lib/hooks";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Building } from "lucide-react";

export default function JobPage() {
  const { slug } = useParams();
  const { data: job, isLoading, error } = useJobBySlug(slug || "");

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-4">
        <div>
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            The job you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/jobs" className="text-primary font-semibold">
            &larr; View all open positions
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div
        className="h-40 w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      <main className="-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {isLoading ? (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3"><Skeleton className="h-96 w-full" /></div>
              <div className="lg:col-span-2"><Skeleton className="h-96 w-full" /></div>
            </div>
          ) : job ? (
            <>
              <div className="flex items-start mb-8">
                <Avatar className="w-20 h-20 rounded-xl mr-6 border-4 border-white shadow-md">
                  {job.company_logo ? (
                    <AvatarImage src={job.company_logo} alt={`${job.company} logo`} />
                  ) : (
                    <AvatarFallback className="bg-gradient-to-r from-primary to-accent text-white text-2xl font-bold">
                      {job.company.charAt(0).toUpperCase() || <Building />}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div>
                  <h1 className="text-3xl font-bold">{job.company}</h1>
                  <p className="text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
                    We are a forward-thinking company dedicated to innovation and excellence. Join our team to make a difference.
                  </p>
                  <Link to="/jobs" className="text-primary font-semibold mt-2 inline-block">
                    View all open positions
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                <div className="lg:col-span-3">
                  <JobDetails job={job} />
                </div>
                <div className="lg:col-span-2">
                  <div className="sticky top-8">
                    <ApplyForm job={job} />
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </main>
    </div>
  );
}
import { useParams, Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { ApplyForm } from "@/components/job/apply-form";
import { JobDetails } from "@/components/job/job-details";
import { useJobBySlug } from "@/lib/hooks";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Job details</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {isLoading ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-64 w-full" />
              <Skeleton className="h-48 w-full" />
            </div>
            <div className="lg:col-span-1">
              <Skeleton className="h-96 w-full" />
            </div>
          </div>
        ) : job ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <JobDetails job={job} />
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <ApplyForm job={job} />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
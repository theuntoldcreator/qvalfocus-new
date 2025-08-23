import { useParams } from "react-router-dom";
import { JobDetails } from "@/components/job/job-details";
import { useJob } from "@/lib/hooks";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Skeleton } from "@/components/ui/skeleton";
import { ApplyForm } from "@/components/forms/apply-form";

export default function JobPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: job, isLoading } = useJob(slug || "");

  return (
    <div className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/jobs">Jobs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{isLoading ? "Loading..." : job?.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {isLoading ? (
              <Skeleton className="h-96 w-full" />
            ) : job ? (
              <JobDetails job={job} />
            ) : (
              <p>Job not found.</p>
            )}
          </div>
          <aside className="lg:col-span-1">
            {isLoading ? (
              <Skeleton className="h-96 w-full" />
            ) : job ? (
              <ApplyForm job={job} />
            ) : null}
          </aside>
        </div>
      </main>
    </div>
  );
}
import { JobForm } from "@/components/admin/job-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useJobBySlug } from "@/lib/hooks";
import { Skeleton } from "@/components/ui/skeleton";

export default function EditJobPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: job, isLoading } = useJobBySlug(slug || "");

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Edit Job</h1>
        <Button asChild variant="outline">
          <Link to="/admin/dashboard/jobs">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Jobs
          </Link>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Job Details</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-10 w-24" />
            </div>
          ) : job ? (
            <JobForm job={job} />
          ) : (
            <p>Job not found.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
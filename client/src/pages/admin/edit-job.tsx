import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JobForm } from "@/components/admin/job-form";
import { ArrowLeft } from "lucide-react";
import { useJob } from "@/lib/hooks";
import { Skeleton } from "@/components/ui/skeleton";

export default function EditJobPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: job, isLoading } = useJob(slug || "");

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <Link to="/admin/dashboard/jobs" className="flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Jobs Management
      </Link>
      <Card>
        <CardHeader>
          <CardTitle>Edit Job</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <Skeleton className="h-96 w-full" />
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
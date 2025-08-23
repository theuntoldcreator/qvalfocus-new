import { useParams, Link } from "react-router-dom";
import { useJob, useApplications } from "@/lib/hooks";
import { ApplicantCard } from "@/components/admin/applicant-card";
import { ApplicantDetails } from "@/components/admin/applicant-details";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import { type Application } from "@shared/schema";
import { ArrowLeft } from "lucide-react";

type ApplicationWithJob = Application & { jobs: { title: string; slug: string } | null };

export default function JobApplicationsPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: job, isLoading: isLoadingJob } = useJob(slug || "");
  const { data: applications, isLoading: isLoadingApps } = useApplications(job?.id);
  const [selectedApplicant, setSelectedApplicant] = useState<ApplicationWithJob | null>(null);

  if (isLoadingJob || isLoadingApps) {
    return <Skeleton className="h-screen w-full" />;
  }

  const applicationsWithJobTitle = (applications || []).map(app => ({
    ...app,
    jobs: job ? { title: job.title, slug: job.slug } : null
  }));

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <Link to="/admin/dashboard/jobs" className="flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Jobs Management
      </Link>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Applications for {job?.title}</CardTitle>
        </CardHeader>
      </Card>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Applicants ({applicationsWithJobTitle.length})</CardTitle>
            </CardHeader>
            <CardContent>
              {applicationsWithJobTitle.length > 0 ? (
                <div className="space-y-4">
                  {applicationsWithJobTitle.map(app => (
                    <ApplicantCard
                      key={app.id}
                      application={app}
                      onSelect={() => setSelectedApplicant(app)}
                      isSelected={selectedApplicant?.id === app.id}
                    />
                  ))}
                </div>
              ) : (
                <p>No applications for this job yet.</p>
              )}
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-2">
          <ApplicantDetails applicant={selectedApplicant} />
        </div>
      </div>
    </div>
  );
}
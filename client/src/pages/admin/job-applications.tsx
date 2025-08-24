import { useParams, Link } from "react-router-dom";
import { useJobBySlug, useApplications } from "@/lib/hooks";
import { ApplicantCard } from "@/components/admin/applicant-card";
import { ApplicantDetail } from "@/components/admin/applicant-detail";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Search, SlidersHorizontal, FileText } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import type { Application } from "@shared/schema";

type ApplicationWithJobDetails = Application & { jobs: { title: string; slug: string } | null };

export default function JobApplicationsPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: job, isLoading: isLoadingJob } = useJobBySlug(slug || "");
  const { data: applications, isLoading: isLoadingApps } = useApplications(job?.id || "");
  const [selectedApplicant, setSelectedApplicant] = useState<ApplicationWithJobDetails | null>(null);

  const isLoading = isLoadingJob || isLoadingApps;

  const applicationsWithJobTitle: ApplicationWithJobDetails[] = applications?.map(app => ({
    ...app,
    jobs: job ? { title: job.title, slug: job.slug } : null
  })) || [];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="icon">
            <Link to="/admin/dashboard/jobs">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-xl font-bold">
            {isLoadingJob ? <Skeleton className="h-7 w-48" /> : `${job?.title} Applications`}
          </h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-180px)]"> {/* Adjust height as needed */}
        {/* Left Column: Tabs, Search, and Applicant List */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <Tabs defaultValue="all" className="flex-grow flex flex-col">
            <TabsList className="bg-white p-0 border-b border-slate-200 rounded-none justify-start">
              <TabsTrigger value="all" className="data-[state=active]:bg-theme-gray-light data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
                All Proposals ({applications?.length ?? 0})
              </TabsTrigger>
              <TabsTrigger value="shortlisted" className="data-[state=active]:bg-theme-gray-light data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
                Shortlisted
              </TabsTrigger>
              <TabsTrigger value="messaged" className="data-[state=active]:bg-theme-gray-light data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
                Messaged
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4 flex-grow flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Search applications..."
                    className="pl-10 bg-white border-slate-200"
                  />
                </div>
                <Button variant="outline" className="border-slate-200 bg-white hover:bg-slate-50">
                  <SlidersHorizontal className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="flex-grow overflow-y-auto pr-2">
                {isLoading ? (
                  <div className="space-y-4">
                    <Skeleton className="h-48 w-full bg-slate-100" />
                    <Skeleton className="h-48 w-full bg-slate-100" />
                    <Skeleton className="h-48 w-full bg-slate-100" />
                  </div>
                ) : applicationsWithJobTitle.length > 0 ? (
                  <div className="space-y-4">
                    {applicationsWithJobTitle.map(app => (
                      <ApplicantCard 
                        key={app.id} 
                        application={app} 
                        onSelect={setSelectedApplicant}
                        isSelected={selectedApplicant?.id === app.id}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-semibold">No applications yet</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Candidates who apply for this job will appear here.
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Column: Applicant Detail */}
        <div className="w-full lg:w-1/2 flex-shrink-0">
          {selectedApplicant ? (
            <ApplicantDetail application={selectedApplicant} onClose={() => setSelectedApplicant(null)} />
          ) : (
            <div className="flex items-center justify-center h-full bg-white rounded-lg shadow-sm border text-muted-foreground">
              Select an applicant from the list to view details.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
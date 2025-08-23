import { useParams, Link } from "react-router-dom";
import { useJobBySlug, useApplications } from "@/lib/hooks";
import { ApplicantCard } from "@/components/admin/applicant-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Search, SlidersHorizontal } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function JobApplicationsPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: job, isLoading: isLoadingJob } = useJobBySlug(slug || "");
  const { data: applications, isLoading: isLoadingApps } = useApplications(job?.id || "");

  const isLoading = isLoadingJob || isLoadingApps;

  return (
    <div className="bg-slate-900 text-white min-h-screen p-4 sm:p-6 lg:p-8">
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

      {/* Tabs and Search */}
      <div className="mb-6">
        <Tabs defaultValue="all">
          <TabsList className="bg-slate-900 p-0 border-b border-slate-700 rounded-none">
            <TabsTrigger value="all" className="data-[state=active]:bg-slate-800 data-[state=active]:text-white data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-green-500">
              All Proposals ({applications?.length ?? 0})
            </TabsTrigger>
            <TabsTrigger value="shortlisted" className="data-[state=active]:bg-slate-800 data-[state=active]:text-white data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-green-500">
              Shortlisted
            </TabsTrigger>
            <TabsTrigger value="messaged" className="data-[state=active]:bg-slate-800 data-[state=active]:text-white data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-green-500">
              Messaged
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input 
                  placeholder="Search applications..."
                  className="pl-10 bg-slate-800 border-slate-700 text-white"
                />
              </div>
              <Button variant="outline" className="border-slate-700 bg-slate-800 hover:bg-slate-700">
                <SlidersHorizontal className="h-5 w-5" />
              </Button>
            </div>
            
            {isLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-48 w-full bg-slate-800" />
                <Skeleton className="h-48 w-full bg-slate-800" />
                <Skeleton className="h-48 w-full bg-slate-800" />
              </div>
            ) : (
              <div className="space-y-4">
                {applications?.map(app => (
                  <ApplicantCard key={app.id} application={{...app, jobs: { title: job?.title || '' }}} />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
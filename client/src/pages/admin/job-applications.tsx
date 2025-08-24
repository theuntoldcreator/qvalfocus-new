import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { AdminLayout } from "@/components/layout/admin-layout";
import { ApplicantList } from "@/components/admin/applicant-list";
import { ApplicantDetails } from "@/components/admin/applicant-details";
import { toast } from "sonner";
import { Database } from "@/types/supabase";
import { PageHeader } from "@/components/admin/page-header";

export type ApplicationWithJob = Database["public"]["Tables"]["applications"]["Row"] & {
  jobs: {
    title: string;
    slug: string;
  } | null;
};

export default function JobApplicationsPage() {
  const [applications, setApplications] = useState<ApplicationWithJob[]>([]);
  const [selectedApplicant, setSelectedApplicant] = useState<ApplicationWithJob | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApplications = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("applications")
        .select("*, jobs(title, slug)")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching applications:", error);
        toast.error("Failed to fetch job applications.");
        setError("Could not load applications. Please try again later.");
      } else if (data) {
        const typedData = data as ApplicationWithJob[];
        setApplications(typedData);
        if (typedData.length > 0) {
          setSelectedApplicant(typedData[0]);
        }
      }
      setLoading(false);
    };

    fetchApplications();
  }, []);

  const handleSelectApplicant = (application: ApplicationWithJob) => {
    setSelectedApplicant(application);
  };

  return (
    <AdminLayout>
      <PageHeader title="Job Applications" description={`Manage and review all ${applications.length} job applications.`} />
      <div className="flex h-[calc(100vh-10rem)] border rounded-lg mt-4">
        <aside className="w-full md:w-1/3 border-r overflow-y-auto">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">Applicants</h2>
          </div>
          {loading && <p className="p-4 text-muted-foreground">Loading...</p>}
          {error && <p className="p-4 text-destructive">{error}</p>}
          {!loading && !error && (
            <ApplicantList
              applications={applications}
              onSelect={handleSelectApplicant}
              selectedApplicantId={selectedApplicant?.id}
            />
          )}
        </aside>
        <main className="hidden md:block w-2/3 overflow-y-auto">
          {selectedApplicant ? (
            <ApplicantDetails application={selectedApplicant} />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-muted-foreground">
                {!loading && "Select an applicant to view details."}
              </p>
            </div>
          )}
        </main>
      </div>
    </AdminLayout>
  );
}
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { toast } from "sonner";
import { ApplicationCard } from "../../components/admin/ApplicationCard";
import { ApplicationDetail } from "../../components/admin/ApplicationDetail";
import { AdminLayout } from "../../components/admin/Layout";
import { Database } from "../../types/supabase";
import { Skeleton } from "../../components/ui/skeleton";

type ApplicationWithJob = Database['public']['Tables']['applications']['Row'] & {
  jobs: {
    title: string;
  } | null;
};

export default function JobApplicationsPage() {
  const [applications, setApplications] = useState<ApplicationWithJob[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedApplicant, setSelectedApplicant] = useState<ApplicationWithJob | null>(null);

  useEffect(() => {
    async function fetchApplications() {
      setLoading(true);
      const { data, error } = await supabase
        .from("applications")
        .select("*, jobs(title)")
        .order("created_at", { ascending: false });

      if (error) {
        toast.error("Failed to fetch applications");
        console.error(error);
        setApplications([]);
      } else {
        setApplications(data as ApplicationWithJob[]);
        if (data.length > 0) {
          setSelectedApplicant(data[0]);
        }
      }
      setLoading(false);
    }
    fetchApplications();
  }, []);

  const handleSelectApplicant = (applicant: ApplicationWithJob) => {
    setSelectedApplicant(applicant);
  };

  return (
    <AdminLayout>
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 h-[calc(100vh-8rem)]">
        <div className="border-r pr-8 h-full overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4 px-4">Applicants ({applications.length})</h2>
          <div className="space-y-2">
            {loading ? (
              Array.from({ length: 5 }).map((_, i) => <Skeleton key={i} className="h-24 w-full" />)
            ) : (
              applications.map((app) => (
                <ApplicationCard
                  key={app.id}
                  application={app}
                  onSelect={handleSelectApplicant}
                  isSelected={selectedApplicant?.id === app.id}
                />
              ))
            )}
          </div>
        </div>
        <div className="h-full overflow-y-auto">
          {loading && !selectedApplicant ? (
            <Skeleton className="h-full w-full" />
          ) : selectedApplicant ? (
            <ApplicationDetail application={selectedApplicant} />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-slate-500">Select an applicant to view details.</p>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
import { useApplications, useDeleteApplication } from "@/lib/hooks";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";

export function ApplicationList({ jobId }: { jobId: string }) {
  const { data: applications, isLoading } = useApplications(jobId);
  const deleteApplication = useDeleteApplication();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const handleDelete = (id: string) => {
    deleteApplication.mutate(id, {
        onSuccess: () => {
            toast({ title: "Application deleted" });
            queryClient.invalidateQueries({ queryKey: ['applications', 'job', jobId] });
        },
        onError: (err) => toast({ title: "Error", description: err.message, variant: "destructive" })
    });
  };

  if (isLoading) return <p>Loading applications...</p>;
  if (!applications || applications.length === 0) return <p>No applications yet.</p>;

  return (
    <ul className="space-y-4">
      {applications.map((app) => (
        <li key={app.id} className="flex justify-between items-center p-4 border rounded-lg">
          <div>
            <p className="font-semibold">{app.first_name} {app.last_name}</p>
            <p className="text-sm text-slate-500">{app.email}</p>
          </div>
          <div className="space-x-2">
            {app.resume_url && (
              <Button asChild variant="outline" size="sm">
                <a href={app.resume_url} target="_blank" rel="noopener noreferrer">View Resume</a>
              </Button>
            )}
            <Button variant="destructive" size="sm" onClick={() => handleDelete(app.id)}>
              Delete
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}
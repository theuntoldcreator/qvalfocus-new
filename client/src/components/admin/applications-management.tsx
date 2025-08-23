import { useAllApplications, useDeleteApplication } from "@/lib/hooks";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";
import { type Application } from "@shared/schema";

export function ApplicationsManagement() {
  const { data: applications, isLoading } = useAllApplications();
  const { toast } = useToast();
  const deleteApplicationMutation = useDeleteApplication();

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this application?")) {
      deleteApplicationMutation.mutate(id, {
        onSuccess: () => {
          toast({ title: "Application deleted successfully!" });
        },
        onError: (error: Error) => {
          toast({
            title: "Error deleting application",
            description: error.message,
            variant: "destructive",
          });
        },
      });
    }
  };

  if (isLoading) {
    return <Skeleton className="h-96 w-full" />;
  }

  if (!applications) {
    return <p>No applications found.</p>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Applications</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Applicant</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Job</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.map((app: Application & { jobs: { title: string } | null }) => (
              <TableRow key={app.id}>
                <TableCell>{app.first_name} {app.last_name}</TableCell>
                <TableCell>{app.email}</TableCell>
                <TableCell>{app.jobs?.title || 'N/A'}</TableCell>
                <TableCell>{new Date(app.created_at).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Button variant="destructive" size="icon" onClick={() => handleDelete(app.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
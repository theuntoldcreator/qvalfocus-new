import { useAllApplications, useDeleteApplication } from "@/lib/hooks";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash2, FileText } from "lucide-react";

export function ApplicationsManagement() {
  const { data: applications, isLoading } = useAllApplications();
  const deleteApplication = useDeleteApplication();
  const { toast } = useToast();

  const handleDelete = (id: string) => {
    deleteApplication.mutate(id, {
      onSuccess: () => {
        toast({ title: "Application deleted successfully!" });
      },
      onError: (error) => {
        toast({
          title: "Error deleting application",
          description: error.message,
          variant: "destructive",
        });
      },
    });
  };

  if (isLoading) return <p>Loading applications...</p>;

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>All Job Applications</CardTitle>
        </CardHeader>
        <CardContent>
          {applications && applications.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Applicant</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Job Title</TableHead>
                  <TableHead>Applied At</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applications.map((app) => (
                  <TableRow key={app.id}>
                    <TableCell className="font-medium">{app.first_name} {app.last_name}</TableCell>
                    <TableCell>{app.email}</TableCell>
                    <TableCell>
                      {app.jobs ? (
                        <Link to={`/jobs/${app.jobs.slug}`} className="hover:underline text-primary">
                          {app.jobs.title}
                        </Link>
                      ) : (
                        'N/A'
                      )}
                    </TableCell>
                    <TableCell>{format(new Date(app.created_at), 'PPP')}</TableCell>
                    <TableCell className="text-right space-x-2">
                      {app.resume_url && (
                        <Button asChild variant="outline" size="sm">
                          <a href={app.resume_url} target="_blank" rel="noopener noreferrer">View Resume</a>
                        </Button>
                      )}
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="destructive" size="sm">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will permanently delete the application from the database.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDelete(app.id)}>
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-20">
              <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-semibold">No applications found</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                When candidates apply for jobs, their applications will appear here.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
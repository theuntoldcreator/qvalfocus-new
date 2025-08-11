import { useJobs, useDeleteJob } from "@/lib/hooks";
import { ApplicationList } from "@/components/admin/application-list";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2, Eye, PlusCircle } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";

export function JobsManagement() {
  const { data: jobs, isLoading: isLoadingJobs } = useJobs();
  const deleteJob = useDeleteJob();
  const { toast } = useToast();

  const handleDelete = (id: string) => {
    deleteJob.mutate(id, {
      onSuccess: () => toast({ title: "Job deleted successfully!" }),
      onError: (err) => toast({ title: "Error", description: err.message, variant: "destructive" }),
    });
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Manage Job Listings</CardTitle>
          <Button asChild>
            <Link href="/jobs/new"> {/* Relative path */}
              <PlusCircle className="mr-2 h-4 w-4" />
              Post a New Job
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          {isLoadingJobs ? <p>Loading jobs...</p> : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobs?.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell className="font-medium">{job.title}</TableCell>
                    <TableCell>{job.location}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="icon"><Eye className="h-4 w-4" /></Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[625px]">
                          <DialogHeader>
                            <DialogTitle>Applications for {job.title}</DialogTitle>
                          </DialogHeader>
                          <ApplicationList jobId={job.id} />
                        </DialogContent>
                      </Dialog>
                      <Button variant="destructive" size="icon" onClick={() => handleDelete(job.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
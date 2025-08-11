import { useJobs, useDeleteJob } from "@/lib/hooks";
import { JobForm } from "@/components/admin/job-form";
import { ApplicationList } from "@/components/admin/application-list";
import type { Job } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2, Eye } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

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
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader><CardTitle>Post a New Job</CardTitle></CardHeader>
            <CardContent><JobForm /></CardContent>
          </Card>
        </div>
        <div className="lg:col-span-3">
          <Card>
            <CardHeader><CardTitle>Manage Job Listings</CardTitle></CardHeader>
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
      </div>
    </div>
  );
}
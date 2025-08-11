import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { useJobs, useDeleteJob, useContacts } from "@/lib/hooks";
import { JobForm } from "@/components/admin/job-form";
import { ApplicationList } from "@/components/admin/application-list";
import { useState } from "react";
import type { Job, Contact } from "@shared/schema";
import { supabase } from "@/integrations/supabase/client";
import { useLocation } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, Mail, Trash2, Eye } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function AdminDashboardPage() {
  const { data: jobs, isLoading: isLoadingJobs } = useJobs();
  const { data: contacts, isLoading: isLoadingContacts } = useContacts();
  const deleteJob = useDeleteJob();
  const [_, navigate] = useLocation();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
      <Header />
      <main className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <Button variant="destructive" onClick={handleSignOut}>Sign Out</Button>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-3 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Jobs</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{isLoadingJobs ? '...' : jobs?.length ?? 0}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Contact Submissions</CardTitle>
                <Mail className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{isLoadingContacts ? '...' : contacts?.length ?? 0}</div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="jobs">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="jobs">Job Management</TabsTrigger>
              <TabsTrigger value="contacts">Contact Submissions</TabsTrigger>
            </TabsList>
            <TabsContent value="jobs">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-6">
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
                                  <Button variant="destructive" size="icon" onClick={() => deleteJob.mutate(job.id)}>
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
            </TabsContent>
            <TabsContent value="contacts">
              <Card className="mt-6">
                <CardHeader><CardTitle>Contact Submissions</CardTitle></CardHeader>
                <CardContent>
                  {isLoadingContacts ? <p>Loading contacts...</p> : (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {contacts?.map((contact) => (
                          <TableRow key={contact.id}>
                            <TableCell>{contact.firstName} {contact.lastName}</TableCell>
                            <TableCell>{contact.email}</TableCell>
                            <TableCell>{contact.type}</TableCell>
                            <TableCell>{new Date(contact.createdAt).toLocaleDateString()}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
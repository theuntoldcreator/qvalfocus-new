import { useJobs, useContacts, useAllApplications, useNewsletterSubscriptions } from "@/lib/hooks";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase, Mail, FileText, Newspaper } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

export function DashboardOverview() {
  const { data: jobs, isLoading: isLoadingJobs } = useJobs();
  const { data: contacts, isLoading: isLoadingContacts } = useContacts();
  const { data: applications, isLoading: isLoadingApps } = useAllApplications();
  const { data: subscriptions, isLoading: isLoadingSubs } = useNewsletterSubscriptions();

  const recentApplications = applications?.slice(0, 5) || [];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      {/* Bento Grid - Top Row */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Jobs</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{isLoadingJobs ? <Skeleton className="h-8 w-16" /> : jobs?.length ?? 0}</div>
            <p className="text-xs text-muted-foreground">Live job listings</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{isLoadingApps ? <Skeleton className="h-8 w-16" /> : applications?.length ?? 0}</div>
            <p className="text-xs text-muted-foreground">Received from candidates</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contact Submissions</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{isLoadingContacts ? <Skeleton className="h-8 w-16" /> : contacts?.length ?? 0}</div>
            <p className="text-xs text-muted-foreground">From clients and candidates</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Newsletter Subscribers</CardTitle>
            <Newspaper className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{isLoadingSubs ? <Skeleton className="h-8 w-16" /> : subscriptions?.length ?? 0}</div>
            <p className="text-xs text-muted-foreground">Monthly newsletter audience</p>
          </CardContent>
        </Card>
      </div>

      {/* Bento Grid - Bottom Row */}
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Applications</CardTitle>
            <CardDescription>The latest 5 applications submitted by candidates.</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoadingApps ? (
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => <Skeleton key={i} className="h-10 w-full" />)}
              </div>
            ) : recentApplications.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Applicant</TableHead>
                    <TableHead>Job Title</TableHead>
                    <TableHead>Applied At</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentApplications.map((app) => (
                    <TableRow key={app.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>{app.first_name[0]}{app.last_name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{app.first_name} {app.last_name}</div>
                            <div className="text-sm text-muted-foreground">{app.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {app.jobs ? (
                          <Link to={`/jobs/${app.jobs.slug}`} className="hover:underline text-primary">
                            {app.jobs.title}
                          </Link>
                        ) : 'N/A'}
                      </TableCell>
                      <TableCell>{format(new Date(app.created_at), 'PPP')}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="text-center py-10">
                <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">No applications yet</h3>
                <p className="mt-1 text-sm text-muted-foreground">New applications will appear here.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
import { useJobs, useContacts, useAllApplications, useNewsletterSubscriptions, useBlogs } from "@/lib/hooks";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Briefcase, Users, FileText, Mail, Newspaper } from "lucide-react";
import { type Application, type Contact, type Blog } from "@shared/schema";

export function DashboardOverview() {
  const { data: jobs } = useJobs();
  const { data: applications } = useAllApplications();
  const { data: contacts } = useContacts();
  const { data: subscriptions } = useNewsletterSubscriptions();
  const { data: blogs } = useBlogs();

  const totalJobs = jobs?.length || 0;
  const totalApplications = applications?.length || 0;
  const totalContacts = contacts?.length || 0;
  const totalSubscriptions = subscriptions?.length || 0;

  const recentApplications = applications?.slice(0, 5) || [];
  const pendingContacts = contacts?.filter((c: Contact) => c.message && c.message.length > 0).slice(0, 5) || [];
  const activeBlogPosts = blogs?.filter((blog: Blog) => blog.status === 'published').length || 0;

  const stats = [
    { title: "Total Jobs", value: totalJobs, icon: Briefcase, link: "/admin/dashboard/jobs" },
    { title: "Total Applications", value: totalApplications, icon: FileText, link: "/admin/dashboard/applications" },
    { title: "Contact Messages", value: totalContacts, icon: Users, link: "/admin/dashboard/contacts" },
    { title: "Newsletter Subscribers", value: totalSubscriptions, icon: Mail, link: "/admin/dashboard/newsletter" },
    { title: "Published Blogs", value: activeBlogPosts, icon: Newspaper, link: "/admin/dashboard/blog" },
  ];

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <Link to={stat.link} className="hover:underline">View all</Link>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Applications</CardTitle>
            <CardDescription>The 5 most recent job applications.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Applicant</TableHead>
                  <TableHead>Job</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentApplications.map((app: Application & { jobs: { title: string } | null }) => (
                  <TableRow key={app.id}>
                    <TableCell>{app.first_name} {app.last_name}</TableCell>
                    <TableCell>{app.jobs?.title || 'N/A'}</TableCell>
                    <TableCell>{new Date(app.created_at).toLocaleDateString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending Contacts</CardTitle>
            <CardDescription>Recent messages from the contact form.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Type</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pendingContacts.map((contact: Contact) => (
                  <TableRow key={contact.id}>
                    <TableCell>{contact.first_name} {contact.last_name}</TableCell>
                    <TableCell>{contact.email}</TableCell>
                    <TableCell><Badge>{contact.type}</Badge></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
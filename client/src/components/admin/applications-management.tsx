import { useAllApplications } from "@/lib/hooks";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function ApplicationsManagement() {
  const { data: applications, isLoading } = useAllApplications();

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
                    <TableCell className="text-right">
                      {app.resume_url && (
                        <Button asChild variant="outline" size="sm">
                          <a href={app.resume_url} target="_blank" rel="noopener noreferrer">View Resume</a>
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p>No applications submitted yet.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
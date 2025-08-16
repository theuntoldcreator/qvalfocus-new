import { useContacts } from "@/lib/hooks";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format } from "date-fns";
import { Mail } from "lucide-react";

export function ContactsManagement() {
  const { data: contacts, isLoading } = useContacts();

  if (isLoading) return <p>Loading contacts...</p>;

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Contact Submissions</CardTitle>
        </CardHeader>
        <CardContent>
          {contacts && contacts.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Company/Role</TableHead>
                  <TableHead>Submitted At</TableHead>
                  <TableHead>Message</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contacts.map((contact) => (
                  <TableRow key={contact.id}>
                    <TableCell className="font-medium capitalize">{contact.type}</TableCell>
                    <TableCell>{contact.first_name} {contact.last_name}</TableCell>
                    <TableCell>{contact.email}</TableCell>
                    <TableCell>
                      {contact.type === 'client' ? contact.company : contact.current_role}
                    </TableCell>
                    <TableCell>{format(new Date(contact.created_at), 'PPP')}</TableCell>
                    <TableCell className="max-w-[200px] truncate">{contact.message}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-20">
              <Mail className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-semibold">No contact submissions</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Submissions from the contact form will appear here.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
import { useContacts, useDeleteContact } from "@/lib/hooks";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
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
import { Mail, Trash2 } from "lucide-react";

export function ContactsManagement() {
  const { data: contacts, isLoading } = useContacts();
  const deleteContact = useDeleteContact();
  const { toast } = useToast();

  const handleDelete = (id: string) => {
    deleteContact.mutate(id, {
      onSuccess: () => toast({ title: "Contact deleted successfully!" }),
      onError: (error) => toast({ title: "Error deleting contact", description: error.message, variant: "destructive" }),
    });
  };

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
                  <TableHead className="text-right">Actions</TableHead>
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
                    <TableCell className="text-right">
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="destructive" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This will permanently delete the contact submission.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDelete(contact.id)}>
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
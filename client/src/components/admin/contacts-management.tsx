import { useState } from "react";
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
import { Mail, Trash2, Eye } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import type { Contact } from "@shared/schema";

// New component for Contact Detail
function ContactDetail({ contact, onClose }: { contact: Contact; onClose: () => void }) {
  if (!contact) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        Select a contact to view details.
      </div>
    );
  }

  const handleReply = () => {
    window.location.href = `mailto:${contact.email}?subject=Re: ${contact.message?.split('\n')[0] || 'Your Inquiry'}`;
  };

  return (
    <div className="flex flex-col h-full bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">Contact Details</h3>
        <Button variant="ghost" size="sm" onClick={onClose}>
          Close
        </Button>
      </div>
      <ScrollArea className="flex-grow pr-4">
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground">From</p>
            <p className="font-semibold">{contact.first_name} {contact.last_name} &lt;{contact.email}&gt;</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Type</p>
            <p className="capitalize">{contact.type}</p>
          </div>
          {contact.company && (
            <div>
              <p className="text-sm font-medium text-muted-foreground">Company</p>
              <p>{contact.company}</p>
            </div>
          )}
          {contact.current_role && (
            <div>
              <p className="text-sm font-medium text-muted-foreground">Current Role</p>
              <p>{contact.current_role}</p>
            </div>
          )}
          {contact.hiring_need && (
            <div>
              <p className="text-sm font-medium text-muted-foreground">Hiring Need</p>
              <p>{contact.hiring_need}</p>
            </div>
          )}
          {contact.experience_level && (
            <div>
              <p className="text-sm font-medium text-muted-foreground">Experience Level</p>
              <p>{contact.experience_level}</p>
            </div>
          )}
          {contact.resume_url && (
            <div>
              <p className="text-sm font-medium text-muted-foreground">Resume</p>
              <a href={contact.resume_url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                View Resume
              </a>
            </div>
          )}
          <div>
            <p className="text-sm font-medium text-muted-foreground">Submitted At</p>
            <p>{format(new Date(contact.created_at), 'PPP p')}</p>
          </div>
          <Separator />
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-2">Message</p>
            <p className="whitespace-pre-wrap">{contact.message}</p>
          </div>
        </div>
      </ScrollArea>
      <div className="mt-6 flex justify-end gap-2">
        <Button onClick={handleReply}>Reply</Button>
        <Button variant="outline" disabled>Mark as Resolved</Button> {/* Placeholder */}
      </div>
    </div>
  );
}

export function ContactsManagement() {
  const { data: contacts, isLoading } = useContacts();
  const deleteContact = useDeleteContact();
  const { toast } = useToast();
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  const handleDelete = (id: string) => {
    deleteContact.mutate(id, {
      onSuccess: () => {
        toast({ title: "Contact deleted successfully!" });
        if (selectedContact?.id === id) {
          setSelectedContact(null);
        }
      },
      onError: (error) => toast({ title: "Error deleting contact", description: error.message, variant: "destructive" }),
    });
  };

  if (isLoading) return (
    <div className="space-y-8">
      <Card className="bg-white shadow-sm">
        <CardHeader><CardTitle>Contact Submissions</CardTitle></CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => <Skeleton key={i} className="h-12 w-full" />)}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="space-y-8">
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle>Contact Submissions</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col lg:flex-row h-[70vh]">
          <div className="w-full lg:w-1/2 border-r lg:pr-4 overflow-y-auto">
            {contacts && contacts.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Sender</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Subject/Preview</TableHead>
                    <TableHead>Received At</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contacts.map((contact) => (
                    <TableRow 
                      key={contact.id} 
                      onClick={() => setSelectedContact(contact)}
                      className={selectedContact?.id === contact.id ? "bg-theme-gray-light/50" : ""}
                    >
                      <TableCell className="font-medium">{contact.first_name} {contact.last_name}</TableCell>
                      <TableCell className="capitalize">{contact.type}</TableCell>
                      <TableCell className="max-w-[150px] truncate text-sm text-muted-foreground">
                        {contact.message?.split('\n')[0] || 'No subject'}
                      </TableCell>
                      <TableCell>{format(new Date(contact.created_at), 'MMM d, yyyy')}</TableCell>
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
          </div>
          <div className="w-full lg:w-1/2 lg:pl-4 mt-8 lg:mt-0">
            {selectedContact ? (
              <ContactDetail contact={selectedContact} onClose={() => setSelectedContact(null)} />
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                Select a contact from the list to view details.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
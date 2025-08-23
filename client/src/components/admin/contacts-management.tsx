import { useState } from "react";
import { useContacts, useDeleteContact } from "@/lib/hooks";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2, Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";
import { type Contact } from "@shared/schema";

export function ContactsManagement() {
  const { data: contacts, isLoading } = useContacts();
  const { toast } = useToast();
  const deleteContactMutation = useDeleteContact();
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this contact message?")) {
      deleteContactMutation.mutate(id, {
        onSuccess: () => {
          toast({ title: "Contact deleted successfully!" });
        },
        onError: (error: Error) => toast({ title: "Error deleting contact", description: error.message, variant: "destructive" }),
      });
    }
  };

  if (isLoading) {
    return <Skeleton className="h-96 w-full" />;
  }

  if (!contacts) {
    return <p>No contacts found.</p>;
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Contact Messages</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((contact: Contact) => (
                <TableRow key={contact.id}>
                  <TableCell>{contact.first_name} {contact.last_name}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.type}</TableCell>
                  <TableCell>{new Date(contact.created_at).toLocaleDateString()}</TableCell>
                  <TableCell className="space-x-2">
                    <DialogTrigger asChild>
                      <Button variant="outline" size="icon" onClick={() => setSelectedContact(contact)}>
                        <Eye className="w-4 h-4" />
                      </Button>
                    </DialogTrigger>
                    <Button variant="destructive" size="icon" onClick={() => handleDelete(contact.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact Message from {selectedContact?.first_name}</DialogTitle>
        </DialogHeader>
        {selectedContact && (
          <div className="space-y-4 py-4">
            <p><strong>Name:</strong> {selectedContact.first_name} {selectedContact.last_name}</p>
            <p><strong>Email:</strong> {selectedContact.email}</p>
            <p><strong>Type:</strong> {selectedContact.type}</p>
            {selectedContact.company && <p><strong>Company:</strong> {selectedContact.company}</p>}
            {selectedContact.message && <p><strong>Message:</strong> {selectedContact.message}</p>}
          </div>
        )}
      </DialogContent>
    </>
  );
}
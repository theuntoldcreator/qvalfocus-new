import { useNewsletterSubscriptions, useDeleteNewsletterSubscription } from "@/lib/hooks";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";
import { type NewsletterSubscription } from "@shared/schema";

export function NewsletterManagement() {
  const { data: subscriptions, isLoading } = useNewsletterSubscriptions();
  const { toast } = useToast();
  const deleteSubscriptionMutation = useDeleteNewsletterSubscription();

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this subscription?")) {
      deleteSubscriptionMutation.mutate(id, {
        onSuccess: () => toast({ title: "Subscription deleted successfully!" }),
        onError: (error: Error) => toast({ title: "Error deleting subscription", description: error.message, variant: "destructive" }),
      });
    }
  };

  if (isLoading) {
    return <Skeleton className="h-96 w-full" />;
  }

  if (!subscriptions) {
    return <p>No subscriptions found.</p>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Newsletter Subscriptions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Subscription Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subscriptions.map((sub: NewsletterSubscription) => (
              <TableRow key={sub.id}>
                <TableCell>{sub.email}</TableCell>
                <TableCell>{new Date(sub.created_at).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Button variant="destructive" size="icon" onClick={() => handleDelete(sub.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
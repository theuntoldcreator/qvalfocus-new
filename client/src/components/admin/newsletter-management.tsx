import { useNewsletterSubscriptions } from "@/lib/hooks";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format } from "date-fns";
import { Newspaper } from "lucide-react";

export function NewsletterManagement() {
  const { data: subscriptions, isLoading } = useNewsletterSubscriptions();

  if (isLoading) return <p>Loading subscriptions...</p>;

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Newsletter Subscriptions</CardTitle>
        </CardHeader>
        <CardContent>
          {subscriptions && subscriptions.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Email</TableHead>
                  <TableHead>Subscribed At</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {subscriptions.map((sub) => (
                  <TableRow key={sub.id}>
                    <TableCell className="font-medium">{sub.email}</TableCell>
                    <TableCell>{format(new Date(sub.created_at), 'PPP')}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-20">
              <Newspaper className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-semibold">No newsletter subscriptions</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                New subscribers will be listed here.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
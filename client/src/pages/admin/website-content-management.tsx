import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe } from "lucide-react";

export default function WebsiteContentManagementPage() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Website Content Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-20">
            <Globe className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-semibold">Manage Your Website Content</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Here you can edit various sections of your public website, such as the homepage hero, about us page, and footer links.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              (Functionality for inline editing and version history coming soon!)
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
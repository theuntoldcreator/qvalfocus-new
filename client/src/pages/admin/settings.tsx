import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Admin Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-20">
            <Settings className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-semibold">Configure Admin Portal Settings</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Manage user roles, permissions, integrations, and other system-wide settings here.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              (Settings functionality coming soon!)
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
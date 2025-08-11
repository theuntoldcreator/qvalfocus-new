import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { Route, Switch, Redirect } from "wouter";
import { JobsManagement } from "@/components/admin/jobs-management";
import { ContactsManagement } from "@/components/admin/contacts-management";

export default function AdminDashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-50">
      <AdminSidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <Switch>
          <Route path="/admin/dashboard" component={JobsManagement} />
          <Route path="/admin/dashboard/contacts" component={ContactsManagement} />
          {/* Redirect any other sub-routes back to the main dashboard */}
          <Route>
            <Redirect to="/admin/dashboard" />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
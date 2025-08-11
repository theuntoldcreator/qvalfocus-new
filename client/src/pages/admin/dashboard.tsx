import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { Route, Switch, Redirect } from "wouter";
import { DashboardOverview } from "@/components/admin/dashboard-overview";
import { JobsManagement } from "@/components/admin/jobs-management";
import { ContactsManagement } from "@/components/admin/contacts-management";
import NewJobPage from "@/pages/admin/new-job";

export default function AdminDashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-50">
      <AdminSidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <Switch>
          <Route path="/admin/dashboard" component={DashboardOverview} />
          <Route path="/admin/dashboard/jobs" component={JobsManagement} />
          <Route path="/admin/dashboard/jobs/new" component={NewJobPage} />
          <Route path="/admin/dashboard/contacts" component={ContactsManagement} />
          <Route path="/admin/dashboard/:rest*">
            <Redirect to="/admin/dashboard" />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
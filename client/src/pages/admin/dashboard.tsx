import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { Route, Switch, Redirect, Router } from "wouter";
import { JobsManagement } from "@/components/admin/jobs-management";
import { ContactsManagement } from "@/components/admin/contacts-management";

export default function AdminDashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-50">
      <AdminSidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <Router base="/admin/dashboard">
          <Switch>
            <Route path="/" component={JobsManagement} />
            <Route path="/contacts" component={ContactsManagement} />
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}
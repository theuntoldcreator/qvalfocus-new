import { Outlet } from "react-router-dom";
import { AdminSidebar } from "../admin/admin-sidebar";

export default function AdminDashboardLayout() {
  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-50">
      <AdminSidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
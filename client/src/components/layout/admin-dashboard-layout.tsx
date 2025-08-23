import { Outlet } from "react-router-dom";
import { AdminNavbar } from "../admin/admin-navbar";

export default function AdminDashboardLayout() {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-50">
      <AdminNavbar />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <Outlet />
      </main>
    </div>
  );
}
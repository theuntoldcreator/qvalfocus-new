import { Outlet } from "react-router-dom";
import { AdminNavbar } from "../admin/admin-navbar";
import { AdminSidebar } from "../admin/admin-sidebar";

export default function AdminDashboardLayout() {
  return (
    <div className="flex min-h-screen bg-theme-gray-light text-theme-black">
      <AdminSidebar />
      <div className="flex flex-col flex-1">
        <AdminNavbar />
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
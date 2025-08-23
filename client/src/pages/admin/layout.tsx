import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div>
      <h1 className="text-2xl font-bold p-4 bg-gray-200">Admin Section</h1>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
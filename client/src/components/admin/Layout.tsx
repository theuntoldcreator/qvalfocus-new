import React from "react";

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <div>{children}</div>
    </div>
  );
};
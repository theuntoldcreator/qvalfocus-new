import React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header can go here */}
      <main className="flex-grow">{children}</main>
      {/* Footer can go here */}
    </div>
  );
};
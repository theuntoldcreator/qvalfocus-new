import { useAuth } from "@/providers/auth-provider";
import { Redirect } from "wouter";
import { ReactNode } from "react";

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { session, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or a spinner component
  }

  if (!session) {
    return <Redirect to="/admin/login" />;
  }

  return <>{children}</>;
}
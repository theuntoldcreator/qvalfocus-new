import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/providers/auth-provider";

type Props = { children: ReactNode };

export default function ProtectedRoute({ children }: Props) {
  const { session, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div>Loading authentication...</div>; // Or a spinner component
  }

  if (!session) {
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  return <>{children}</>;
}
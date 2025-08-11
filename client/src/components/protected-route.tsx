import { useAuth } from '@/providers/auth-provider';
import { Redirect } from 'wouter';
import { useEffect } from 'react';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { session, loading } = useAuth();

  if (loading) {
    return <div>Loading authentication...</div>; // Or a spinner component
  }

  if (!session) {
    return <Redirect to="/admin/login" />;
  }

  return <>{children}</>;
}
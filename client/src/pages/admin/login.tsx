import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/providers/auth-provider';
import { Redirect } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function AdminLoginPage() {
  const { session } = useAuth();

  if (session) {
    return <Redirect to="/admin/dashboard" />;
  }

  return (
    <div className="relative min-h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-slate-900/50" />
      <div className="relative z-10 min-h-screen w-full flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-2xl">
          <CardHeader className="text-center">
            <img src="/images/qvalfocus.png" alt="QvalFocus Logo" className="h-12 mx-auto mb-4" />
            <CardTitle className="text-2xl font-bold">Admin Portal</CardTitle>
            <CardDescription>Sign in to manage your platform</CardDescription>
          </CardHeader>
          <CardContent>
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              providers={[]}
              theme="light"
              view="sign_in"
              showLinks={false}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
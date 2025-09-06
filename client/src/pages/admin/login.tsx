import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/providers/auth-provider';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function AdminLoginPage() {
  const { session } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate('/admin/dashboard', { replace: true });
    }
  }, [session, navigate]);

  if (session) {
    return null;
  }

  return (
    <div className="relative min-h-screen w-full bg-theme-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl bg-white border-theme-gray-medium text-theme-black">
        <CardHeader className="text-center">
          <img src="https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/qvalfocus_ghitel.png" alt="QvalFocus Logo" className="h-12 mx-auto mb-4" />
          <CardTitle className="text-2xl font-bold">Admin Portal</CardTitle>
          <CardDescription className="text-muted-foreground">Sign in to manage your platform</CardDescription>
        </CardHeader>
        <CardContent>
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={[]}
            theme="light" // Use light theme for Auth UI to match new card background
          />
          <div className="mt-6 text-center">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
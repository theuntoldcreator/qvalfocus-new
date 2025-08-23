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
    <div className="relative min-h-screen w-full bg-slate-950 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl bg-slate-900 border-slate-800 text-white">
        <CardHeader className="text-center">
          <img src="https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/qvalfocus_ghitel.png" alt="QvalFocus Logo" className="h-12 mx-auto mb-4" />
          <CardTitle className="text-2xl font-bold">Admin Portal</CardTitle>
          <CardDescription className="text-slate-400">Sign in to manage your platform</CardDescription>
        </CardHeader>
        <CardContent>
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={[]}
            theme="dark"
            view="sign_in"
          />
          <div className="mt-6 text-center">
            <Link to="/" className="text-sm text-slate-400 hover:text-primary transition-colors inline-flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
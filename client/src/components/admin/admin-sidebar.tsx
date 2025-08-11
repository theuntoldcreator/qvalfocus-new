import { Link, useLocation, useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Briefcase, Mail, LogOut, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

export function AdminSidebar() {
  const [, navigate] = useLocation();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const navLinks = [
    { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard }, // Changed to absolute path
    { href: "/admin/dashboard/jobs", label: "Jobs", icon: Briefcase }, // Changed to absolute path
    { href: "/admin/dashboard/contacts", label: "Contacts", icon: Mail }, // Changed to absolute path
  ];

  return (
    <aside className="w-64 flex-shrink-0 bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 flex flex-col">
      <div className="p-4 border-b border-slate-200 dark:border-slate-800">
        <Link href="/">
          <img src="/images/qvalfocus.png" alt="QvalFocus Logo" className="h-10" />
        </Link>
      </div>
      <nav className="flex-grow p-4 space-y-2">
        {navLinks.map(link => {
          const Icon = link.icon;
          // useRoute will correctly match the full absolute path
          const [isActive] = useRoute(link.href); 
          
          return (
            <Link key={link.href} href={link.href}>
              <div className={cn(
                "flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer",
                isActive 
                  ? "bg-primary text-primary-foreground" 
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              )}>
                <Icon className="w-5 h-5 mr-3" />
                {link.label}
              </div>
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
        <Button variant="ghost" className="w-full justify-start" onClick={handleSignOut}>
          <LogOut className="w-5 h-5 mr-3" />
          Sign Out
        </Button>
      </div>
    </aside>
  );
}
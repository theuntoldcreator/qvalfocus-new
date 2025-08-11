import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Briefcase, Mail, LogOut, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

export function AdminSidebar() {
  const [location, navigate] = useLocation();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const navLinks = [
    { href: "/", label: "Dashboard", icon: LayoutDashboard }, // Changed to relative path
    { href: "/jobs", label: "Jobs", icon: Briefcase }, // Changed to relative path
    { href: "/contacts", label: "Contacts", icon: Mail }, // Changed to relative path
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
          // Determine active state:
          // For the dashboard home link, it's active only if the location is exactly the dashboard home.
          // For other links (like jobs, contacts), it's active if the location starts with the link's href.
          const isActive = link.href === "/"
            ? location === "/admin/dashboard" || location === "/admin/dashboard/" // Check for base path
            : location.startsWith(`/admin/dashboard${link.href}`); // Check for sub-paths
          
          return (
            <Link key={link.href} href={link.href}>
              <a className={cn(
                "flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive 
                  ? "bg-primary text-primary-foreground" 
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              )}>
                <Icon className="w-5 h-5 mr-3" />
                {link.label}
              </a>
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
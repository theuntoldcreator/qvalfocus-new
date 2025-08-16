import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Briefcase, Mail, LogOut, LayoutDashboard, FileText, Newspaper } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

export function AdminSidebar() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const navLinks = [
    { to: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/admin/dashboard/jobs", label: "Jobs", icon: Briefcase },
    { to: "/admin/dashboard/applications", label: "Applications", icon: FileText },
    { to: "/admin/dashboard/contacts", label: "Contacts", icon: Mail },
    { to: "/admin/dashboard/newsletter", label: "Newsletter", icon: Newspaper },
  ];

  return (
    <aside className="w-64 flex-shrink-0 bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 flex flex-col">
      <div className="p-4 border-b border-slate-200 dark:border-slate-800">
        <NavLink to="/">
          <img src="https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/qvalfocus_ghitel.png" alt="QvalFocus Logo" className="h-10" />
        </NavLink>
      </div>
      <nav className="flex-grow p-4 space-y-2">
        {navLinks.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/admin/dashboard"} // end prop only for dashboard
            className={({ isActive }) => cn(
              "flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            )}
          >
            <link.icon className="w-5 h-5 mr-3" />
            {link.label}
          </NavLink>
        ))}
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
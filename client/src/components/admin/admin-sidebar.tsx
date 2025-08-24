import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  Mail,
  Newspaper,
  BookOpen,
  Settings,
  Sun,
  HelpCircle,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function AdminSidebar() {
  const navItems = [
    { to: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/admin/dashboard/jobs", label: "Jobs Management", icon: Briefcase },
    { to: "/admin/dashboard/applications", label: "User Submissions", icon: FileText },
    { to: "/admin/dashboard/contacts", label: "Contact Posts", icon: Mail },
    { to: "/admin/dashboard/blogs", label: "Blog Management", icon: BookOpen },
    { to: "/admin/dashboard/website-content", label: "Website Content", icon: Globe },
    { to: "/admin/dashboard/newsletter", label: "Newsletter", icon: Newspaper },
    { to: "/admin/dashboard/settings", label: "Settings", icon: Settings },
  ];

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    cn(
      "flex items-center gap-3 rounded-lg px-3 py-2 text-theme-gray-dark transition-all hover:text-theme-orange",
      isActive && "bg-theme-orange text-white hover:text-white"
    );

  return (
    <div className="hidden md:flex flex-col h-full w-64 border-r bg-white p-4 shadow-sm">
      <div className="flex items-center justify-center h-20 border-b pb-4 mb-6">
        <img src="https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/qvalfocus_ghitel.png" alt="QvalFocus Logo" className="h-10" />
      </div>
      <nav className="grid items-start gap-2 flex-grow">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} className={navLinkClasses}>
            <item.icon className="h-4 w-4" />
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto border-t pt-4 space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="dark-mode" className="flex items-center gap-3 text-theme-gray-dark">
            <Sun className="h-4 w-4" />
            Dark Mode
          </Label>
          <Switch id="dark-mode" disabled /> {/* Placeholder for functionality */}
        </div>
        <div className="flex items-center gap-3 text-theme-gray-dark">
          <HelpCircle className="h-4 w-4" />
          Help Center
        </div>
      </div>
    </div>
  );
}
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Users, ClipboardCheck, MapPin, ChevronDown, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { to: string; icon: React.ElementType }
>(({ className, title, children, to, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          ref={ref}
          className={cn(
            "flex items-start space-x-4 rounded-md p-3 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800",
            className
          )}
          {...props}
        >
          <div className="flex-shrink-0 mt-1">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <div className="text-base font-semibold text-slate-900 dark:text-white">{title}</div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {children}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Updated navLinks to match the image
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/blogs", label: "Featured insights" },
    { to: "#", label: "Services" }, // This will be the dropdown trigger
    { to: "/industries", label: "Industries" },
    { to: "#", label: "Technology" }, // Placeholder for Technology page
    { to: "/about", label: "About us" },
    { to: "/jobs", label: "Careers" },
  ];

  // Content for the "Services" dropdown
  const servicesLinks = [
    { 
      to: "/services/staffing-solution", 
      title: "Staffing Solution", 
      description: "Flexible and scalable staffing services.",
      icon: Users 
    },
    { 
      to: "/services/project-solution", 
      title: "Project Solution", 
      description: "End-to-end project-based solutions.",
      icon: ClipboardCheck
    }
  ];

  const allNavLinksForMobile = [
    { to: "/", label: "Home" },
    { to: "/services/staffing-solution", label: "Staffing Solution" },
    { to: "/services/project-solution", label: "Project Solution" },
    // Filter out the 'Services' placeholder from navLinks for mobile
    ...navLinks.filter(link => link.label !== "Services" && link.label !== "Home").map(link => ({ to: link.to, label: link.label })),
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 text-sm text-gray-700 hidden md:block h-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-end items-center">
          <div className="flex items-center space-x-4">
            <Link to="/admin/login" className="flex items-center hover:text-primary">
              <User className="h-4 w-4 mr-1" /> Sign in
            </Link>
            <span>|</span>
            <Link to="/admin/register" className="hover:text-primary">Register</Link>
          </div>
          <div className="flex items-center space-x-1 ml-6 cursor-pointer hover:text-primary">
            <MapPin className="h-4 w-4" />
            <span>United States</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="fixed top-0 md:top-8 w-full z-50 bg-white dark:bg-slate-900">
        <div className="border-b border-slate-200 dark:border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Link to="/" className="flex items-center space-x-2">
                <img src="https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/qvalfocus_ghitel.png" alt="QvalFocus Logo" className="h-10" />
              </Link>
              
              <div className="hidden md:flex items-center space-x-8">
                <nav className="flex items-center space-x-8 text-base font-medium text-slate-900 dark:text-slate-300 h-full">
                  {navLinks.map((link) => {
                    if (link.label === "Services") {
                      return (
                        <NavigationMenu key={link.label}>
                          <NavigationMenuList>
                            <NavigationMenuItem>
                              <NavigationMenuTrigger 
                                className={cn(
                                  "p-0 rounded-none bg-transparent",
                                  "h-full flex items-center border-b-4 border-transparent",
                                  "text-slate-900 dark:text-slate-300",
                                  "hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent"
                                )}
                              >
                                {link.label}
                              </NavigationMenuTrigger>
                              <NavigationMenuContent>
                                <ul className="grid w-[350px] gap-3 p-4 md:w-[400px] grid-cols-1">
                                  {servicesLinks.map((service) => (
                                    <ListItem key={service.title} to={service.to} title={service.title} icon={service.icon}>
                                      {service.description}
                                    </ListItem>
                                  ))}
                                </ul>
                              </NavigationMenuContent>
                            </NavigationMenuItem>
                          </NavigationMenuList>
                        </NavigationMenu>
                      );
                    }
                    return (
                      <Link 
                        key={link.to} 
                        to={link.to} 
                        className={cn(
                          "h-full flex items-center border-b-4 border-transparent", 
                          location.pathname === link.to ? "border-slate-900 dark:border-white text-slate-900 dark:text-white" : ""
                        )}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>
                <div className="flex items-center space-x-2 text-slate-900 dark:text-slate-300 cursor-pointer hover:text-primary">
                  <Search className="h-5 w-5" />
                  <span>Search</span>
                </div>
              </div>
              
              <div className="md:hidden flex items-center">
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileNav 
            onClose={() => setIsMobileMenuOpen(false)} 
            navLinks={allNavLinksForMobile}
          />
        )}
      </AnimatePresence>
    </>
  );
}
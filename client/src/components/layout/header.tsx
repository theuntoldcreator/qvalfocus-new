import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Users, ClipboardCheck } from "lucide-react";
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

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/industries", label: "Industries" },
    { to: "/about", label: "About Us" },
    { to: "/jobs", label: "Careers" },
    { to: "/blogs", label: "Blogs" },
    { to: "/contact", label: "Contact Us" },
  ];

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
    ...navLinks.slice(1),
  ];

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white dark:bg-slate-900">
        <div className="border-b border-slate-200 dark:border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Link to="/" className="flex items-center space-x-2">
                <img src="https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/qvalfocus_ghitel.png" alt="QvalFocus Logo" className="h-10" />
              </Link>
              
              <div className="hidden md:flex items-center space-x-8">
                <nav className="flex items-center space-x-8 text-base font-medium text-slate-700 dark:text-slate-300 h-full">
                  <Link to="/" className={cn("h-full flex items-center border-b-4 transition-colors", location.pathname === "/" ? "border-slate-900 dark:border-white text-slate-900 dark:text-white" : "border-transparent hover:border-slate-300 dark:hover:border-slate-600")}>
                    Home
                  </Link>

                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger 
                          className={cn(
                            "header-nav-trigger", // Custom class for CSS override
                            "p-0 rounded-none", // Basic style resets
                            "h-full flex items-center border-b-4 transition-colors text-base font-medium", // Link-like appearance
                            isServicesActive 
                              ? "border-slate-900 dark:border-white text-slate-900 dark:text-white" 
                              : "border-transparent hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300"
                          )}
                        >
                          Services
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

                  {navLinks.slice(1).map((link) => (
                    <Link key={link.to} to={link.to} className={cn("h-full flex items-center border-b-4 transition-colors", location.pathname === link.to ? "border-slate-900 dark:border-white text-slate-900 dark:text-white" : "border-transparent hover:border-slate-300 dark:hover:border-slate-600")}>
                      {link.label}
                    </Link>
                  ))}
                </nav>
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
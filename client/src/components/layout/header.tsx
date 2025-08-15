import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Target } from "lucide-react";
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
  React.ComponentPropsWithoutRef<"a"> & { to: string; }
>(({ className, title, to, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          ref={ref}
          className={cn(
            "flex items-center space-x-3 rounded-md p-3 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800",
            className
          )}
          {...props}
        >
          <Target className="h-5 w-5 flex-shrink-0 text-green-500" />
          <span className="text-sm font-medium text-slate-900 dark:text-white">{title}</span>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const servicesLinks = [
  { to: "/services/staffing-solution", title: "Staffing Solutions" },
  { to: "/services/project-solution", title: "Project Solutions" }
];

const industriesLinks = [
  { to: "/industries/life-sciences", title: "Life Sciences" },
  { to: "/industries/information-technology", title: "Information Technology" }
];

const aboutUsLinks = [
  { to: "/about", title: "Our Story" },
  { to: "/blogs", title: "Blog / Insights" }
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { label: "Services", dropdown: servicesLinks },
    { label: "Industries", dropdown: industriesLinks },
    { label: "About Us", dropdown: aboutUsLinks },
    { to: "/jobs", label: "Careers" },
    { to: "/contact", label: "Contact Us" },
  ];

  const allNavLinksForMobile = [
    { to: "/", label: "Home" },
    ...servicesLinks.map(l => ({ to: l.to, label: l.title })),
    ...industriesLinks.map(l => ({ to: l.to, label: l.title })),
    ...aboutUsLinks.map(l => ({ to: l.to, label: l.title })),
    { to: "/jobs", label: "Careers" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pt-4 bg-transparent">
        <div className="container mx-auto">
          <div className="flex h-20 items-center justify-between rounded-lg bg-white px-6 shadow-lg dark:bg-slate-900">
            <Link to="/" className="flex items-center space-x-2">
              <img src="https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/qvalfocus_ghitel.png" alt="QvalFocus Logo" className="h-10" />
            </Link>
            
            <nav className="hidden md:flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {navLinks.map((link) => (
                    link.dropdown ? (
                      <NavigationMenuItem key={link.label}>
                        <NavigationMenuTrigger className="bg-transparent rounded-none hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent text-base font-medium text-slate-700 focus:text-slate-900 data-[state=open]:text-slate-900 dark:text-slate-300 dark:focus:text-white dark:data-[state=open]:text-white">
                          {link.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="mt-2 border-t-4 border-green-500 shadow-lg">
                          <ul className="grid w-[350px] gap-1 p-2">
                            {link.dropdown.map((item) => (
                              <ListItem key={item.title} to={item.to} title={item.title} />
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    ) : (
                      <NavigationMenuItem key={link.label}>
                        <Link to={link.to!} className={cn(
                          "px-4 py-2 text-base font-medium text-slate-700 dark:text-slate-300",
                          location.pathname === link.to && "text-slate-900 dark:text-white font-semibold"
                        )}>
                          <NavigationMenuLink>{link.label}</NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    )
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
            
            <div className="md:hidden flex items-center">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
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
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
  React.ComponentPropsWithoutRef<"a"> & { to: string; description: string }
>(({ className, title, to, description, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-800 dark:focus:bg-slate-800",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-slate-900 dark:text-white">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
            {description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const servicesLinks = [
  { to: "/services/staffing-solution", title: "Staffing Solutions", description: "Flexible and scalable talent services." },
  { to: "/services/project-solution", title: "Project Solutions", description: "End-to-end project delivery and execution." }
];

const industriesLinks = [
  { to: "/industries/life-sciences", title: "Life Sciences", description: "Expertise in biotech, pharma, and medical devices." },
  { to: "/industries/information-technology", title: "Information Technology", description: "Covering software, cloud, data, and cybersecurity." }
];

const aboutUsLinks = [
  { to: "/about", title: "Our Story", description: "Learn about our mission, vision, and values." },
  { to: "/blogs", title: "Blog / Insights", description: "Stay updated with industry trends and news." }
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
                  <NavigationMenuItem>
                    <Link to="/" className={cn(
                      "px-4 py-2 text-base font-medium text-slate-700 dark:text-slate-300",
                      location.pathname === "/" && "text-slate-900 dark:text-white font-semibold"
                    )}>
                      <NavigationMenuLink>Home</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-base">Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {servicesLinks.map((item) => (
                          <ListItem key={item.title} to={item.to} title={item.title} description={item.description} />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-base">Industries</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {industriesLinks.map((item) => (
                          <ListItem key={item.title} to={item.to} title={item.title} description={item.description} />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-base">About Us</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {aboutUsLinks.map((item) => (
                          <ListItem key={item.title} to={item.to} title={item.title} description={item.description} />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link to="/jobs" className={cn(
                      "px-4 py-2 text-base font-medium text-slate-700 dark:text-slate-300",
                      location.pathname === "/jobs" && "text-slate-900 dark:text-white font-semibold"
                    )}>
                      <NavigationMenuLink>Careers</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link to="/contact" className={cn(
                      "px-4 py-2 text-base font-medium text-slate-700 dark:text-slate-300",
                      location.pathname === "/contact" && "text-slate-900 dark:text-white font-semibold"
                    )}>
                      <NavigationMenuLink>Contact Us</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
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
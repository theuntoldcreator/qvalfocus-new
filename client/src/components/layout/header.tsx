import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Globe } from "lucide-react"; // Removed Users, ClipboardCheck, MapPin, ChevronDown, User
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

// Helper component for dropdown list items
const DropdownListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { to: string }
>(({ className, title, children, to, ...props }, ref) => {
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
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
DropdownListItem.displayName = "DropdownListItem";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Main navigation links, all are dropdowns in this design
  const navLinks = [
    { label: "SERVICES", key: "services" },
    { label: "INDUSTRIES", key: "industries" },
    { label: "PARTNERSHIPS", key: "partnerships" },
    { label: "INSIGHTS", key: "insights" },
    { label: "CAREERS", key: "careers" },
    { label: "ABOUT US", key: "about-us" },
  ];

  // Content for the "SERVICES" dropdown
  const servicesDropdownContent = {
    "Experience design": [
      { to: "#", label: "UX strategy" },
      { to: "#", label: "Digital design" },
      { to: "#", label: "Front-end engineering" },
      { to: "#", label: "Content services" },
    ],
    "Management consulting": [
      { to: "#", label: "Strategic alignment" },
      { to: "#", label: "Business transformation" },
      { to: "#", label: "Operational excellence" },
    ],
    "Data": [
      { to: "#", label: "Data strategy" },
      { to: "#", label: "Data architecture" },
      { to: "#", label: "Data democratization" },
      { to: "#", label: "Data products" },
      { to: "#", label: "Data analytics" },
    ],
    "MarTech": [
      { to: "#", label: "MarTech strategy" },
      { to: "#", label: "MarTech enablement" },
      { to: "#", label: "MarTech optimization" },
    ],
    "Ecommerce": [
      { to: "#", label: "Ecommerce strategy" },
      { to: "#", label: "Ecommerce enablement" },
      { to: "#", label: "Ecommerce optimization" },
    ],
    "Innovation": [
      { to: "#", label: "Innovation strategy" },
      { to: "#", label: "Product management" },
      { to: "#", label: "Product & service incubation" },
      { to: "#", label: "Product & service ideation" },
    ],
    "Artificial intelligence": [
      { to: "#", label: "AI strategy" },
      { to: "#", label: "AI products" },
      { to: "#", label: "AI models" },
      { to: "#", label: "AI everywhere" },
    ],
    "Cloud & engineering": [
      { to: "#", label: "Cloud advisory" },
      { to: "#", label: "Platform engineering" },
      { to: "#", label: "Cloud native development" },
      { to: "#", label: "Cloud data & AI" },
      { to: "#", label: "Cloud migration & app modernization" },
    ],
  };

  // Placeholder content for other dropdowns
  const placeholderDropdownContent = [
    { to: "#", label: "Sub-item 1" },
    { to: "#", label: "Sub-item 2" },
    { to: "#", label: "Sub-item 3" },
  ];

  const allNavLinksForMobile = [
    { to: "/", label: "Home" }, // Keeping Home for mobile for now
    ...navLinks.map(link => ({ to: `#${link.key}`, label: link.label })), // Placeholder for mobile dropdowns
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 w-full z-50 navbar-glass text-sm text-slate-600 hidden md:block h-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-end items-center space-x-6">
          <Link to="/contact" className="hover:text-brand-red">CONTACT</Link>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-brand-red">
            <Search className="h-4 w-4" />
            <span>SEARCH</span>
          </div>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-brand-red">
            <Globe className="h-4 w-4" />
            <span>India</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="fixed top-10 w-full z-50 navbar-glass">
        <div className="border-b border-slate-200 dark:border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Link to="/" className="flex items-center space-x-2">
                <img src="https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/qvalfocus_ghitel.png" alt="CREDERA Logo" className="h-10" />
                {/* If you want text logo: <span className="text-2xl font-bold text-slate-900 dark:text-white">CREDERA</span> */}
              </Link>
              
              <div className="hidden md:flex items-center">
                <NavigationMenu>
                  <NavigationMenuList>
                    {navLinks.map((link) => (
                      <NavigationMenuItem key={link.key}>
                        <NavigationMenuTrigger 
                          className={cn(
                            "p-0 rounded-none", // Basic style resets
                            "h-full flex items-center border-b-4 border-transparent", // Base link appearance
                            "text-slate-900 dark:text-slate-300", // Default text color
                            "data-[state=open]:border-brand-red data-[state=open]:text-brand-red data-[state=open]:bg-transparent", // Open state: red underline, red text, transparent background
                            "hover:border-brand-red hover:text-brand-red hover:bg-transparent" // Hover state: red underline, red text, transparent background
                          )}
                        >
                          {link.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          {link.key === "services" ? (
                            <div className="flex p-6 w-[1000px] max-w-[1000px]"> {/* Adjust width as needed */}
                              {/* Left section: Services overview */}
                              <div className="w-1/4 pr-6 border-r border-slate-200 dark:border-slate-700">
                                <h2 className="text-3xl font-serif font-bold mb-4 text-slate-900 dark:text-white">Services</h2>
                                <p className="text-slate-600 dark:text-slate-300 mb-6">
                                  Our global expertise and experience partnered with deep relationships unlocks extraordinary results.
                                </p>
                                <Link to="/services/staffing-solution" className="font-semibold text-brand-red hover:text-brand-red/80 transition-colors flex items-center">
                                  READ OVERVIEW →
                                </Link>
                                <div className="mt-6 w-full h-32 overflow-hidden rounded-lg">
                                  <img 
                                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250" 
                                    alt="Services overview" 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              </div>
                              {/* Right sections: Grid of categories */}
                              <div className="flex-1 pl-6 grid grid-cols-4 gap-x-8 gap-y-4">
                                {Object.entries(servicesDropdownContent).map(([category, items]) => (
                                  <div key={category}>
                                    <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-white">{category}</h3>
                                    <ul className="space-y-2">
                                      {items.map((item, idx) => (
                                        <li key={idx}>
                                          <Link to={item.to} className="text-slate-600 dark:text-slate-300 hover:text-brand-red text-sm">
                                            {item.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] grid-cols-1">
                              {placeholderDropdownContent.map((item, index) => (
                                <DropdownListItem key={index} to={item.to} title={item.label}>
                                  Description for {item.label.toLowerCase()}.
                                </DropdownListItem>
                              ))}
                            </ul>
                          )}
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
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
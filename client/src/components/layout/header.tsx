import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";
import { AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScroll();
  const location = useLocation();

  const navLinks = [
    { to: "/industries", label: "Industries" },
    { to: "/about", label: "About" },
    { to: "/jobs", label: "Careers" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "py-2 bg-white/95 backdrop-blur-sm shadow-sm dark:bg-slate-900/95" : "py-6"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:grid md:grid-cols-3">
            <div className="md:justify-self-start">
              <Link to="/" className="flex items-center space-x-2">
                <img src="https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/qvalfocus_ghitel.png" alt="QvalFocus Logo" className="h-8" />
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center gap-6 justify-self-center">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary transition-colors">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link to="/services/staffing-solution">Staffing Solutions</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/project-solution">Project Solutions</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary transition-colors",
                    location.pathname === link.to && "text-primary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            <div className="hidden md:flex items-center justify-self-end">
              <Button asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>

            <div className="md:hidden flex items-center justify-end md:col-start-3">
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
            navLinks={[
              { to: "/services/staffing-solution", label: "Staffing Solutions" },
              { to: "/services/project-solution", label: "Project Solutions" },
              ...navLinks
            ]}
          />
        )}
      </AnimatePresence>
    </>
  );
}
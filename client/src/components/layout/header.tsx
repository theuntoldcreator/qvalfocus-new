import { useState } from "react";
import { Link } from "react-router-dom";
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

  const navLinks = [
    { to: "/industries", label: "Industries" },
    { to: "/about", label: "About" },
    { to: "/jobs", label: "Careers" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "flex h-16 items-center justify-between px-6 rounded-xl transition-all duration-300",
              isScrolled
                ? "bg-white/80 backdrop-blur-sm shadow-sm"
                : "bg-transparent"
            )}
          >
            <Link to="/" className="flex items-center space-x-2">
              <img src="https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/qvalfocus_ghitel.png" alt="QvalFocus Logo" className="h-8" />
            </Link>
            
            <nav className="hidden md:flex items-center space-x-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost">
                    Services <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
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
                <Button key={link.to} variant="ghost" asChild>
                  <Link to={link.to}>{link.label}</Link>
                </Button>
              ))}
              <Button asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
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
            navLinks={[
              { to: "/services/staffing-solution", label: "Staffing Solutions" },
              { to: "/services/project-solution", label: "Project Solutions" },
              ...navLinks, 
              { to: "/contact", label: "Contact Us" }
            ]}
          />
        )}
      </AnimatePresence>
    </>
  );
}
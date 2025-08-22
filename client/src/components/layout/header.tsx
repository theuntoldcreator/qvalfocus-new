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
import { cn } from "@/lib/utils";
import { industries } from "@/lib/data";
import { TopBar } from "./TopBar"; // Import the new TopBar

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
  ];

  const mobileNavLinks = [
    { to: "/", label: "Recruitment Home" },
    { to: "/jobs", label: "Recruitment Home Alt" }, // Mapping to Jobs page
    { to: "/about", label: "About Us" },
    { to: "/services/staffing-solution", label: "Our Services" }, // Grouping services under one link for mobile
    { to: "/case-studies", label: "Case Studies" },
    { to: "/blogs", label: "News & Insights" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <TopBar /> {/* Integrate the new TopBar */}
      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-50 bg-slate-900 text-white shadow-md" // Always dark, no scroll effect
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img src="https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/qvalfocus_ghitel.png" alt="QvalFocus Logo" className="h-8" />
                <span className="text-lg font-semibold text-white hidden sm:block">QvalFocus</span>
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "text-sm font-medium hover:text-primary transition-colors",
                    location.pathname === link.to && "text-primary"
                  )}
                >
                  {link.label}
                </Link>
              ))}

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-primary transition-colors">
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

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-primary transition-colors">
                  Pages <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild><Link to="/blogs">Blogs</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link to="/case-studies">Case Studies</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link to="/customers">Customers</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link to="/guides">Guides</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link to="/pricing">Pricing</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link to="/legal/privacy">Privacy Policy</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link to="/legal/terms">Terms of Service</Link></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button asChild className="bg-yellow-400 text-slate-950 hover:bg-yellow-500 hidden md:inline-flex">
                <Link to="/contact?type=client">Hire A Talent</Link>
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white">
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
            navLinks={mobileNavLinks}
          />
        )}
      </AnimatePresence>
    </>
  );
}
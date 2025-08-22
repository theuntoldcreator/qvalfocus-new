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
import { TopBar } from "./TopBar";
import { ServicesDropdownContent } from "./services-dropdown-content"; // Import the new component

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
  ];

  const mobileNavLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services/staffing-solution", label: "Services" },
    { to: "/industries", label: "Industries" },
    { to: "/blogs", label: "Blogs" },
    { to: "/contact", label: "Contact" },
    { to: "/case-studies", label: "Case Studies" },
    { to: "/customers", label: "Customers" },
    { to: "/guides", label: "Guides" },
    { to: "/pricing", label: "Pricing" },
    { to: "/legal/privacy", label: "Privacy Policy" },
    { to: "/legal/terms", label: "Terms of Service" },
  ];

  return (
    <>
      <TopBar />
      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-50 bg-white text-slate-900 shadow-md"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img src="https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/qvalfocus_ghitel.png" alt="Avada Logo" className="h-10" />
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              {/* Home Link (no dropdown visible in image, keeping simple) */}
              <Link
                to="/"
                className={cn(
                  "text-base font-medium hover:text-primary transition-colors",
                  location.pathname === "/" && "text-primary"
                )}
              >
                Home
              </Link>

              {/* About Us Link */}
              <Link
                to="/about"
                className={cn(
                  "text-base font-medium hover:text-primary transition-colors",
                  location.pathname === "/about" && "text-primary"
                )}
              >
                About Us
              </Link>

              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className={cn(
                  "flex items-center text-base font-medium hover:text-primary transition-colors",
                  location.pathname.startsWith("/services") && "text-primary"
                )}>
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-0 w-auto">
                  <ServicesDropdownContent />
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Pages Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className={cn(
                  "flex items-center text-base font-medium hover:text-primary transition-colors",
                  (location.pathname.startsWith("/blogs") || location.pathname.startsWith("/case-studies") || location.pathname.startsWith("/customers") || location.pathname.startsWith("/guides") || location.pathname.startsWith("/pricing") || location.pathname.startsWith("/legal")) && "text-primary"
                )}>
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

              {/* Contact Link */}
              <Link
                to="/contact"
                className={cn(
                  "text-base font-medium hover:text-primary transition-colors",
                  location.pathname === "/contact" && "text-primary"
                )}
              >
                Contact
              </Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-avada-green-darker hidden md:inline-flex">
                    <span className="flex items-center">
                      Hire A Talent <ChevronDown className="ml-2 h-4 w-4" />
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild><Link to="/contact?type=client">Client Inquiry</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link to="/admin/dashboard/jobs/new">Post a Job</Link></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-slate-900">
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
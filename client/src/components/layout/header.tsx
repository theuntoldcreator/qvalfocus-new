import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
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
import { ServicesDropdownContent } from "./services-dropdown-content";
import { useScroll } from "@/hooks/use-scroll"; // Import useScroll

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [isHireTalentDropdownOpen, setIsHireTalentDropdownOpen] = useState(false);

  const location = useLocation();
  const isScrolled = useScroll(50); // Detect scroll after 50px

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

  // Base classes for all nav items
  const baseNavLinkClasses = "text-base font-medium transition-colors text-slate-900";

  // Function to get conditional classes for each nav item
  const getNavLinkClasses = (path: string) => cn(
    baseNavLinkClasses,
    "hover:text-primary", // Hover color
    (location.pathname === path || location.pathname.startsWith(path + '/')) && "text-primary" // Active color
  );

  // Function to get conditional classes for dropdown triggers
  const getDropdownTriggerClasses = (paths: string[], isOpen: boolean) => cn(
    baseNavLinkClasses,
    "inline-flex items-center", // Ensure inline-flex for text and icon alignment
    "hover:text-primary", // Hover color
    paths.some(path => location.pathname.startsWith(path)) && "text-primary" // Active color based on path, not just if open
  );

  return (
    <>
      <TopBar />
      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "navbar-glass shadow-md" // Scrolled state
            : "bg-transparent" // Top state
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                {/* The logo is dark. If it's not visible against the transparent header, 
                    you might need to provide a white version or apply a CSS filter. */}
                <img src="https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/qvalfocus_ghitel.png" alt="Avada Logo" className="h-10" />
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              {/* Home Link */}
              <Link to="/" className={getNavLinkClasses("/")}>
                Home
              </Link>

              {/* About Us Link */}
              <Link to="/about" className={getNavLinkClasses("/about")}>
                About Us
              </Link>

              {/* Services Dropdown */}
              <DropdownMenu onOpenChange={setIsServicesDropdownOpen}>
                <DropdownMenuTrigger className={getDropdownTriggerClasses(["/services"], isServicesDropdownOpen)}>
                  Services <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", isServicesDropdownOpen && "rotate-180")} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-0 w-auto">
                  <ServicesDropdownContent />
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Pages Dropdown */}
              <DropdownMenu onOpenChange={setIsPagesDropdownOpen}>
                <DropdownMenuTrigger className={getDropdownTriggerClasses(["/blogs", "/case-studies", "/customers", "/guides", "/pricing", "/legal"], isPagesDropdownOpen)}>
                  Pages <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", isPagesDropdownOpen && "rotate-180")} />
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
              <Link to="/contact" className={getNavLinkClasses("/contact")}>
                Contact
              </Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <DropdownMenu onOpenChange={setIsHireTalentDropdownOpen}>
                <DropdownMenuTrigger asChild>
                  <Button 
                    asChild 
                    variant="ghost" // Use ghost variant to remove default background/hover
                    className={cn(
                      "hidden md:inline-flex",
                      "bg-brand-blue text-white hover:bg-brand-blue" // Explicitly set hover to be the same blue
                    )}
                  >
                    <span className="flex items-center">
                      Hire A Talent <ArrowUpRight className="ml-2 h-4 w-4" />
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild><Link to="/contact?type=client">Client Inquiry</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link to="/admin/dashboard/jobs/new">Post a Job</Link></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className={cn(
                  "md:hidden",
                  isScrolled ? "text-slate-900" : "text-white"
                )}
              >
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
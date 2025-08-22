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
  // Removed isHireTalentDropdownOpen as it's no longer a dropdown

  const location = useLocation();
  const isScrolled = useScroll(50); // Detect scroll after 50px

  // Removed navLinks as they are now handled by mobileNavLinks for the sidebar
  // and directly in the desktop nav structure.

  const mobileNavLinks = [
    { to: "/", label: "Recruitment Home" },
    { to: "/", label: "Recruitment Home Alt" }, // Assuming this also links to home for now
    { to: "/about", label: "About Us" },
    { to: "/services/staffing-solution", label: "Our Services" }, // General services link
    { to: "/case-studies", label: "Case Studies" },
    { to: "/blogs", label: "News & Insights" }, // Blogs are news & insights
    { to: "/contact", label: "Contact Us" },
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
            : "bg-white" // Top state - now always white
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img src="https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/qvalfocus_ghitel.png" alt="QvalFocus Logo" className="h-10" />
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
              {/* New "Hire A Talent" button that opens the mobile nav */}
              <Button
                onClick={() => setIsMobileMenuOpen(true)}
                className="inline-flex items-center justify-center p-1 rounded-full bg-avada-blue hover:bg-avada-blue" // Outer blue button
              >
                <span className="flex items-center px-4 py-2 rounded-full bg-avada-yellow text-accent-foreground"> {/* Inner yellow "button" look */}
                  Hire A Talent <ArrowUpRight className="ml-2 h-4 w-4" />
                </span>
              </Button>

              {/* Hamburger menu button - always visible */}
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="text-slate-900" // Always dark text on white header
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
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location === "/";
  const isTransparent = !isScrolled && isHomePage;

  const transparentNavStyles = isTransparent ? {
    '--background': 'transparent',
    '--input': 'hsl(0 0% 100% / 0.2)',
    '--accent': 'hsl(0 0% 100% / 0.1)',
    '--accent-foreground': 'hsl(0 0% 100%)',
  } as React.CSSProperties : {};

  return (
    <>
      <nav 
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          isTransparent
            ? "navbar-transparent text-white"
            : "navbar-glass"
        )}
        style={transparentNavStyles}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TF</span>
              </div>
              <span className="text-xl font-bold">TalentForge</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-6">
                <Link href="/services/staffing" className="hover:text-primary transition-colors">
                  Services
                </Link>
                <Link href="/industries" className="hover:text-primary transition-colors">
                  Industries
                </Link>
                <Link href="/jobs" className="hover:text-primary transition-colors">
                  Jobs
                </Link>
                <Link href="/case-studies" className="hover:text-primary transition-colors">
                  Case Studies
                </Link>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </div>
              
              <ThemeToggle />
              
              <div className="flex space-x-2">
                <Button variant="outline" asChild>
                  <Link href="/contact?type=client">Hire Talent</Link>
                </Button>
                <Button asChild>
                  <Link href="/jobs">Find Jobs</Link>
                </Button>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
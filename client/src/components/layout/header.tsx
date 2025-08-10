import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/case-studies", label: "Featured insights" },
    { href: "/services/project-solution", label: "Capabilities" },
    { href: "/industries", label: "Industries" },
    { href: "/industries/technology", label: "Technology" },
    { href: "/about", label: "About us" },
    { href: "/jobs", label: "Careers" },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white dark:bg-slate-900">
        {/* Main navigation */}
        <div className="border-b border-slate-200 dark:border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">TF</span>
                </div>
                <span className="text-2xl font-bold">TalentForge</span>
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-4">
                <nav className="flex items-center space-x-8 text-base font-medium text-slate-700 dark:text-slate-300 h-full">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "h-full flex items-center border-b-4 transition-colors",
                        location === link.href
                          ? "border-slate-900 dark:border-white text-slate-900 dark:text-white"
                          : "border-transparent hover:text-slate-900 dark:hover:text-white"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                
                <Button variant="ghost" className="flex items-center text-base font-medium">
                  <Search className="h-5 w-5 mr-2" /> Search
                </Button>
                <ThemeToggle />
              </div>
              
              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <ThemeToggle />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <MobileNav 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        navLinks={navLinks}
      />
    </>
  );
}
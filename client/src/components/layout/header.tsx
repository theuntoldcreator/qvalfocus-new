import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { companyInfo } from "@/lib/data";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/services/project-solution", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/jobs", label: "Careers" },
    { href: "/case-studies", label: "Insights" },
  ];

  return (
    <>
      <header className="sticky top-0 w-full z-50 bg-white dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <Logo />
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              <nav className="flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                ))}
              </nav>
              
              <div className="flex items-center gap-4">
                <Button className="bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-full w-10 h-10">
                    <Mail className="w-5 h-5 text-slate-500" />
                  </Button>
                  <Button variant="ghost" size="icon" className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-full w-10 h-10">
                    <MessageSquare className="w-5 h-5 text-slate-500" />
                  </Button>
                </div>
                <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-white">
                  <Phone className="w-4 h-4" />
                  {companyInfo.phone}
                </a>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
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
      </header>

      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
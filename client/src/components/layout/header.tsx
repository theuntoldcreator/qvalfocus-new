"use client";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ArrowUpRight } from "lucide-react"; // Removed X, ChevronDown
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TopBar } from "./TopBar";
import { useScroll } from "@/hooks/use-scroll";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeaderProps {
  onToggleMobileMenu: () => void; // Prop to toggle sidebar
}

export function Header({ onToggleMobileMenu }: HeaderProps) {
  const isScrolled = useScroll(50);
  const isMobile = useIsMobile();

  return (
    <>
      <TopBar />
      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "navbar-glass shadow-md"
            : "bg-white"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img src="https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/qvalfocus_ghitel.png" alt="QvalFocus Logo" className="h-10" />
              </Link>
            </div>
            
            {/* Desktop navigation is now handled by the persistent sidebar. */}
            {/* Only show "Hire A Talent" button and hamburger menu (for mobile) */}
            
            <div className="flex items-center space-x-4">
              <Button
                onClick={onToggleMobileMenu} // This button will now open the mobile menu on mobile, or just be a button on desktop
                className="inline-flex items-center justify-center p-1 rounded-full bg-avada-blue hover:bg-avada-blue"
              >
                <span className="flex items-center px-4 py-2 rounded-full bg-avada-yellow text-accent-foreground hover:bg-avada-blue hover:text-white transition-colors duration-200">
                  Hire A Talent <ArrowUpRight className="ml-2 h-4 w-4" />
                </span>
              </Button>

              {/* Hamburger menu button - only visible on mobile */}
              {isMobile && (
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={onToggleMobileMenu}
                  className="text-slate-900"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
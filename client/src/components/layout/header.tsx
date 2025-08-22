"use client";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TopBar } from "./TopBar";
import { useScroll } from "@/hooks/use-scroll";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { services } from "@/lib/data"; // Import services data

interface HeaderProps {
  onToggleMobileMenu: () => void;
}

export function Header({ onToggleMobileMenu }: HeaderProps) {
  const isScrolled = useScroll(50);
  const location = useLocation();

  const navLinkClasses = (path: string) => cn(
    "text-base font-medium transition-colors hover:text-primary",
    (location.pathname === path || location.pathname.startsWith(path + '/')) ? "text-primary" : "text-slate-700 dark:text-slate-300"
  );

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

            {/* Group Desktop Navigation and Action Buttons */}
            <div className="flex items-center">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <Link to="/" className={navLinkClasses("/")}>
                        Home
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link to="/about" className={navLinkClasses("/about")}>
                        About Us
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className={navLinkClasses("/services")}>
                        Services
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                          {services.map((service) => (
                            <li key={service.id}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={service.link}
                                  className={cn(
                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                    location.pathname.startsWith(service.link) && "bg-accent text-accent-foreground"
                                  )}
                                >
                                  <div className="text-sm font-medium leading-none">{service.title}</div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {service.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link to="/industries" className={navLinkClasses("/industries")}>
                        Industries
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link to="/jobs" className={navLinkClasses("/jobs")}>
                        Careers
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link to="/blogs" className={navLinkClasses("/blogs")}>
                        Blogs
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link to="/contact" className={navLinkClasses("/contact")}>
                        Contact
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </nav>

              <div className="flex items-center space-x-4">
                <Button asChild className="hidden md:inline-flex">
                  <Link to="/contact?type=client">
                    Hire A Talent <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                {/* Mobile menu button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onToggleMobileMenu}
                  className="md:hidden text-slate-900 dark:text-white"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
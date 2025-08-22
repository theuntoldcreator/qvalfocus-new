"use client";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ArrowUpRight } from "lucide-react";
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
  NavigationMenuViewport,
} from "@/components/ui/custom-navigation-menu";
import { pagesLinks, services } from "@/lib/data";

interface HeaderProps {
  onToggleMobileMenu: () => void;
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ElementType; image?: string }
>(({ className, title, children, icon: Icon, image, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800",
            className
          )}
          {...props}
        >
          <div className="flex items-center">
            {Icon && <Icon className="mr-2 h-4 w-4 text-primary" />}
            <div className="text-sm font-medium leading-none">{title}</div>
            {image && (
              <img src={image} alt={title} className="ml-auto h-10 w-20 object-cover rounded-md" />
            )}
          </div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function Header({ onToggleMobileMenu }: HeaderProps) {
  const isScrolled = useScroll(50);
  const location = useLocation();

  const navLinkClasses = (path: string) => cn(
    "text-base font-medium transition-colors",
    (location.pathname === path || (path !== "/" && location.pathname.startsWith(path))) ? "text-primary active" : "text-slate-700 dark:text-slate-300"
  );

  return (
    <>
      <TopBar />
      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "navbar-glass shadow-md" : "bg-white"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img src="https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/qvalfocus_ghitel.png" alt="Avada Logo" className="h-10" />
              </Link>
            </div>

            <div className="flex items-center">
              <nav className="hidden md:flex items-center">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <Link to="/" className={cn(navLinkClasses("/"), "inline-flex h-10 items-center justify-center px-4 py-2")}>
                        <span className="nav-link-underline">Home</span>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link to="/about" className={cn(navLinkClasses("/about"), "inline-flex h-10 items-center justify-center px-4 py-2")}>
                        <span className="nav-link-underline">About Us</span>
                      </Link>
                    </NavigationMenuItem>
                    {services.map((service) => (
                      <NavigationMenuItem key={service.id}>
                        <Link to={service.link} className={cn(navLinkClasses(service.link), "inline-flex h-10 items-center justify-center px-4 py-2")}>
                          <span className="nav-link-underline">{service.title}</span>
                        </Link>
                      </NavigationMenuItem>
                    ))}
                    <NavigationMenuItem>
                      <Link to="/contact" className={cn(navLinkClasses("/contact"), "inline-flex h-10 items-center justify-center px-4 py-2")}>
                        <span className="nav-link-underline">Contact</span>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                  <NavigationMenuViewport />
                </NavigationMenu>
              </nav>

              <div className="flex items-center space-x-4 ml-8">
                <Button asChild className="hidden md:inline-flex bg-avada-yellow text-slate-900 hover:bg-avada-yellow/90">
                  <Link to="/contact?type=client">
                    Hire A Talent <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

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
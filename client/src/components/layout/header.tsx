"use client";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ArrowUpRight, ArrowRight } from "lucide-react";
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
import { pagesLinks, recruitmentDropdownServices } from "@/lib/data";

interface HeaderProps {
  onToggleMobileMenu: () => void;
}

// ListItem for simple dropdowns with a title and description (e.g., Home, Pages)
const SimpleListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
SimpleListItem.displayName = "SimpleListItem";

// ListItem specifically for the Services dropdown, updated to match the new design
const ServiceListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "group flex items-center rounded-md p-3 text-base font-medium text-slate-800 no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100",
            className
          )}
          {...props}
        >
          <ArrowRight className="mr-3 h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1" />
          <span>{title}</span>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ServiceListItem.displayName = "ServiceListItem";

export function Header({ onToggleMobileMenu }: HeaderProps) {
  const isScrolled = useScroll(50);
  const location = useLocation();

  const navLinkClasses = (path: string) => {
    const isActive = (path === '/' ? location.pathname === path : location.pathname.startsWith(path));
    return cn(
      "text-base font-medium transition-colors",
      isActive 
        ? "text-primary" 
        : "text-slate-700 dark:text-slate-300"
    );
  };

  const navItemClasses = (path: string) => {
    const isActive = (path === '/' ? location.pathname === path : location.pathname.startsWith(path));
    return cn(
      navigationMenuTriggerStyle(),
      navLinkClasses(path),
      isActive ? "bg-slate-100 dark:bg-slate-800" : "bg-transparent",
      "hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800"
    );
  };

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
          <div className="flex md:grid md:grid-cols-[1fr_auto_1fr] h-20 items-center justify-between">
            {/* Left: Logo */}
            <div className="flex items-center justify-start">
              <Link to="/" className="flex items-center space-x-2">
                <img src="https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/qvalfocus_ghitel.png" alt="QvalFocus Logo" className="h-10" />
              </Link>
            </div>

            {/* Center: Navigation */}
            <nav className="hidden md:flex items-center justify-center space-x-1 lg:space-x-2">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={navItemClasses("/")}>Home</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[550px]">
                        <SimpleListItem href="/#about" title="About Us">
                          Learn more about our mission and values.
                        </SimpleListItem>
                        <SimpleListItem href="/#services" title="Our Services">
                          Explore our staffing and project solutions.
                        </SimpleListItem>
                        <SimpleListItem href="/#jobs" title="Featured Jobs">
                          Find your next career opportunity.
                        </SimpleListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link to="/about" className={navItemClasses("/about")}>
                        About Us
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={navItemClasses("/services")}>Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid grid-cols-[3fr_2fr] w-[700px] overflow-hidden rounded-lg shadow-lg">
                        <div className="bg-[#0A2628] p-8 text-white flex flex-col justify-between">
                          <div>
                            <h4 className="text-2xl font-bold mb-4 font-serif">Recruitment Services</h4>
                            <p className="text-slate-300 text-sm leading-relaxed">
                              Lummattis element cum semps honec rnare. Dolor auctor urna dignissim sed nunc sit plateas uellentesque tempor.
                            </p>
                          </div>
                          <Button variant="link" asChild className="text-primary hover:text-green-400 p-0 h-auto justify-start mt-6">
                            <Link to="/services/staffing-solution">
                              Learn More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                        <ul className="p-4 bg-white grid gap-2">
                          {recruitmentDropdownServices.map((item) => (
                            <ServiceListItem
                              key={item.title}
                              title={item.title}
                              href={item.link}
                            />
                          ))}
                        </ul>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={navItemClasses("/pages")}>Pages</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[550px]">
                        {pagesLinks.map((page) => (
                          <SimpleListItem key={page.link} title={page.title} href={page.link}>
                            {page.description}
                          </SimpleListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link to="/careers" className={navItemClasses("/careers")}>
                        Careers
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            {/* Right: Buttons */}
            <div className="flex items-center justify-end">
              <div className="flex items-center space-x-4">
                <Button asChild className="hidden md:inline-flex bg-theme-orange hover:bg-theme-orange-dark">
                  <Link to="/contact?type=client">
                    Hire A Talent <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onToggleMobileMenu}
                  className="md:hidden text-slate-900 dark:text-white"
                  aria-label="Open mobile menu"
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
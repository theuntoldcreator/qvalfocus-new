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
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { pagesLinks, recruitmentDropdownServices } from "@/lib/data";

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
            "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-blue-100",
            className
          )}
          {...props}
        >
          <div className="flex items-center">
            {Icon && <Icon className="mr-2 h-4 w-4 text-primary group-hover:text-accent-foreground" />}
            <div className="text-sm font-medium leading-none">{title}</div>
            {image && (
              <img src={image} alt={title || ""} className="ml-auto h-10 w-20 object-cover rounded-md" />
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
      isActive ? "bg-slate-100 dark:bg-slate-800" : "bg-transparent"
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
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img src="https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/qvalfocus_ghitel.png" alt="QvalFocus Logo" className="h-10" />
              </Link>
            </div>

            <div className="flex items-center">
              <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className={navItemClasses("/")}>Home</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px]">
                          <ListItem href="/#about" title="About Us">
                            Learn more about our mission and values.
                          </ListItem>
                          <ListItem href="/#services" title="Our Services">
                            Explore our staffing and project solutions.
                          </ListItem>
                          <ListItem href="/#jobs" title="Featured Jobs">
                            Find your next career opportunity.
                          </ListItem>
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
                        <div className="grid grid-cols-[1fr_2fr] w-[700px] p-0">
                          <div className="bg-primary p-6 text-white flex flex-col justify-between rounded-l-md">
                            <div>
                              <h4 className="text-2xl font-bold mb-3">Recruitment Services</h4>
                              <p className="text-primary-foreground text-sm leading-relaxed">
                                We provide comprehensive recruitment services to connect top talent with leading companies.
                              </p>
                            </div>
                            <Button variant="link" asChild className="text-white hover:text-primary-foreground/80 p-0 h-auto justify-start">
                              <Link to="/services/staffing-solution">
                                Learn More <ArrowUpRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                          <ul className="grid gap-3 p-4">
                            {recruitmentDropdownServices.map((item) => (
                              <ListItem
                                key={item.title}
                                title={item.title}
                                href={item.link}
                                icon={ArrowUpRight}
                                // Removed image={item.image}
                              >
                                {item.description}
                              </ListItem>
                            ))}
                          </ul>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuLink asChild>
                        <Link to="/jobs" className={navItemClasses("/jobs")}>
                          Careers
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuTrigger className={navItemClasses("/pages")}>Pages</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {pagesLinks.map((page) => (
                            <ListItem key={page.link} title={page.title} href={page.link}>
                              {page.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </nav>

              <div className="flex items-center space-x-4 ml-8">
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
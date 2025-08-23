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
            "group grid grid-cols-[1fr_1fr] items-center gap-4 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100",
            className
          )}
          {...props}
        >
          {/* Column 1: Icon and Title */}
          <div className="flex items-center">
            {Icon && <Icon className="mr-3 h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />}
            <div className="text-lg font-semibold leading-none">{title}</div>
          </div>
          {/* Column 2: Image */}
          {image && (
            <div className="overflow-hidden rounded-md justify-self-end">
              <img src={image} alt={title || ""} className="h-12 w-40 object-cover transition-transform group-hover:scale-105" />
            </div>
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
                        <div className="grid grid-cols-[1fr_2.5fr] w-[960px] p-0 overflow-hidden rounded-md">
                          <div className="bg-avada-green-darker p-8 text-white flex flex-col justify-between">
                            <div>
                              <h4 className="text-2xl font-bold mb-3 font-serif">Recruitment Services</h4>
                              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                                Lummattis element cum semps honec rnare. Dolor auctor urna dignissim sed nunc sit plateas uellentesque tempor.
                              </p>
                            </div>
                            <Button variant="link" asChild className="text-white hover:text-primary-foreground/80 p-0 h-auto justify-start mt-6">
                              <Link to="/services/staffing-solution">
                                Learn More <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                          <ul className="p-6 bg-white">
                            {recruitmentDropdownServices.map((item) => (
                              <ListItem
                                key={item.title}
                                title={item.title}
                                href={item.link}
                                icon={ArrowRight}
                                image={item.image}
                              />
                            ))}
                          </ul>
                        </div>
                      </NavigationMenuContent>
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

                    <NavigationMenuItem>
                      <NavigationMenuLink asChild>
                        <Link to="/contact" className={navItemClasses("/contact")}>
                          Contact
                        </Link>
                      </NavigationMenuLink>
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
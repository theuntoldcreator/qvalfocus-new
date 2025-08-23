import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { companyInfo, pagesLinks, recruitmentDropdownServices } from "@/lib/data";
import { ChevronDown, Phone } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-slate-900">
              {companyInfo.name}
            </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {pagesLinks.map((item) =>
                  item.title === "Services" ? (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {recruitmentDropdownServices.map((service) => (
                            <li key={service.title}>
                              <NavigationMenuLink asChild>
                                <Link to={service.link} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                  <div className="text-sm font-medium leading-none">{service.title}</div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.title}>
                      <NavLink to={item.link}>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          {item.title}
                        </NavigationMenuLink>
                      </NavLink>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2">
              <Phone className="h-5 w-5 text-primary" />
              <span className="font-semibold">{companyInfo.phone}</span>
            </div>
            <Button asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
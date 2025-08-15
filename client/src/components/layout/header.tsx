import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { servicesLinks } from "@/lib/data";

const ListItem = ({ className, title, children, to, icon: Icon }: {
  className?: string;
  title: string;
  children: React.ReactNode;
  to: string;
  icon: React.ElementType;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            className
          )}
        >
          <div className="flex items-center gap-3">
            <Icon className="h-5 w-5 text-primary" />
            <div>
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Your header content */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger 
                className={cn(
                  "p-0 rounded-none bg-transparent",
                  "h-full flex items-center border-b-4 border-transparent",
                  "text-slate-900 dark:text-slate-300",
                  "hover:bg-transparent hover:text-foreground",
                  "focus:bg-transparent focus:text-foreground",
                  "data-[active]:bg-transparent",
                  "data-[state=open]:bg-transparent"
                )}
              >
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-background text-foreground border border-slate-200 dark:border-slate-700">
                <ul className="grid w-[350px] gap-1 p-2 md:w-[400px] grid-cols-1">
                  {servicesLinks.map((service) => (
                    <ListItem 
                      key={service.title} 
                      to={service.to} 
                      title={service.title} 
                      icon={service.icon}
                      className="hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800"
                    >
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
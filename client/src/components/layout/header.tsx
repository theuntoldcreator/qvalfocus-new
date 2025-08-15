// In the imports section, ensure you have these imports:
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Then update the Services dropdown section:
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
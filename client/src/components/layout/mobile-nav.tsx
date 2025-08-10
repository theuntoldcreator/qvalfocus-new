import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { href: string; label: string }[];
}

export function MobileNav({ isOpen, onClose, navLinks }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div 
      className={cn("fixed inset-0 z-40 md:hidden", "bg-black/50 backdrop-blur-sm")}
      onClick={onClose}
    >
      <div 
        className="fixed inset-y-0 right-0 w-64 bg-white dark:bg-slate-900 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col space-y-2 mt-16">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={onClose} 
              className="block py-2 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          
          <div className="pt-4">
            <Button className="w-full" asChild>
              <Link href="/contact" onClick={onClose}>Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
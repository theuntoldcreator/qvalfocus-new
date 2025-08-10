import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className={cn(
      "fixed inset-0 z-40 md:hidden",
      "bg-black/50 backdrop-blur-sm"
    )}>
      <div className="fixed inset-y-0 right-0 w-64 glass dark:glass-dark p-6">
        <div className="flex flex-col space-y-4 mt-16">
          <Link href="/services/staffing" onClick={onClose} className="block py-2 hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/industries" onClick={onClose} className="block py-2 hover:text-primary transition-colors">
            Industries
          </Link>
          <Link href="/jobs" onClick={onClose} className="block py-2 hover:text-primary transition-colors">
            Jobs
          </Link>
          <Link href="/case-studies" onClick={onClose} className="block py-2 hover:text-primary transition-colors">
            Case Studies
          </Link>
          <Link href="/about" onClick={onClose} className="block py-2 hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" onClick={onClose} className="block py-2 hover:text-primary transition-colors">
            Contact
          </Link>
          
          <div className="pt-4 space-y-2">
            <Button variant="outline" className="w-full" asChild>
              <Link href="/contact?type=client" onClick={onClose}>Hire Talent</Link>
            </Button>
            <Button className="w-full" asChild>
              <Link href="/jobs" onClick={onClose}>Find Jobs</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

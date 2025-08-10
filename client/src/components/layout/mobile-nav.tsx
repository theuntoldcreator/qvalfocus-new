import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { services, industries } from "@/lib/data";

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
      <div className="fixed inset-y-0 right-0 w-64 bg-white dark:bg-slate-900 p-6">
        <div className="flex flex-col space-y-2 mt-16">
          <Link href="/" onClick={onClose} className="block py-2 hover:text-primary transition-colors">
            Home
          </Link>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="services" className="border-b-0">
              <AccordionTrigger className="py-2 hover:no-underline hover:text-primary">Services</AccordionTrigger>
              <AccordionContent className="pl-4">
                {services.map((service) => (
                  <Link key={service.id} href={service.link} onClick={onClose} className="block py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                    {service.title}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="industries" className="border-b-0">
              <AccordionTrigger className="py-2 hover:no-underline hover:text-primary">Industries</AccordionTrigger>
              <AccordionContent className="pl-4">
                {industries.map((industry) => (
                  <Link key={industry.id} href={`/industries/${industry.slug}`} onClick={onClose} className="block py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                    {industry.name}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Link href="/about" onClick={onClose} className="block py-2 hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/jobs" onClick={onClose} className="block py-2 hover:text-primary transition-colors">
            Careers
          </Link>
          <Link href="/case-studies" onClick={onClose} className="block py-2 hover:text-primary transition-colors">
            Insights
          </Link>
          
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
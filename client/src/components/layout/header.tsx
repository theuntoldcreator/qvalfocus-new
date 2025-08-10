import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MobileNav } from "./mobile-nav";
import { services, industries } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"services" | "industries" | null>(null);

  const handleMouseEnter = (menu: "services" | "industries") => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const staffingService = services.find(s => s.id === 'staffing');
  const consultingService = services.find(s => s.id === 'consulting');
  const managedService = services.find(s => s.id === 'managed-services');

  return (
    <>
      <header 
        className="fixed top-0 w-full z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700"
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TF</span>
              </div>
              <span className="text-2xl font-bold">TalentForge</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex items-center space-x-6 text-sm font-medium text-slate-700 dark:text-slate-300">
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>

                <div onMouseEnter={() => handleMouseEnter("services")}>
                  <button className="flex items-center outline-none hover:text-primary transition-colors">
                    Services <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                </div>

                <div onMouseEnter={() => handleMouseEnter("industries")}>
                  <button className="flex items-center outline-none hover:text-primary transition-colors">
                    Industries <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                </div>

                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
                <Link href="/jobs" className="hover:text-primary transition-colors">
                  Careers
                </Link>
                <Link href="/case-studies" className="hover:text-primary transition-colors">
                  Insights
                </Link>
              </nav>
              
              <div className="flex items-center space-x-4">
                <ThemeToggle />
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {activeMenu && (
            <motion.div
              className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {activeMenu === "services" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold text-lg mb-4 px-4">Staffing Solution</h3>
                      <ul className="space-y-1">
                        {staffingService && (
                          <li>
                            <Link href={staffingService.link} onClick={() => setActiveMenu(null)} className="group block p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                              <h4 className="font-semibold text-base mb-1 group-hover:text-primary">{staffingService.title}</h4>
                              <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">{staffingService.description}</p>
                            </Link>
                          </li>
                        )}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-4 px-4">Project Solution</h3>
                      <ul className="space-y-1">
                        {consultingService && (
                           <li>
                            <Link href={consultingService.link} onClick={() => setActiveMenu(null)} className="group block p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                              <h4 className="font-semibold text-base mb-1 group-hover:text-primary">{consultingService.title}</h4>
                              <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">{consultingService.description}</p>
                            </Link>
                          </li>
                        )}
                        {managedService && (
                           <li>
                            <Link href={managedService.link} onClick={() => setActiveMenu(null)} className="group block p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                              <h4 className="font-semibold text-base mb-1 group-hover:text-primary">{managedService.title}</h4>
                              <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">{managedService.description}</p>
                            </Link>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                )}
                {activeMenu === "industries" && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {industries.map((industry) => (
                      <Link key={industry.id} href={`/industries/${industry.slug}`} onClick={() => setActiveMenu(null)} className="group block p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                        <h3 className="font-semibold text-base mb-2 group-hover:text-primary">{industry.name}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{industry.description}</p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
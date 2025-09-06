import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface MobileNavProps {
  onClose: () => void;
  navLinks: { to: string; label: string }[];
}

export function MobileNav({ onClose, navLinks }: MobileNavProps) {
  const location = useLocation();

  const sidebarVariants = {
    hidden: { x: "100%" },
    visible: { x: "0%" },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 md:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Content */}
      <motion.div
        variants={sidebarVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
        className="fixed inset-y-0 right-0 w-full max-w-xs bg-white dark:bg-slate-950 shadow-lg flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
          <Link to="/" onClick={onClose}>
            <img src="https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/qvalfocus_ghitel.png" alt="QvalFocus Logo" className="h-8" />
          </Link>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow p-4 overflow-y-auto">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={onClose}
                className={cn(
                  "block py-3 px-4 rounded-lg text-base font-medium transition-colors",
                  location.pathname === link.to
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-slate-100 dark:hover:bg-slate-800"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <Button className="w-full" size="lg" asChild>
            <Link to="/contact" onClick={onClose}>Contact Us</Link>
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
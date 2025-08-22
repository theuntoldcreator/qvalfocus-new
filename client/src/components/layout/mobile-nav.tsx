import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  onClose: () => void;
  navLinks: { to: string; label: string }[];
}

export function MobileNav({ onClose, navLinks }: MobileNavProps) {
  const location = useLocation();

  const navItemClasses = (path: string) => cn(
    "block px-4 py-3 text-lg font-medium transition-colors",
    "text-slate-800 hover:bg-slate-100",
    (location.pathname === path || location.pathname.startsWith(path + '/')) && "text-primary bg-slate-50"
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
      onClick={onClose} // Close when clicking outside
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed right-0 top-0 h-full w-3/4 max-w-sm bg-white shadow-lg p-6 overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
      >
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="flex items-center space-x-2" onClick={onClose}>
            <img src="https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/qvalfocus_ghitel.png" alt="QvalFocus Logo" className="h-10" />
          </Link>
          <button onClick={onClose} className="text-slate-900 hover:text-primary">
            <X className="h-7 w-7" />
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={navItemClasses(link.to)}
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </motion.div>
    </motion.div>
  );
}
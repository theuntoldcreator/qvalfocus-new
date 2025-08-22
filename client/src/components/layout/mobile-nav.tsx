import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { X, Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { companyInfo } from '@/lib/data';

interface MobileNavProps {
  onClose: () => void;
  navLinks: { to: string; label: string }[];
}

export function MobileNav({ onClose, navLinks }: MobileNavProps) {
  const location = useLocation();

  const sidebarVariants = {
    hidden: { x: "-100%" }, // Slide from left
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
        className="fixed inset-y-0 left-0 w-full max-w-xs bg-primary text-primary-foreground shadow-lg flex flex-col" // Dark green background
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-primary/80">
          <Link to="/" onClick={onClose} className="flex items-center space-x-2">
            <img src="https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/qvalfocus_ghitel.png" alt="Avada Logo" className="h-8" />
          </Link>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-primary/80">
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
                    ? "bg-accent text-accent-foreground" // Yellow background for active
                    : "hover:bg-primary/80"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-primary/80">
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>{companyInfo.headquarters}</span>
              </div>
              <a href={`mailto:${companyInfo.email}`} className="flex items-center hover:text-white transition-colors">
                <Mail className="h-5 w-5 mr-3" />
                {companyInfo.email}
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-primary/80">
            <h3 className="text-lg font-semibold mb-4">Call Our Helpline</h3>
            <a href={`tel:${companyInfo.phone}`} className="flex items-center text-accent hover:text-accent/80 transition-colors">
              <Phone className="h-5 w-5 mr-3" />
              <span className="text-xl font-bold">{companyInfo.phone}</span>
            </a>
            <p className="text-sm text-primary-foreground/70 mt-1">[Monday to Friday | 9 AM - 6 PM]</p>
          </div>
        </nav>

        {/* Footer - Social Icons */}
        <div className="p-4 border-t border-primary/80 flex justify-center space-x-6">
          <a href={companyInfo.facebook || "#"} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-white transition-colors">
            <FaFacebookF className="h-5 w-5" />
          </a>
          <a href={companyInfo.twitter || "#"} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-white transition-colors">
            <FaTwitter className="h-5 w-5" />
          </a>
          <a href={companyInfo.instagram || "#"} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-white transition-colors">
            <FaInstagram className="h-5 w-5" />
          </a>
          <a href={companyInfo.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-white transition-colors">
            <FaLinkedinIn className="h-5 w-5" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
"use client";

import { Link, useLocation } from "react-router-dom";
import { X, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { companyInfo } from "@/lib/data";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { to: string; label: string }[];
}

export function MobileNav({ isOpen, onClose, navLinks }: MobileNavProps) {
  const location = useLocation();

  const navItemClasses = (path: string) => cn(
    "block px-4 py-3 text-lg font-medium transition-colors",
    "text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700",
    (location.pathname === path || location.pathname.startsWith(path + '/')) && "text-primary bg-slate-50 dark:bg-slate-800"
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={onClose} // Close when clicking outside
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed left-0 top-0 h-full w-3/4 max-w-sm bg-white dark:bg-slate-900 shadow-lg p-6 overflow-y-auto flex flex-col"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
          >
            {/* Header with Logo and Close Button */}
            <div className="flex justify-between items-center mb-8">
              <Link to="/" className="flex items-center space-x-2" onClick={onClose}>
                <img src="https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/qvalfocus_ghitel.png" alt="QvalFocus Logo" className="h-10" />
              </Link>
              <button onClick={onClose} className="text-slate-900 dark:text-white hover:text-primary">
                <X className="h-7 w-7" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-grow">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Navigation</h3>
              <nav className="flex flex-col gap-2 mb-8">
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

              {/* Get In Touch Section */}
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h3>
              <div className="space-y-2 text-slate-600 dark:text-slate-400 mb-8 px-4">
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                  <span>{companyInfo.headquarters}</span>
                </div>
                <div className="flex items-start">
                  <Mail className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                  <a href={`mailto:${companyInfo.email}`} className="hover:text-primary">{companyInfo.email}</a>
                </div>
              </div>
            </div>

            {/* Call Our Helpline Section */}
            <div className="bg-theme-black text-white p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-primary mb-2">Call Our Helpline</h3>
              <a href={`tel:${companyInfo.phone}`} className="text-2xl font-bold block mb-1 hover:text-primary transition-colors">
                {companyInfo.phone}
              </a>
              <p className="text-sm text-slate-300">[Monday to Friday | 9 AM – 6 PM]</p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center space-x-4 bg-theme-black p-4 rounded-lg">
              <a href={companyInfo.facebook || "#"} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a href={companyInfo.twitter || "#"} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <FaYoutube className="h-5 w-5" />
              </a>
              <a href={companyInfo.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <FaLinkedinIn className="h-5 w-5" />
              </a>
              <a href={`mailto:${companyInfo.email}`} className="text-white hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
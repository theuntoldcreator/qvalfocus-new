import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { X, Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'; // Added FaYoutube
// Removed companyInfo import as details are hardcoded from image

interface MobileNavProps {
  onClose: () => void;
  navLinks: { to: string; label: string }[];
}

export function MobileNav({ onClose, navLinks }: MobileNavProps) {
  const location = useLocation();

  const sidebarVariants = {
    hidden: { x: "-100%", opacity: 0 }, // Start invisible and off-screen
    visible: { x: "0%", opacity: 1 }, // Fade in and slide to screen
  };

  // Hardcoded details from the provided image
  const mobileNavCompanyInfo = {
    logoSrc: "https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/qvalfocus_ghitel.png", // Assuming a white logo or filter will be applied
    logoAlt: "Avada Recruitment Agency",
    tagline: "The Global Recruitment Solutions",
    address: "101 Main Street, Queens, New York United States - 11435",
    email: "info@avada-company.com",
    phone: "+1 (800) 555 5555",
    phoneHours: "[Monday to Friday | 9 AM - 6 PM]",
    social: {
      facebook: "#", // Placeholder, update if specific links are needed
      twitter: "#", // Placeholder
      youtube: "#", // Placeholder
      linkedin: "#", // Placeholder
      email: "#", // Placeholder for social email icon
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 md:hidden" // Still hidden on md and up, as desktop nav is separate
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
        className="fixed inset-y-0 left-0 w-full max-w-xs bg-avada-green text-white shadow-lg flex flex-col rounded-r-3xl" // Dark green background with rounded right corners
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-avada-green-darker">
          <Link to="/" onClick={onClose} className="flex items-center space-x-2">
            <img src={mobileNavCompanyInfo.logoSrc} alt={mobileNavCompanyInfo.logoAlt} className="h-8 filter invert" /> {/* Invert filter for white logo */}
            <div className="flex flex-col">
              <span className="text-base font-bold leading-none">{mobileNavCompanyInfo.logoAlt}</span>
            </div>
          </Link>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-avada-green-darker">
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Tagline */}
        <div className="p-4 text-sm text-white/80 border-b border-avada-green-darker">
          {mobileNavCompanyInfo.tagline}
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow p-4 overflow-y-auto">
          <h3 className="text-sm font-bold text-avada-yellow uppercase tracking-wider mb-4">Navigation</h3>
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={onClose}
                className={cn(
                  "block py-3 px-4 rounded-xl text-base font-medium transition-colors", // Changed to rounded-xl
                  location.pathname === link.to
                    ? "bg-avada-green-darker text-avada-yellow" // Active link style
                    : "hover:bg-avada-green-darker"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-avada-green-darker">
            <h3 className="text-sm font-bold text-avada-yellow uppercase tracking-wider mb-4">Get In Touch</h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>{mobileNavCompanyInfo.address}</span>
              </div>
              <a href={`mailto:${mobileNavCompanyInfo.email}`} className="flex items-center hover:text-white transition-colors">
                <Mail className="h-5 w-5 mr-3" />
                {mobileNavCompanyInfo.email}
              </a>
            </div>
          </div>

          <div className="mt-8 p-4 bg-avada-green-darker rounded-lg"> {/* Darker green background for this section */}
            <h3 className="text-sm font-bold text-avada-yellow uppercase tracking-wider mb-4">Call Our Helpline</h3>
            <a href={`tel:${mobileNavCompanyInfo.phone}`} className="flex items-center text-avada-yellow hover:text-avada-yellow/80 transition-colors">
              <Phone className="h-5 w-5 mr-3" />
              <span className="text-xl font-bold">{mobileNavCompanyInfo.phone}</span>
            </a>
            <p className="text-sm text-white/70 mt-1">{mobileNavCompanyInfo.phoneHours}</p>
          </div>
        </nav>

        {/* Footer - Social Icons */}
        <div className="p-4 border-t border-avada-green-darker flex justify-center space-x-6">
          <a href={mobileNavCompanyInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
            <FaFacebookF className="h-5 w-5" />
          </a>
          <a href={mobileNavCompanyInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
            <FaTwitter className="h-5 w-5" />
          </a>
          <a href={mobileNavCompanyInfo.social.youtube} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
            <FaYoutube className="h-5 w-5" />
          </a>
          <a href={mobileNavCompanyInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
            <FaLinkedinIn className="h-5 w-5" />
          </a>
          <a href={`mailto:${mobileNavCompanyInfo.email}`} className="text-white/70 hover:text-white transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
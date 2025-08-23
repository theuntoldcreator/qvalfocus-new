import { companyInfo } from "@/lib/data";
import { Mail, Phone } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export function TopBar() {
  return (
    <div className="bg-slate-800 text-white text-sm py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Left side: Contact Info */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-primary" />
              <span>{companyInfo.phone}</span>
            </div>
            <div className="hidden md:flex items-center">
              <Mail className="h-4 w-4 mr-2 text-primary" />
              <span>{companyInfo.email}</span>
            </div>
          </div>

          {/* Right side: Social Media Icons */}
          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline">Connect with us:</span>
            <div className="flex space-x-2"> {/* Reduced space-x for closer icons */}
              <a href={companyInfo.socials.facebook || "#"} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-slate-700 rounded-md flex items-center justify-center hover:bg-slate-600 transition-colors">
                <FaFacebookF className="h-4 w-4 text-white" />
              </a>
              <a href={companyInfo.socials.twitter || "#"} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-slate-700 rounded-md flex items-center justify-center hover:bg-slate-600 transition-colors">
                <FaTwitter className="h-4 w-4 text-white" />
              </a>
              <a href={companyInfo.socials.instagram || "#"} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-slate-700 rounded-md flex items-center justify-center hover:bg-slate-600 transition-colors">
                <FaInstagram className="h-4 w-4 text-white" />
              </a>
              <a href={companyInfo.socials.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-slate-700 rounded-md flex items-center justify-center hover:bg-slate-600 transition-colors">
                <FaLinkedinIn className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
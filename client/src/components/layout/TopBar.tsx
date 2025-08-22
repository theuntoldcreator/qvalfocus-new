import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { companyInfo } from '@/lib/data';

export function TopBar() {
  return (
    <div className="bg-black text-white text-sm py-2 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <a href={`tel:${companyInfo.phone}`} className="flex items-center hover:text-avada-yellow transition-colors">
            <Phone className="h-4 w-4 mr-2" />
            {companyInfo.phone}
          </a>
          <a href={`mailto:${companyInfo.email}`} className="flex items-center hover:text-avada-yellow transition-colors">
            <Mail className="h-4 w-4 mr-2" />
            {companyInfo.email}
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/contact?type=candidate" className="flex items-center text-avada-yellow hover:text-yellow-300 transition-colors">
            Drop Your CV
          </Link>
          <div className="h-4 w-px bg-slate-700" />
          <div className="flex space-x-3">
            <a href={companyInfo.facebook || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-avada-yellow transition-colors">
              <FaFacebookF className="h-4 w-4" />
            </a>
            <a href={companyInfo.twitter || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-avada-yellow transition-colors">
              <FaTwitter className="h-4 w-4" />
            </a>
            <a href={companyInfo.instagram || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-avada-yellow transition-colors">
              <FaInstagram className="h-4 w-4" />
            </a>
            <a href={companyInfo.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-avada-yellow transition-colors">
              <FaLinkedinIn className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
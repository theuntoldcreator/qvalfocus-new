import { companyInfo, pagesLinks } from "@/lib/data";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">About Us</h3>
            <p className="text-sm">
              We are a leading recruitment agency dedicated to connecting top talent with premier companies. Our mission is to empower careers and build successful teams.
            </p>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-primary" />
              <span>{companyInfo.phone}</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-primary" />
              <span>{companyInfo.email}</span>
            </div>
            <div className="flex items-start">
              <MapPin className="w-4 h-4 mr-2 mt-1 text-primary flex-shrink-0" />
              <span>{companyInfo.address}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {pagesLinks.map((link) => (
                <li key={link.title}>
                  <Link to={link.link} className="hover:text-primary transition-colors text-sm">{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Connect With Us</h3>
            <p className="text-sm">Follow us on social media to stay updated with the latest news and job openings.</p>
            <div className="flex items-center space-x-3">
              <a href={companyInfo.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors">
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a href={companyInfo.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href={companyInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors">
                <FaLinkedinIn className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 bg-slate-700/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white">Newsletter</h3>
            <p className="text-sm">Subscribe to our newsletter to get the latest updates and offers.</p>
            <form className="flex space-x-2">
              <Input type="email" placeholder="Your Email" className="bg-slate-800 border-slate-600 text-white" />
              <Button type="submit" size="icon">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} {companyInfo.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
import { Link } from "react-router-dom";
import { companyInfo } from "@/lib/data";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="relative bg-white text-slate-700 pt-16 pb-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Logo Column */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block">
              <img src="https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/qvalfocus_ghitel.png" alt="QvalFocus Logo" className="h-12" />
            </Link>
          </div>

          {/* Recruitment Column */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-slate-900 mb-4">Recruitment</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link to="/services/staffing-solution" className="hover:text-primary transition-colors">The Process</Link></li>
              <li><Link to="/guides" className="hover:text-primary transition-colors">Guides & Trainings</Link></li>
              <li><Link to="/blogs" className="hover:text-primary transition-colors">Hiring Advice</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Why Choose Us</Link></li>
              <li><Link to="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-slate-900 mb-4">Our Company</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link to="/about" className="hover:text-primary transition-colors">Who We Are</Link></li>
              <li><Link to="/services/staffing-solution" className="hover:text-primary transition-colors">What We Do</Link></li>
              <li><Link to="/blogs" className="hover:text-primary transition-colors">News & Insights</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Help Resources Column */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-slate-900 mb-4">Help Resources</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link to="/jobs" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Support</Link></li>
              <li><Link to="/legal/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Connect with Us Column */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-slate-900 mb-4">Connect with Us</h3>
            <div className="flex items-center space-x-3">
              <a href={companyInfo.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors">
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a href={companyInfo.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors">
                <FaYoutube className="h-5 w-5" />
              </a>
              <a href={companyInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors">
                <FaLinkedinIn className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-slate-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} QvalFocus. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link to="/legal/terms" className="hover:text-primary transition-colors">Terms of Use</Link>
            <Link to="/legal/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { Link } from "react-router-dom";
import { companyInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="relative bg-theme-black text-white pt-20 mt-8 overflow-hidden">
      {/* Background SVG shape */}
      <img 
        src="/images/footer.svg" 
        alt="Footer background shape"
        className="absolute bottom-0 right-0 w-full md:w-1/2 max-w-2xl h-auto opacity-10 pointer-events-none"
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-primary font-bold mb-4">Contact Info</h3>
            <p className="text-slate-300 mb-2">101 Main Street, Queens, New York<br/>United States – 11435</p>
            <p className="text-slate-300 mb-2">info[at]qvalfocus.com</p>
            <p className="font-bold text-lg mb-1">Tel: +1 (800) 555 5555</p>
            <p className="text-sm text-slate-400">[Monday to Friday | 9:00 AM – 6:00 PM]</p>
          </div>
          
          {/* Locations */}
          <div>
            <h3 className="text-primary font-bold mb-4">Locations</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:text-primary transition-colors">India</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">United States</Link></li>
            </ul>
          </div>
          
          {/* Recruitment */}
          <div>
            <h3 className="text-primary font-bold mb-4">Recruitment</h3>
            <ul className="space-y-2">
              <li><Link to="/services/staffing-solution" className="hover:text-primary transition-colors">The Process</Link></li>
              <li><Link to="/guides" className="hover:text-primary transition-colors">Guides & Trainings</Link></li>
              <li><Link to="/blogs" className="hover:text-primary transition-colors">Hiring Advice</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Why Choose Us</Link></li>
              <li><Link to="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
            </ul>
          </div>
          
          {/* Site Links */}
          <div>
            <h3 className="text-primary font-bold mb-4">Site Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-primary transition-colors">Who We Are</Link></li>
              <li><Link to="/services/staffing-solution" className="hover:text-primary transition-colors">What We Do</Link></li>
              <li><Link to="/blogs" className="hover:text-primary transition-colors">News & Insights</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Branding Row */}
        <div className="border-t border-slate-700 py-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img src="https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/qvalfocus_ghitel.png" alt="QvalFocus Logo" className="h-10" />
            <div>
              <span className="font-bold text-lg">QvalFocus</span>
              <p className="text-sm text-slate-400">Recruitment Agency</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold">Your Trusted Partner in Building Careers</p>
          </div>
          <div>
            <Button variant="outline" asChild className="border-white text-white hover:bg-white hover:text-theme-black">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-slate-700 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400 text-center md:text-left">
            © {new Date().getFullYear()} QvalFocus. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-2">
            <a href={companyInfo.facebook} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-slate-700 rounded-md flex items-center justify-center hover:bg-primary transition-colors">
              <FaFacebookF className="h-4 w-4" />
            </a>
            <a href={companyInfo.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-slate-700 rounded-md flex items-center justify-center hover:bg-primary transition-colors">
              <FaTwitter className="h-4 w-4" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-slate-700 rounded-md flex items-center justify-center hover:bg-primary transition-colors">
              <FaYoutube className="h-4 w-4" />
            </a>
            <a href={companyInfo.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-slate-700 rounded-md flex items-center justify-center hover:bg-primary transition-colors">
              <FaLinkedinIn className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
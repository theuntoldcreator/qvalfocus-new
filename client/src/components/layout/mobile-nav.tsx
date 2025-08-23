import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Link, NavLink } from "react-router-dom";
import { companyInfo, pagesLinks } from "@/lib/data";
import { Mail, MapPin, Menu, Phone } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open main menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:w-[320px] bg-slate-800 text-white border-r-slate-700 flex flex-col">
        <SheetHeader>
          <SheetTitle>
            <Link to="/" className="text-2xl font-bold text-white">
              {companyInfo.name}
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="flex-grow overflow-y-auto py-4">
          <nav className="grid gap-2">
            {pagesLinks.map((item) => (
              <NavLink
                key={item.title}
                to={item.link}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-lg font-medium rounded-md transition-colors ${
                    isActive
                      ? "bg-primary text-white"
                      : "hover:bg-slate-700"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="mt-auto border-t border-slate-700 pt-6 pb-4 space-y-4">
          <div>
            <h3 className="px-4 text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Contact Info</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start px-4">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>{companyInfo.address}</span>
              </div>
              <div className="flex items-center px-4">
                <Phone className="w-4 h-4 mr-2" />
                <a href={`tel:${companyInfo.phone}`} className="hover:underline">{companyInfo.phone}</a>
              </div>
              <div className="flex items-center px-4">
                <Mail className="w-4 h-4 mr-2" />
                <a href={`mailto:${companyInfo.email}`} className="hover:underline">{companyInfo.email}</a>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="flex justify-center space-x-4 bg-theme-black p-4 rounded-lg">
              <a href={companyInfo.socials.facebook || "#"} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a href={companyInfo.socials.twitter || "#"} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href={companyInfo.socials.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <FaLinkedinIn className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
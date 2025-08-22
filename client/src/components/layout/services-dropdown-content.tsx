import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'; // Import DropdownMenuItem

export function ServicesDropdownContent() {
  const serviceLinks = [
    { label: "Staffing Solutions", to: "/services/staffing-solution" },
    { label: "Project Solutions", to: "/services/project-solution" },
    { label: "Executive Search", to: "/services/staffing-solution" },
    { label: "Talent Sourcing", to: "/services/staffing-solution" },
    { label: "Jobs Advertising", to: "/jobs" },
    { label: "Career Counseling", to: "/contact?type=candidate" },
  ];

  return (
    <div className="w-56 p-1"> {/* Adjusted width and padding for a cleaner look */}
      {serviceLinks.map((service, index) => (
        <DropdownMenuItem key={index} asChild>
          <Link
            to={service.to}
            className="flex items-center justify-between py-2 px-3 text-sm font-medium text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md"
          >
            <span>{service.label}</span>
            <ArrowRight className="ml-2 h-4 w-4 text-primary" />
          </Link>
        </DropdownMenuItem>
      ))}
    </div>
  );
}
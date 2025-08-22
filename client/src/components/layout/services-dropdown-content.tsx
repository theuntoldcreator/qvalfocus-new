import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ServicesDropdownContent() {
  const serviceLinks = [
    { label: "Executive Search", to: "/services/staffing-solution", imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { label: "Talent Sourcing", to: "/services/staffing-solution", imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { label: "Jobs Advertising", to: "/jobs", imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { label: "Career Counseling", to: "/contact?type=candidate", imageUrl: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
  ];

  return (
    <div className="grid grid-cols-2 gap-0 w-[600px] p-0">
      {/* Left Column: Recruitment Services Description */}
      <div className="bg-avada-green text-white p-8 flex flex-col justify-between rounded-l-md">
        <div>
          <h3 className="text-2xl font-bold mb-4">Recruitment Services</h3>
          <p className="text-avada-light-green text-sm leading-relaxed">
            Lumattis element cum semps honec mare. Dolor auctor urna dignissim sed nunc sit plateas uellentesque tempor.
          </p>
        </div>
        <Button variant="link" asChild className="text-avada-yellow hover:text-yellow-300 p-0 h-auto justify-start">
          <Link to="/services/staffing-solution" className="flex items-center">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Right Column: Service Links with Images */}
      <div className="bg-white dark:bg-slate-800 p-0 rounded-r-md">
        {serviceLinks.map((service, index) => (
          <Link
            key={service.label}
            to={service.to}
            className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-700 last:border-b-0 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            <div className="flex items-center">
              <ArrowRight className="h-4 w-4 text-avada-green rotate-45 mr-3" />
              <span className="font-medium text-slate-900 dark:text-white">{service.label}</span>
            </div>
            <div
              className="w-20 h-12 bg-cover bg-center rounded-md"
              style={{ backgroundImage: `url(${service.imageUrl})` }}
            ></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const reasons = [
  {
    title: "Domain Expertise",
    description: "We specialize in Information Technology and Life Sciences and we live and breathe these industries our recruiters...",
    imageUrl: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    link: "/industries",
  },
  {
    title: "Flexible Engagements",
    description: "Your business isn't one-size-fits-all, and neither are our solutions. From contract and contract-to-hire to direct placement...",
    imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    link: "/services/staffing-solution",
  },
  {
    title: "Quality & Speed",
    description: "We move fast but never at the cost of quality. Our vetting process ensures every candidate we deliver is technically proficient...",
    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    link: "/about",
  },
  {
    title: "Client-Centric Approach",
    description: "We believe partnerships are built on trust, not transactions. That's why we take a consultative approach listening first...",
    imageUrl: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250", // Placeholder, consider a more abstract image
    link: "/contact",
  },
];

export function WhyWorkWithUs() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Why Work With Us?</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Discover the core principles that drive our success and benefit our partners.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden flex flex-col">
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src={reason.imageUrl} 
                  alt={reason.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{reason.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow">
                  {reason.description}
                </p>
                <Link 
                  to={reason.link} 
                  className="font-semibold text-primary hover:text-primary/80 transition-colors self-start mt-auto flex items-center"
                >
                  More Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
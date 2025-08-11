import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const serviceData = [
  {
    title: "Staffing Solutions",
    description: "At QvalFocus, we offer flexible and scalable staffing services tailored to your organization’s goals. Whether you need to fill critical roles quickly, address seasonal hiring spikes, or build a long-term workforce strategy, we ensure you have access to the right talent — when and where you need it.",
    link: "/services/staffing-solution",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Project Solutions",
    description: "We deliver end-to-end project execution for both IT and Life Sciences sectors. Our goal is to help you accelerate delivery, improve efficiency, and meet technical or regulatory requirements with precision.",
    link: "/services/project-solution",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Our Services</h2>
          <p className="text-xl text-slate-600">
            At QvalFocus, we understand that no two organizations are the same. Your business has unique goals, challenges, and timelines — and your staffing and project needs deserve equally unique solutions. We provide comprehensive, scalable, and flexible services that help you attract the right talent, execute high-priority projects, and stay ahead of industry demands.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {serviceData.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden group flex flex-col">
              <div className="overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow">
                  {service.description}
                </p>
                <Link 
                  href={service.link} 
                  className="font-semibold text-primary hover:text-primary/80 transition-colors self-start mt-auto"
                >
                  Read More <ArrowRight className="inline-block ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const serviceData = [
  {
    title: "Staffing Solutions",
    description: "At TalentForge, we offer flexible and scalable staffing services tailored to your organization’s goals. Whether you need to fill critical roles quickly or build a long-term hiring strategy, our solutions ensure you have access to the right talent—when and where you need it.",
    link: "/services/staffing-solution",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Project Solutions",
    description: "At TalentForge, we provide end-to-end project-based solutions designed to help our clients accelerate delivery, improve efficiency, and meet regulatory or technical demands. Whether you’re launching a new application, implementing a compliance initiative, or modernizing infrastructure.",
    link: "/services/project-solution",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">Our Service</h2>
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
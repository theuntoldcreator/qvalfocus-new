import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const serviceCards = [
  {
    title: "Staffing Solutions",
    link: "/services/staffing-solution",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Project Solutions",
    link: "/services/project-solution",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Life Sciences",
    link: "/industries/life-sciences",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Information Technology",
    link: "/industries/information-technology",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export function Services() {
  return (
    <section className="py-12 bg-slate-50 -mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCards.map((service) => (
            <Link key={service.title} to={service.link} className="relative rounded-3xl overflow-hidden h-96 group block">
              <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
              <div className="absolute top-0 left-0 right-0 p-8 text-white">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-white group-hover:text-emerald-600 transition-colors duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
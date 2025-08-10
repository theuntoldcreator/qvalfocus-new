import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";
import { ArrowRight, Users, BarChart3, Settings } from "lucide-react";

const iconMap = {
  staffing: Users,
  consulting: BarChart3,
  "managed-services": Settings,
};

const colorMap = {
  primary: "from-primary-500 to-primary-600 group-hover:from-primary-400 group-hover:to-primary-500",
  accent: "from-accent-500 to-accent-600 group-hover:from-accent-400 group-hover:to-accent-500",
  emerald: "from-emerald-500 to-emerald-600 group-hover:from-emerald-400 group-hover:to-emerald-500",
};

export function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Our Core Services</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            From strategic staffing to transformative consulting, we deliver end-to-end solutions 
            that propel your business forward.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.id as keyof typeof iconMap];
            
            return (
              <div key={service.id} className="group relative">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colorMap[service.color as keyof typeof colorMap]} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative glass dark:glass-dark rounded-2xl p-8 h-full hover:scale-105 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${colorMap[service.color as keyof typeof colorMap]} rounded-xl flex items-center justify-center mb-6 transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className={`w-2 h-2 bg-${service.color}-500 rounded-full mr-3`}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className={`text-${service.color}-600 hover:text-${service.color}-700 p-0`} asChild>
                    <Link href={service.link}>
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

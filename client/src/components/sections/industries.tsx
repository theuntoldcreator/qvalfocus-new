import { Link } from "react-router-dom";
import { industries } from "@/lib/data";
import { Cpu, FlaskConical } from "lucide-react";

const iconMap: { [key: string]: React.ElementType } = {
  "information-technology": Cpu,
  "life-sciences": FlaskConical,
};

export function Industries() {
  return (
    <section id="industries" className="py-20 bg-slate-100 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Industries We Serve</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We specialize in Life Sciences and Information Technology — delivering industry-aligned staffing and project solutions that produce measurable results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {industries.map((industry) => {
            const Icon = iconMap[industry.id];
            
            return (
              <Link key={industry.id} to={`/industries/${industry.slug}`} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 glass dark:glass-dark rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{industry.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{industry.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import { whyChooseUsData } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {whyChooseUsData.map((item) => (
            <div key={item.title} className="flex flex-col items-center">
              <img src={item.image} alt={item.title} className="h-40 mb-6" />
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-500 mb-6">{item.description}</p>
              <Link to="/about" className="font-semibold text-slate-800 hover:text-primary transition-colors flex items-center group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
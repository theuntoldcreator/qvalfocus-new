import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Row: Image Cards */}
          <Link to="/contact?type=client" className="relative rounded-2xl overflow-hidden h-80 group block">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="For Employers"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
              <h3 className="text-3xl font-bold text-white">For Employers</h3>
            </div>
          </Link>
          <Link to="/jobs" className="relative rounded-2xl overflow-hidden h-80 group block">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="For Job Seekers"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
              <h3 className="text-3xl font-bold text-white">For Job Seekers</h3>
            </div>
          </Link>

          {/* Bottom Row: Stats and CTA */}
          <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
            <p className="text-6xl font-bold text-primary mb-2">260k+</p>
            <p className="text-slate-600 dark:text-slate-300">Jobs facilitated each year!</p>
          </div>
          <div className="bg-[#0A2628] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white text-center md:text-left">
              <h3 className="text-2xl font-bold">Find The Right Organization —</h3>
              <p className="text-lg">Upload Your CV For Consultation</p>
            </div>
            <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500 flex-shrink-0">
              <Link to="/contact?type=candidate">
                Drop Your CV <ArrowDownToLine className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
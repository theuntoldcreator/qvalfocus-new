import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronsDown } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Image Background */}
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        alt="Team of professionals collaborating in a modern, bright office"
        className="absolute z-0 w-full h-full object-cover"
      />

      {/* White Gradient Overlay */}
      <div className="absolute inset-0 [background:radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-white via-white/90 to-transparent z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl text-left py-16 lg:py-0">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-sans text-slate-900">
            Connecting <span className="text-primary">Talent</span> with <span className="text-primary">Opportunity</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10">
            Your strategic partner in staffing, consulting, and managed services for Life Sciences and IT.
          </p>
          <Button 
            size="lg" 
            className="font-bold rounded-full px-8 py-6 text-lg"
            asChild
          >
            <Link to="/services/staffing-solution">
              Explore Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          {/* Bottom Links */}
          <div className="mt-16 flex items-center space-x-6 text-slate-700">
            <ChevronsDown className="h-6 w-6 flex-shrink-0 animate-float text-primary" />
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/services/staffing-solution" className="pb-1 border-b-2 border-primary text-primary font-semibold">Staffing</Link>
              <Link to="/services/project-solution" className="pb-1 border-b-2 border-transparent hover:border-primary/50 text-slate-600 hover:text-primary">Projects</Link>
              <Link to="/industries/life-sciences" className="pb-1 border-b-2 border-transparent hover:border-primary/50 text-slate-600 hover:text-primary">Life Sciences</Link>
              <Link to="/industries/information-technology" className="pb-1 border-b-2 border-transparent hover:border-primary/50 text-slate-600 hover:text-primary">IT</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronsDown } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="bg-[#0a0a43] text-white min-h-screen flex items-center"> {/* Ensure section takes full height and centers content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-16 lg:py-0"> {/* Removed min-h-screen here, adjusted padding */}
          {/* Left Column */}
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-sans">
              Connecting Talent with Opportunity
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-lg">
              Your strategic partner in staffing, consulting, and managed services for Life Sciences and IT.
            </p>
            <Button 
              size="lg" 
              className="bg-accent-500 text-white hover:bg-accent-600 font-bold rounded-full px-8 py-6 text-lg"
              asChild
            >
              <Link to="/services/staffing-solution">
                Explore Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            {/* Bottom Links */}
            <div className="mt-16 flex items-center space-x-6 text-slate-300">
              <ChevronsDown className="h-6 w-6 flex-shrink-0 animate-float" />
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <Link to="/services/staffing-solution" className="pb-1 border-b-2 border-white text-white font-semibold">Staffing</Link>
                <Link to="/services/project-solution" className="pb-1 border-b-2 border-transparent hover:border-slate-400">Projects</Link>
                <Link to="/industries/life-sciences" className="pb-1 border-b-2 border-transparent hover:border-slate-400">Life Sciences</Link>
                <Link to="/industries/information-technology" className="pb-1 border-b-2 border-transparent hover:border-slate-400">IT</Link>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative h-[60vh] hidden lg:flex items-center justify-center">
            <div 
              className="absolute inset-0 w-full h-full [clip-path:polygon(25%_0,_100%_0,_100%_100%,_0%_100%)]"
            >
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Team collaborating in a modern office" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
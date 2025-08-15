import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronsDown } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source
          src="https://res.cloudinary.com/div5rg0md/video/upload/v1754902644/production_id_4143013_1080p_b3x6ds.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl text-left py-16 lg:py-0">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-sans text-white">
            Connecting <span className="text-primary">Talent</span> with <span className="text-primary">Opportunity</span>
          </h1>
          <p className="text-xl text-slate-200 mb-10">
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
          <div className="mt-16 flex items-center space-x-6 text-slate-300">
            <ChevronsDown className="h-6 w-6 flex-shrink-0 animate-float text-primary" />
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/services/staffing-solution" className="pb-1 border-b-2 border-primary text-primary font-semibold">Staffing</Link>
              <Link to="/services/project-solution" className="pb-1 border-b-2 border-transparent hover:border-primary/50 text-slate-200 hover:text-primary">Projects</Link>
              <Link to="/industries/life-sciences" className="pb-1 border-b-2 border-transparent hover:border-primary/50 text-slate-200 hover:text-primary">Life Sciences</Link>
              <Link to="/industries/information-technology" className="pb-1 border-b-2 border-transparent hover:border-primary/50 text-slate-200 hover:text-primary">IT</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
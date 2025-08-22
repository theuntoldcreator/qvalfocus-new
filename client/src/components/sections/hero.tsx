import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-900 text-white overflow-hidden">
      <div 
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Team working in an office"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/50"></div> {/* Darker overlay */}
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <p className="text-lg md:text-xl text-slate-200 mb-4 animate-fade-in">
          Helping Job Seekers Get Working Opportunities!
        </p>
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight animate-slide-up">
          Bringing The Global <br className="hidden md:block" /> Recruitment Solutions
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-slide-up">
          <Button size="lg" asChild className="bg-yellow-400 text-slate-950 hover:bg-yellow-500">
            <Link to="/jobs">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="bg-emerald-500 text-white border-emerald-500 hover:bg-emerald-600 hover:border-emerald-600">
            <Link to="/services/staffing-solution">
              What We Offer <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
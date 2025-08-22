import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users } from "lucide-react";
import { HeroStatsCard } from "./hero-stats-card"; // Import the new component

export function Hero() {
  return (
    <section className="relative pt-24 md:pt-32 pb-20 md:pb-32 bg-white text-slate-900 overflow-hidden">
      <div 
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Team working in an office"
          className="w-full h-full object-cover opacity-10" // Lighter opacity for white background
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/70 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-900/70"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <p className="text-sm font-semibold text-avada-green uppercase tracking-wider mb-4 animate-fade-in">
            Better Employment Solutions
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-slide-up">
            Connecting Talent With Opportunities – Start Your Career Today!
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in">
            We know all the hiring requirements of clients – Including business type, job roles, qualifications & skills. Montes purus accesa lorem egstas metus feugiat ultrices. Dui elem ante hendrerit ipsum vitae ullamcorper.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
            <Button size="lg" asChild className="bg-avada-yellow text-slate-950 hover:bg-yellow-500">
              <Link to="/about">
                About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Right Image and Stats */}
        <div className="relative flex flex-col items-center lg:items-end">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Team collaborating"
            className="w-full max-w-md lg:max-w-none h-auto rounded-xl shadow-xl mb-8 animate-fade-in"
          />
          <div className="grid grid-cols-2 gap-4 w-full max-w-md lg:max-w-none">
            <HeroStatsCard 
              icon={Users} 
              value="40k" 
              label="Jobs Placement" 
              bgColor="bg-avada-light-purple" 
              textColor="text-slate-900" 
              iconColor="text-violet-600" 
            />
            <HeroStatsCard 
              icon={TrendingUp} 
              value="6.1%" 
              label="Growth This Year" 
              bgColor="bg-avada-light-green" 
              textColor="text-slate-900" 
              iconColor="text-emerald-600" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
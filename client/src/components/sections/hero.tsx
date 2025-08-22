import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react"; // Using ArrowUpRight for consistency

export function Hero() {
  return (
    <section className="relative pt-8 pb-20 md:pb-32 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden"> {/* Changed to rounded-3xl */}
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Team working in an office"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-start justify-center text-left p-8 md:p-12"> {/* Changed to items-start, text-left, and added padding */}
            <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4 animate-fade-in">
              Helping Job Seekers Get Working Opportunities!
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up max-w-3xl">
              Bringing The Global Recruitment Solutions
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-start animate-slide-up"> {/* Changed to justify-start */}
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-yellow-500">
                <Link to="/about">
                  Learn More <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-avada-green-darker">
                <Link to="/services/staffing-solution">
                  What We Offer <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
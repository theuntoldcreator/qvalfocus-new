import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function AboutSection() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold font-sans text-slate-900 dark:text-white">
              Your Partner in Growth and Innovation
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              With over 50 years of combined leadership experience, we connect high-caliber talent with forward-thinking companies. Our deep domain expertise in Life Sciences and IT ensures a perfect match every time.
            </p>
            
            {/* Stats */}
            <div className="flex space-x-8 pt-4">
              <div>
                <p className="text-4xl font-bold text-primary">95%</p>
                <p className="text-slate-500 dark:text-slate-400">Client Retention</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">2,500+</p>
                <p className="text-slate-500 dark:text-slate-400">Successful Placements</p>
              </div>
            </div>

            <Button size="lg" asChild className="mt-6">
              <Link to="/about">
                Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Image Column */}
          <div className="relative h-80 lg:h-full rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Team collaborating on a project" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
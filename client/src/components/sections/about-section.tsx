import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function AboutSection() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-sans text-slate-900 dark:text-white">
            Your Partner in Growth and Innovation
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            With over 50 years of combined leadership experience, we connect high-caliber talent with forward-thinking companies in Life Sciences and IT.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-8 flex flex-col">
            {/* Card 1: Stat */}
            <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl p-8 flex-grow flex flex-col justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-300 mb-2">A proven track record of success and client satisfaction helps</p>
                <p className="text-5xl font-bold text-slate-900 dark:text-white">95%</p>
                <p className="text-2xl text-slate-700 dark:text-slate-200">Client Retention</p>
              </div>
              <Button variant="ghost" asChild className="self-start p-0 h-auto text-primary hover:text-primary/80 mt-4">
                <Link to="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            {/* Card 2: Bottom Left Image */}
            <div className="rounded-3xl overflow-hidden h-64">
              <img 
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Scientist in a lab" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center Column (Tall Card) */}
          <div className="relative bg-slate-800 rounded-3xl overflow-hidden text-white p-8 flex flex-col justify-between min-h-[30rem] lg:min-h-full">
            <img 
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Team collaborating" 
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative z-10">
              <p className="text-6xl font-bold">2,500+</p>
              <p className="text-3xl">Successful Placements</p>
            </div>
            <div className="relative z-10">
              <p className="text-slate-200">
                Our rigorous vetting process ensures we connect you with professionals who not only have the right skills but also fit your company culture.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 flex flex-col">
            {/* Card 4: Top Right Image */}
            <div className="rounded-3xl overflow-hidden h-64">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="IT professionals working" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Card 5: Bottom Right Text */}
            <div className="bg-slate-800 dark:bg-slate-700 rounded-3xl p-8 text-white flex-grow flex flex-col justify-between">
              <div>
                <p className="text-3xl font-bold mb-2">Domain Expertise</p>
                <p className="text-slate-300">
                  Specialized recruiters who understand the nuances of your industry, ensuring a perfect match every time.
                </p>
              </div>
              <Button variant="ghost" asChild className="self-start p-0 h-auto text-white hover:text-slate-200 mt-4">
                <Link to="/industries">
                  Our Industries <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
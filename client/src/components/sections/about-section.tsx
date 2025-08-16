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
            Pioneering Connections, Driving Progress
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            We are a dedicated team of industry experts passionate about bridging the gap between exceptional talent and innovative companies.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-8 flex flex-col">
            {/* Card 1: Our Mission */}
            <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl p-8 flex-grow flex flex-col justify-between">
              <div>
                <p className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Our Mission</p>
                <p className="text-slate-600 dark:text-slate-300">
                  To empower businesses and professionals by creating synergistic matches that drive innovation and success in the Life Sciences and IT sectors.
                </p>
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
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaborating" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center Column (Tall Card) */}
          <div className="relative bg-slate-800 rounded-3xl overflow-hidden text-white p-8 flex flex-col justify-between min-h-[30rem] lg:min-h-full">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Integrity and Expertise" 
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative z-10">
              <p className="text-5xl font-bold">Integrity & Expertise</p>
            </div>
            <div className="relative z-10">
              <p className="text-slate-200 text-lg">
                These are the pillars of our approach. We operate with transparency and leverage deep industry knowledge to deliver unparalleled results.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 flex flex-col">
            {/* Card 4: Top Right Image */}
            <div className="rounded-3xl overflow-hidden h-64">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Strategic planning" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Card 5: Our Approach */}
            <div className="bg-slate-800 dark:bg-slate-700 rounded-3xl p-8 text-white flex-grow flex flex-col justify-between">
              <div>
                <p className="text-3xl font-bold mb-2">A Partnership Approach</p>
                <p className="text-slate-300">
                  We go beyond transactional recruiting, investing time to understand your unique needs, culture, and goals to ensure a perfect, long-term fit.
                </p>
              </div>
              <Button variant="ghost" asChild className="self-start p-0 h-auto text-white hover:text-slate-200 mt-4">
                <Link to="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
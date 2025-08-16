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
            Who We Are
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            We are a forward-thinking recruitment agency specializing in the Life Sciences and IT sectors. Our journey began with a simple mission: to connect exceptional talent with pioneering companies shaping the future.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-8 flex flex-col">
            {/* Card 1: Our Philosophy */}
            <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl p-8 flex-grow flex flex-col justify-between">
              <div>
                <p className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Our Philosophy</p>
                <p className="text-slate-600 dark:text-slate-300">
                  We believe in building lasting relationships. For us, recruitment is about fostering growth and creating opportunities for both our clients and candidates.
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
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Our team in a modern office" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center Column (Tall Card) */}
          <div className="relative bg-slate-800 rounded-3xl overflow-hidden text-white p-8 flex flex-col justify-between min-h-[30rem] lg:min-h-full">
            <img 
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Commitment to collaboration" 
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative z-10">
              <p className="text-5xl font-bold">Our Commitment</p>
            </div>
            <div className="relative z-10">
              <p className="text-slate-200 text-lg">
                We are committed to excellence. Our rigorous process and deep industry knowledge ensure we deliver results that exceed expectations.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 flex flex-col">
            {/* Card 4: Top Right Image */}
            <div className="rounded-3xl overflow-hidden h-64">
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Diverse team discussion" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Card 5: Our Team */}
            <div className="bg-slate-800 dark:bg-slate-700 rounded-3xl p-8 text-white flex-grow flex flex-col justify-between">
              <div>
                <p className="text-3xl font-bold mb-2">Our Expert Team</p>
                <p className="text-slate-300">
                  Our team is our greatest asset. Comprised of seasoned recruiters and industry specialists, we bring a wealth of experience to every search.
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
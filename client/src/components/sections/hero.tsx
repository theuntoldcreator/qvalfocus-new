import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="pt-32 pb-12 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px]">
          {/* Main Card */}
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="A team of professionals collaborating on a project"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="relative h-full flex flex-col justify-start p-8 md:p-12">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl inline-block max-w-lg">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight font-sans text-slate-900">
                  Build Your Perfect Team
                </h1>
              </div>
            </div>
          </div>

          {/* Side Cards */}
          <div className="flex flex-col gap-8">
            {/* Top Side Card */}
            <div className="bg-accent-200 dark:bg-accent-900/50 rounded-3xl p-8 flex flex-col justify-between flex-1 group">
              <div>
                <div className="inline-block bg-accent/10 text-accent-700 dark:text-accent-300 rounded-full px-3 py-1 text-sm font-medium mb-4">
                  Staffing & Projects
                </div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                  Explore Our Solutions
                </h2>
                <p className="text-slate-600 dark:text-slate-300">
                  Expert talent, crafted for every project.
                </p>
              </div>
              <Button asChild variant="ghost" className="self-end p-2 h-auto">
                <Link to="/services/staffing-solution">
                  <ArrowUpRight className="h-6 w-6 text-slate-600 dark:text-slate-300 group-hover:text-accent-600 transition-colors" />
                </Link>
              </Button>
            </div>

            {/* Bottom Side Card */}
            <div className="relative rounded-3xl overflow-hidden flex-1 group">
              <img
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Scientist working in a modern laboratory"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="relative h-full flex items-end p-8">
                <h3 className="text-xl font-bold text-white">Life Sciences Expertise</h3>
                 <Button asChild variant="ghost" className="absolute top-4 right-4 p-2 h-auto bg-white/20 hover:bg-white/40">
                    <Link to="/industries/life-sciences">
                        <ArrowUpRight className="h-5 w-5 text-white" />
                    </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
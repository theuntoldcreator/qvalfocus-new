import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="pt-32 pb-12 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-8 h-[32rem] md:h-[36rem]">
          
          {/* Main Card */}
          <div className="lg:col-span-2 lg:row-span-2 bg-slate-100 dark:bg-slate-800 rounded-3xl p-8 md:p-12 flex flex-col">
            <div className="flex-grow">
              <div className="inline-block bg-white dark:bg-slate-700 rounded-full px-4 py-1 text-sm font-medium text-slate-700 dark:text-slate-200 mb-4">
                Staffing & Project Solutions
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-sans text-slate-900 dark:text-white">
                Achieve Your Goals with Expert Talent
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-md">
                We connect visionary companies with exceptional talent in Life Sciences and IT, driving innovation and success.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/contact?type=client">
                  Find Talent <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/jobs">Explore Careers</Link>
              </Button>
            </div>
          </div>

          {/* Top Right Card (Image) */}
          <div className="lg:col-span-2 rounded-3xl overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Team of professionals collaborating"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Bottom Right Card (Stats) */}
          <div className="lg:col-span-2 bg-slate-900 dark:bg-black rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-around text-center">
            <div className="mb-4 md:mb-0">
              <p className="text-4xl md:text-5xl font-bold text-primary">2,500+</p>
              <p className="text-slate-300">Successful Placements</p>
            </div>
            <div className="h-12 w-px bg-slate-700 hidden md:block"></div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary">95%</p>
              <p className="text-slate-300">Client Satisfaction</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
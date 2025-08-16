import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center text-white">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="A modern office with professionals working"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-sans">
            Achieve Your Goals with Expert Talent
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10">
            We connect visionary companies with exceptional talent in Life Sciences and IT, driving innovation and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link to="/contact?type=client">
                Find Talent <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900" asChild>
              <Link to="/jobs">Explore Careers</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
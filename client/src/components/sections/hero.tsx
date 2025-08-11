import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative bg-white text-slate-900 overflow-hidden"
      style={{ height: 'calc(100vh - 5rem)', minHeight: '700px' }}
    >
      {/* Static Image Background */}
      <div className="absolute top-0 right-0 h-full w-full md:w-3/5">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://namasteped.com/qvalfocus/assets/img/hero-bg.jpg')` }}
        />
        <div className="absolute inset-0 bg-black/50 md:hidden" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-white from-0% via-white/80 via-30% to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
        {/* Main Content */}
        <div className="flex-grow flex items-center justify-center md:justify-start">
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-sans text-white md:text-slate-900">
              Flexible, Scalable Talent Solutions
            </h1>
            <p className="text-lg md:text-xl text-slate-300 md:text-slate-600 mb-8 max-w-lg">
              At QvalFocus, we offer flexible and scalable staffing services tailored to your organization’s goals. Whether you need to fill critical roles quickly, address seasonal hiring spikes, or build a long-term workforce strategy, we ensure you have access to the right talent — when and where you need it.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full px-8 py-6 text-lg"
              asChild
            >
              <a href="/contact">Get In Touch <ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button>
          </div>
        </div>

        {/* KPIs Section (from the reference site's hero bottom) */}
        <div className="hidden md:flex items-center justify-center gap-8 pb-8">
          <div className="grid grid-cols-4 gap-8 w-full max-w-4xl">
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900">2,500+</div>
              <div className="text-sm text-slate-600">Successful Placements</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900">95%</div>
              <div className="text-sm text-slate-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900">15 Days</div>
              <div className="text-sm text-slate-600">Avg. Time to Fill</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900">Fortune 500</div>
              <div className="text-sm text-slate-600">Partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
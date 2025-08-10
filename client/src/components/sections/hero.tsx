import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { kpis } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 parallax"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      >
        <div className="absolute inset-0 bg-slate-900/60"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Connecting <span className="text-gradient">Exceptional Talent</span><br />
            with Visionary Companies
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto">
            Premier staffing, consulting, and managed services across technology, finance, healthcare, and beyond. 
            We don't just fill positions—we forge partnerships that drive innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="px-8 py-4 text-lg hover:scale-105 transition-all duration-300" asChild>
              <Link href="/contact?type=client">Hire Top Talent</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg glass text-white border-white/20 hover:bg-white/10 hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link href="/jobs">Explore Opportunities</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Stats */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
        <div className="glass rounded-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center text-white">
            {kpis.map((kpi, index) => (
              <div 
                key={index}
                className="animate-float"
                style={{ animationDelay: `${kpi.delay}s` }}
              >
                <div className="text-3xl font-bold text-gradient">{kpi.value}</div>
                <div className="text-sm">{kpi.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

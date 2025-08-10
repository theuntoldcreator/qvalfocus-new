import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-slate-50 dark:bg-slate-900 pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Abstract technology background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 dark:text-white mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Driving Operational Excellence Through Deep Domain Expertise.
          </h1>
          <p className="text-xl text-slate-700 dark:text-slate-200 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Merging your vision & our expertise, we help you achieve Excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="px-8 py-4 text-lg bg-green-600 hover:bg-green-700 text-white rounded-full" asChild>
              <Link href="/jobs">Find Job</Link>
            </Button>
            <Button size="lg" className="px-8 py-4 text-lg bg-green-600 hover:bg-green-700 text-white rounded-full" asChild>
              <Link href="/contact?type=client">Find Talent</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
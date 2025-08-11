import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section 
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div> {/* Dark overlay for text readability */}
      <div className="relative z-10 text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
          Connecting <span className="text-gradient">Talent</span> with Opportunity
        </h1>
        <p className="text-xl md:text-2xl text-slate-200 mb-8">
          Your strategic partner in staffing, consulting, and managed services for Life Sciences and IT.
        </p>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full px-8 py-6 text-lg">
          Explore Services <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
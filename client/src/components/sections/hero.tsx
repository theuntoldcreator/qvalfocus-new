import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-50 dark:bg-slate-900">
      <div 
        className="absolute inset-0"
      >
        <video
          src="/images/bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent dark:from-slate-900 dark:via-slate-900/80"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge className="mb-6">Industry Expertise</Badge>
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-slate-900 dark:text-white">
          Deep <span className="text-primary">Industry Knowledge</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto">
          We specialize in Life Sciences and Information Technology — delivering industry-aligned staffing and project solutions that produce measurable results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/jobs">Find Job</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="hover:bg-emerald-600 hover:text-white hover:border-emerald-600">
            <Link to="/contact?type=client">Find Talent</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
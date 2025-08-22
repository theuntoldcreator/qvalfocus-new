import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1507679799977-c9eb8fec6207?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % heroImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-8 pb-20 md:pb-32 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentImageIndex}
              src={heroImages[currentImageIndex]}
              alt="Team working in an office"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/50 to-transparent flex flex-col items-start justify-center text-left p-8 md:p-12">
            <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4 animate-fade-in">
              Helping Job Seekers Get Working Opportunities!
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up max-w-3xl">
              Bringing The Global Recruitment Solutions
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-start animate-slide-up">
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-yellow-500">
                <Link to="/about">
                  Learn More <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
                <Link to="/services/staffing-solution">
                  What We Offer <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
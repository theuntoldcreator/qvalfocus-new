import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
  "/images/hero.jpg", // Changed to hero.jpg
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // With only one image, the interval for changing images is no longer needed.
    // We can keep the state and effect for consistency, but it won't actually cycle.
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % heroImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pb-12 md:pb-16 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentImageIndex}
              src={heroImages[currentImageIndex]}
              alt="People sitting on chairs in a modern office"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover object-left"
            />
          </AnimatePresence>
          {/* Inner shadow overlay */}
          <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_30px_rgba(0,0,0,0.4)]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/50 to-transparent flex flex-col items-start justify-center text-left p-8 md:p-12">
            <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4 animate-fade-in font-freigeist">
              Helping Job Seekers Get Working Opportunities!
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up max-w-3xl font-freigeist">
              Bringing The Global Recruitment Solutions
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-start animate-slide-up">
              <Button size="lg" asChild className="bg-theme-orange text-white hover:bg-theme-orange-dark">
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
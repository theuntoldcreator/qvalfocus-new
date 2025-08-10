import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { heroContent as slides } from "@/lib/data";
import { HeroSlider } from "@/components/hero/hero-slider";

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };
  
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000); // Auto-slide every 8 seconds
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative w-full min-h-[80vh] rounded-3xl flex items-center overflow-hidden transition-all duration-700 ease-in-out"
        >
          <AnimatePresence>
            <motion.div
              key={activeSlide.id}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${activeSlide.image})` }}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>
          
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 md:p-12">
            {/* Left Content */}
            <div className="text-white z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                    {activeSlide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-lg">
                    {activeSlide.description}
                  </p>
                  <Button size="lg" asChild className="bg-white text-slate-900 hover:bg-slate-200 h-12 px-8 text-base">
                    <Link href={activeSlide.buttonLink}>
                      {activeSlide.buttonText}
                    </Link>
                  </Button>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Content (Slider) */}
            <div className="hidden lg:flex justify-center items-center">
              <HeroSlider
                activeSlide={{ ...activeSlide, slideNumber: activeIndex + 1 }}
                onNext={handleNext}
                onPrev={handlePrev}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
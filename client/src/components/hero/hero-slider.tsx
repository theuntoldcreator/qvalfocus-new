import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CircularProgressArc } from "./circular-progress-arc";

interface HeroSliderProps {
  activeSlide: {
    id: string;
    price: string;
    annualYield: string;
    benefit: string;
    slideNumber: number;
  };
  onNext: () => void;
  onPrev: () => void;
}

export function HeroSlider({ activeSlide, onNext, onPrev }: HeroSliderProps) {
  return (
    <div className="relative w-full max-w-sm h-[450px] mx-auto">
      {/* Background Card */}
      <motion.div 
        className="absolute top-4 left-4 w-full h-full rounded-3xl bg-brand-blue"
        initial={{ x: 10, y: 10, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      
      {/* Foreground Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full rounded-3xl bg-brand-red p-8 text-white flex flex-col justify-between"
        >
          {/* Top: Arrows */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Button onClick={onPrev} variant="ghost" size="icon" className="bg-white/10 hover:bg-white/20 rounded-full w-10 h-10">
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <Button onClick={onNext} variant="ghost" size="icon" className="bg-white/10 hover:bg-white/20 rounded-full w-10 h-10">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Middle: Stats */}
          <div className="relative flex flex-col items-center justify-center text-center">
            <CircularProgressArc />
            <div className="text-sm opacity-80">from</div>
            <div className="text-5xl font-bold my-2">{activeSlide.price}</div>
            <div className="text-sm opacity-80">{activeSlide.annualYield}</div>
          </div>

          {/* Bottom: Benefit & Counter */}
          <div className="flex items-end justify-between">
            <div className="text-lg max-w-[120px] leading-tight">{activeSlide.benefit}</div>
            <div className="text-lg font-mono">/{String(activeSlide.slideNumber).padStart(2, '0')}</div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
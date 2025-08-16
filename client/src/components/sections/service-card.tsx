import { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useAnimation, AnimationControls } from "framer-motion";

interface ServiceCardProps {
  service: {
    title: string;
    link: string;
    images: string[];
  };
}

const IMAGE_DURATION = 750; // 0.75 seconds per image

export function ServiceCard({ service }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useMemo(() => service.images.map(() => new AnimationControls()), [service.images]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // This function orchestrates the animation for a single step in the cycle
    const runAnimationStep = (index: number) => {
      // Animate the current bar
      controls[index].start({
        width: '100%',
        transition: { duration: IMAGE_DURATION / 1000, ease: 'linear' }
      });

      // Set a timer to advance to the next state after the animation duration
      timerRef.current = setTimeout(() => {
        // Fill the bar that just finished
        controls[index].start({ width: '100%', transition: { duration: 0 } });
        
        const nextIndex = (index + 1) % service.images.length;
        
        // If we've completed a full cycle, reset all bars before the next state update
        if (nextIndex === 0) {
          setTimeout(() => {
            controls.forEach(c => c.start({ width: '0%', transition: { duration: 0 } }));
            setCurrentIndex(nextIndex);
          }, 50); // Brief pause to show all bars full
        } else {
          setCurrentIndex(nextIndex);
        }
      }, IMAGE_DURATION);
    };

    if (isHovered) {
      runAnimationStep(currentIndex);
    } else {
      // Cleanup on unhover: clear timer, reset index, and reset bars
      if (timerRef.current) clearTimeout(timerRef.current);
      setCurrentIndex(0);
      controls.forEach(c => c.start({ width: '0%', transition: { duration: 0.2 } }));
    }

    // Cleanup function to clear the timer when the component unmounts or dependencies change
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isHovered, currentIndex, controls, service.images.length]);

  return (
    <Link
      to={service.link}
      className="relative rounded-3xl overflow-hidden h-96 group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images */}
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={service.images[currentIndex]}
          alt={service.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      {!isHovered && <img src={service.images[0]} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />}

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>

      {/* Progress Bars */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center gap-1 h-1">
        {service.images.map((_, index) => (
          <div key={index} className="relative flex-1 h-full bg-white/30 rounded-full">
            <motion.div
              className="h-full bg-white rounded-full"
              initial={{ width: "0%" }}
              animate={controls[index]}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-8 text-white">
        <div className="flex justify-end">
          <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300">
            <ArrowRight className="w-5 h-5 text-white group-hover:text-emerald-600 transition-colors duration-300" />
          </div>
        </div>
        <h3 className="text-2xl font-bold self-start">{service.title}</h3>
      </div>
    </Link>
  );
}
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

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
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const controls = service.images.map(() => useAnimation());

  useEffect(() => {
    if (isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % service.images.length);
      }, IMAGE_DURATION);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setCurrentIndex(0);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, service.images.length]);

  useEffect(() => {
    if (isHovered) {
      // Animate current bar
      controls[currentIndex].start({
        width: "100%",
        transition: { duration: IMAGE_DURATION / 1000, ease: "linear" },
      });
      
      // If it's not the first image, fill the previous bar instantly
      if (currentIndex > 0) {
        controls[currentIndex - 1].start({ width: "100%", transition: { duration: 0 } });
      }
      
      // When looping back to the start, reset all bars except the first one
      if (currentIndex === 0) {
        for (let i = 1; i < controls.length; i++) {
          controls[i].start({ width: "0%", transition: { duration: 0 } });
        }
      }
    } else {
      // Reset all on mouse leave
      controls.forEach(control => control.start({ width: "0%", transition: { duration: 0 } }));
    }
  }, [isHovered, currentIndex, controls]);

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
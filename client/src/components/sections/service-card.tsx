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
  const cardRef = useRef<HTMLAnchorElement>(null);
  const controls = service.images.map(() => useAnimation());

  // Effect for handling clicks/taps outside the card to reset hover state
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsHovered(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);

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
      // When the cycle restarts, reset all bars instantly before animating the first one.
      if (currentIndex === 0) {
        controls.forEach(control => {
          control.start({ width: "0%", transition: { duration: 0 } });
        });
      }

      // Animate the current bar to 100% width.
      controls[currentIndex].start({
        width: "100%",
        transition: { duration: IMAGE_DURATION / 1000, ease: "linear" },
      });

      // Instantly fill any previous bars to show the progress within the cycle.
      for (let i = 0; i < currentIndex; i++) {
        controls[i].start({ width: "100%", transition: { duration: 0 } });
      }
    } else {
      // On mouse leave, reset all bars.
      controls.forEach(control => control.start({ width: "0%", transition: { duration: 0 } }));
    }
  }, [isHovered, currentIndex, controls]);

  const handleTouchStart = (e: React.TouchEvent<HTMLAnchorElement>) => {
    // On first tap, prevent navigation and activate hover state
    if (!isHovered) {
      e.preventDefault();
      setIsHovered(true);
    }
    // On second tap, isHovered is true, so this block is skipped,
    // and the subsequent 'click' event will trigger navigation.
  };

  return (
    <Link
      ref={cardRef}
      to={service.link}
      className="relative rounded-3xl overflow-hidden h-96 group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
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
            <ArrowRight className="w-5 h-5 text-white group-hover:text-primary transition-colors duration-300" />
          </div>
        </div>
        <h3 className="text-2xl font-bold self-start">{service.title}</h3>
      </div>
    </Link>
  );
}
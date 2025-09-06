import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
  "https://res.cloudinary.com/dbf2pscbn/image/upload/v1755965174/hero_karigh.jpg",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % heroImages.length
      );
    }, 5000);

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
          <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_30px_rgba(0,0,0,0.4)]"></div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/50 to-transparent flex flex-col items-start justify-center text-left p-8 md:p-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="text-sm font-semibold text-white uppercase tracking-wider mb-4 font-freigeist"
              variants={itemVariants}
            >
              Helping Job Seekers Get Working Opportunities!
            </motion.p>
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl font-freigeist"
              variants={itemVariants}
            >
              Bringing The Global Recruitment Solutions
            </motion.h1>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-start"
              variants={itemVariants}
            >
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
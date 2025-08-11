import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const heroContent = [
  {
    navLabel: "Engineering AI for impact",
    title: "Engineering AI for Real-World Impact",
    description: "We build and deploy robust AI solutions that solve complex business challenges and deliver measurable outcomes.",
    buttonText: "Explore Our Solutions",
    imageUrl: "https://images.unsplash.com/photo-1688583522255-33cf6d83700d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  },
  {
    navLabel: "Agent Foundry",
    title: "Experience the Power of Agentic Business",
    description: "Turn isolated AI pilots into production-grade agent networks with Agent Foundry.",
    buttonText: "Learn More",
    imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  },
  {
    navLabel: "Multi-agent services",
    title: "Orchestrate Intelligent Multi-Agent Services",
    description: "Deploy collaborative agent teams that automate complex workflows and drive unprecedented efficiency.",
    buttonText: "Discover Services",
    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  },
  {
    navLabel: "The QvalFocus Moment",
    title: "Achieve the QvalFocus Moment",
    description: "Empower your organization with talent and project solutions that understand context, anticipate needs, and drive intelligent action.",
    buttonText: "See the Vision",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  },
];

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(1);
  const activeContent = heroContent[activeIndex];
  const isMobile = useIsMobile();

  return (
    <section
      className="relative bg-white text-slate-900 overflow-hidden"
      style={{ height: 'calc(100vh - 5rem)', minHeight: '700px' }}
    >
      {/* Fading Image Background */}
      <div className="absolute top-0 right-0 h-full w-full md:w-3/5">
        <AnimatePresence>
          <motion.div
            key={activeIndex}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${activeContent.imageUrl})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/50 md:hidden" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-white from-0% via-white/80 via-30% to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
        {/* Main Content */}
        <div className="flex-grow flex items-center justify-center md:justify-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="max-w-xl text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-sans text-white md:text-slate-900">
                {activeContent.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 md:text-slate-600 mb-8 max-w-lg">
                {activeContent.description}
              </p>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full px-8 py-6 text-lg"
              >
                {activeContent.buttonText} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation */}
        <motion.div
          className="hidden md:flex items-center gap-8 pb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <ChevronDown className="h-8 w-8 animate-bounce text-slate-400" />
          <nav className="flex items-center gap-8 text-slate-500">
            {heroContent.map((item, index) => (
              <button
                key={item.navLabel}
                onClick={() => setActiveIndex(index)}
                className={`relative text-sm font-medium transition-colors hover:text-slate-900 ${
                  activeIndex === index ? "text-slate-900" : ""
                }`}
              >
                {item.navLabel}
                {activeIndex === index && (
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-2 left-0 w-full h-0.5 bg-slate-900"
                  />
                )}
              </button>
            ))}
          </nav>
        </motion.div>
      </div>
    </section>
  );
}
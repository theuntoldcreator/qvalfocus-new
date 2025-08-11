import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

export function Hero() {
  const navItems = [
    "Engineering AI for impact",
    "Agent Foundry",
    "Multi-agent services",
    "Cognizant Moment",
  ];
  const activeItem = "Agent Foundry";

  return (
    <section
      className="relative bg-[#060c1f] text-white overflow-hidden"
      style={{ height: 'calc(100vh - 5rem)', minHeight: '700px' }}
    >
      {/* Clipped Image Background */}
      <div className="absolute top-0 right-0 h-full w-full md:w-3/5">
        <div
          className="h-full w-full absolute"
          style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}
        >
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Team collaborating in an office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
        {/* Main Content */}
        <div className="flex-grow flex items-center">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-sans">
              Experience the power of agentic business
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-lg">
              Turn isolated AI pilots into production-grade agent networks with Agent Foundry.
            </p>
            <Button
              size="lg"
              className="bg-[#00f5d4] text-[#060c1f] hover:bg-[#00d9b8] font-bold rounded-full px-8 py-6 text-lg"
            >
              Learn more <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>

        {/* Bottom Navigation */}
        <motion.div
          className="hidden md:flex items-center gap-8 pb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <ChevronDown className="h-8 w-8 animate-bounce" />
          <nav className="flex items-center gap-8 text-slate-300">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className={`relative text-sm font-medium transition-colors hover:text-white ${
                  item === activeItem ? "text-white" : ""
                }`}
              >
                {item}
                {item === activeItem && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white" />
                )}
              </a>
            ))}
          </nav>
        </motion.div>
      </div>
    </section>
  );
}
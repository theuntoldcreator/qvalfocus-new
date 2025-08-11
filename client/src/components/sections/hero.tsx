import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ChevronsDown } from "lucide-react";

export function Hero() {
  const heroNavLinks = [
    { href: "#", label: "Engineering AI for impact" },
    { href: "#", label: "Agent Foundry", active: true },
    { href: "#", label: "Multi-agent services" },
    { href: "#", label: "Cognizant Moment" },
  ];

  return (
    <section className="relative h-[calc(100vh-5rem)] min-h-[700px] flex flex-col bg-slate-900 text-white overflow-hidden">
      <div className="flex-grow flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side: Text Content */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Experience the power of agentic business
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-lg">
              Turn isolated AI pilots into production-grade agent networks with Agent Foundry.
            </p>
            <Button size="lg" className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-bold rounded-full px-6 py-3">
              <Link href="#">
                Learn more <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Right Side: Image with Diagonal Clip */}
          <div className="relative h-full w-full hidden lg:block" style={{ height: '500px' }}>
            <motion.div
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0, clipPath: 'polygon(100% 0, 100% 100%, 100% 100%, 100% 0)' }}
              animate={{ opacity: 1, clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(https://images.unsplash.com/photo-1521737852577-684897f092a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)`,
                  clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)'
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-8 text-slate-300">
            <ChevronsDown className="w-6 h-6 animate-bounce" />
            {heroNavLinks.map((link) => (
              <Link key={link.label} href={link.href} className="relative group text-sm font-medium">
                <span>{link.label}</span>
                <span
                  className={`absolute left-0 -bottom-2 w-full h-0.5 bg-white transition-transform duration-300 ease-out ${
                    link.active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
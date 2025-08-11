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
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-grow flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Experience the power of agentic business
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Turn isolated AI pilots into production-grade agent networks with Agent Foundry.
            </p>
            <Button size="lg" className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-bold rounded-full px-6 py-3">
              <Link href="#">
                Learn more <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <motion.div
        className="relative z-10 w-full"
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
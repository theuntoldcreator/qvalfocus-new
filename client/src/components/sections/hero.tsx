import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const heroContent = [
  {
    id: "talent",
    tabTitle: "For Companies",
    title: "Driving Operational Excellence Through Deep Domain Expertise.",
    description:
      "Merging your vision & our expertise, We help you achieve Excellence.",
    buttonText: "Find Talent",
    buttonLink: "/contact?type=client",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: "careers",
    tabTitle: "For Professionals",
    title: "Find Your Next Career-Defining Opportunity",
    description:
      "Discover roles at innovative companies that match your skills, ambitions, and long-term career goals.",
    buttonText: "Explore Careers",
    buttonLink: "/jobs",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: "solutions",
    tabTitle: "Our Solutions",
    title: "End-to-End Solutions for Business Growth",
    description:
      "From strategic staffing to transformative consulting, we deliver solutions that propel your business forward.",
    buttonText: "Explore Services",
    buttonLink: "/services/staffing",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  },
];

export function Hero() {
  const [activeTab, setActiveTab] = useState(heroContent[0].id);
  const activeContent = heroContent.find((item) => item.id === activeTab)!;

  return (
    <section className="relative min-h-screen flex flex-col bg-white text-slate-900 overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute top-0 right-0 h-full w-full lg:w-3/5">
        <AnimatePresence>
          <motion.div
            key={activeContent.id}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${activeContent.image})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, hsl(0 0% 100%) 20%, transparent 100%)",
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center pt-20">
        <div className="max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeContent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                {activeContent.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8">
                {activeContent.description}
              </p>
              <Button size="lg" asChild>
                <Link href={activeContent.buttonLink}>
                  {activeContent.buttonText}
                </Link>
              </Button>
            </motion.div>
          </AnimatePresence>

          {/* Tabs and Divider */}
          <div className="mt-12 w-full">
            <div className="flex justify-start items-center space-x-8 overflow-x-auto mb-6">
              {heroContent.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="relative text-sm font-medium transition-colors text-slate-500 hover:text-slate-900 py-2 whitespace-nowrap"
                >
                  {tab.tabTitle}
                  {activeTab === tab.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900"
                      layoutId="underline"
                    />
                  )}
                </button>
              ))}
            </div>
            <div className="border-t border-slate-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-[calc(100vh-5rem)] min-h-[650px] flex flex-col bg-slate-900 overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-white">
            Driving Operational Excellence Through Deep Domain Expertise.
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
            Merging Your Vision & Our Expertise — We Help You Achieve Excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/jobs">Find Job</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10" asChild>
              <Link href="/contact?type=client">Find Talent</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
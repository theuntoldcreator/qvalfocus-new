import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { MoveUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CardData {
  subtitle: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface CardStackScrollProps {
  cards: CardData[];
}

const Card = ({ card }: { card: CardData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.6 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-5xl p-4"
    >
      <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="p-8 md:p-12 order-2 lg:order-1">
            <MoveUpRight className="w-12 h-12 text-slate-300 dark:text-slate-600 mb-6" />
            <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
              {card.subtitle}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-slate-900 dark:text-white">
              {card.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              {card.description}
            </p>
            <Button asChild className="bg-theme-orange text-white hover:bg-theme-orange-dark">
              <Link to={card.link}>
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="h-64 lg:h-[500px] w-full order-1 lg:order-2">
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function CardStackScroll({ cards }: CardStackScrollProps) {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory no-scrollbar">
      {cards.map((card, index) => (
        <section
          key={index}
          className="h-screen w-full flex items-center justify-center snap-start shrink-0"
        >
          <Card card={card} />
        </section>
      ))}
    </div>
  );
}
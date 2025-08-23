import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MoveUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from '@/lib/utils';

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

export function CardStackScroll({ cards }: CardStackScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardStyles, setCardStyles] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Calculate the scroll progress within the container
      const scrollStart = containerTop;
      const scrollEnd = containerTop + containerHeight - viewportHeight;
      const rawProgress = (scrollY - scrollStart) / (scrollEnd - scrollStart);
      const progress = Math.max(0, Math.min(1, rawProgress));

      const newStyles = cards.map((_, i) => {
        // Each card gets a segment of the total progress to animate
        const cardStartProgress = i / cards.length;
        const cardEndProgress = (i + 1) / cards.length;

        if (progress < cardStartProgress) {
          // Card is waiting to be the active one
          return {
            transform: `scale(${1 - (i * 0.05)}) translateY(${-i * 16}px)`,
            zIndex: cards.length - i,
            opacity: 1,
          };
        }

        if (progress >= cardEndProgress) {
          // Card has been scrolled past
          return {
            transform: `scale(${1 - ((i + 1) * 0.05)}) translateY(${-(i + 1) * 16}px)`,
            zIndex: cards.length - i,
            opacity: 0,
          };
        }

        // Card is currently active and animating
        const progressInCard = (progress - cardStartProgress) / (1 / cards.length);
        
        const scale = 1 - (i + progressInCard) * 0.05;
        const translateY = -(i + progressInCard) * 16;

        return {
          transform: `scale(${scale}) translateY(${translateY}px)`,
          zIndex: cards.length - i,
          opacity: 1,
        };
      });

      setCardStyles(newStyles);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [cards.length]);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${cards.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {cards.map((card, index) => (
          <div
            key={index}
            className="absolute w-full max-w-5xl p-4 transition-transform duration-300 ease-out"
            style={cardStyles[index]}
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
                  <Button asChild className="bg-avada-yellow text-avada-green-darker hover:bg-yellow-400">
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
          </div>
        ))}
      </div>
    </div>
  );
}
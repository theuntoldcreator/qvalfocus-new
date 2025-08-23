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
  const [activeCard, setActiveCard] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const triggerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
            setActiveCard(index + 1);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px', // Trigger when the element is at the vertical center
      }
    );

    triggerRefs.current.forEach((ref) => {
      if (ref) observerRef.current?.observe(ref);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [cards.length]);

  return (
    <div className="relative">
      {/* Scroll triggers */}
      {cards.map((_, index) => (
        <div
          key={`trigger-${index}`}
          ref={(el) => (triggerRefs.current[index] = el)}
          data-index={index}
          className="h-screen" // Each trigger takes up a full screen height
        />
      ))}

      {/* Sticky container for cards */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-5xl h-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className={cn(
                "absolute w-full max-w-5xl p-4 transition-all duration-500 ease-in-out",
                activeCard > index
                  ? "opacity-100"
                  : "opacity-0 translate-y-8"
              )}
              style={{
                transform: `translateY(${(activeCard > index ? (activeCard - 1 - index) * -20 : 0)}px) scale(${1 - (activeCard > index ? (activeCard - 1 - index) * 0.03 : 0)})`,
                zIndex: cards.length - index,
              }}
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
    </div>
  );
}
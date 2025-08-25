import React, { useState, useRef, useEffect } from 'react';
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

export function CardStackScroll({ cards }: CardStackScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardStyles, setCardStyles] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.offsetTop;
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Each card's animation will last for the duration of one viewport height of scrolling
      const scrollDurationPerCard = viewportHeight;
      const totalScrollDuration = scrollDurationPerCard * (cards.length - 1);

      const scrollStart = containerTop;
      const scrollEnd = scrollStart + totalScrollDuration;

      if (scrollY < scrollStart || scrollY > scrollEnd + viewportHeight) {
        return;
      }

      const rawProgress = (scrollY - scrollStart) / totalScrollDuration;
      const progress = Math.max(0, Math.min(1, rawProgress));

      const activeCardIndex = Math.floor(progress * (cards.length - 1));
      const progressInCard = (progress * (cards.length - 1)) - activeCardIndex;

      const newStyles = cards.map((_, i) => {
        let opacity = 0;
        let transform = 'translateY(40px)'; // Default position for cards yet to be seen
        let zIndex = cards.length - i;

        if (i === activeCardIndex) {
          // This is the card currently in view, animating out
          opacity = 1 - progressInCard;
          transform = `translateY(${-progressInCard * 40}px)`; // Moves up
        } else if (i === activeCardIndex + 1) {
          // This is the next card, animating in
          opacity = progressInCard;
          transform = `translateY(${(1 - progressInCard) * 40}px)`; // Moves up from below
        } else if (i < activeCardIndex) {
          // Cards that have already been scrolled past
          opacity = 0;
          transform = 'translateY(-40px)'; // Stay moved up
        }
        
        // Special case for the very first card at the very beginning of the scroll
        if (i === 0 && scrollY <= scrollStart) {
          opacity = 1;
          transform = 'translateY(0px)';
        }

        return {
          transform,
          opacity,
          zIndex,
        };
      });

      setCardStyles(newStyles);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [cards.length]);

  return (
    <div
      ref={containerRef}
      className="relative"
      // The container height determines how long the scroll animation lasts
      style={{ height: `${cards.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {cards.map((card, index) => (
          <div
            key={index}
            className="absolute w-full max-w-5xl p-4"
            style={{
              ...cardStyles[index],
              // Using a quick, smooth transition for the properties that change
              transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
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
          </div>
        ))}
      </div>
    </div>
  );
}
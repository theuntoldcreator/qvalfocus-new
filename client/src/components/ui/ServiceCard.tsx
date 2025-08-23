"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// Utility to clamp a value between a min and max
const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(value, max));

interface ServiceCardProps {
  label: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    srcSet?: string;
    sizes?: string;
  };
  href: string;
  revealDelayMs?: number;
}

export function ServiceCard({
  label,
  title,
  description,
  image,
  href,
  revealDelayMs = 0,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [style, setStyle] = useState<React.CSSProperties>({});
  
  const [revealRef, isRevealed] = useScrollReveal<HTMLAnchorElement>({ threshold: 0.2 });

  const supportsHover = useRef(
    typeof window !== 'undefined' ? window.matchMedia('(hover: hover)').matches : false
  ).current;

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!supportsHover || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const xRatio = (e.clientX - rect.left) / rect.width;
    const yRatio = (e.clientY - rect.top) / rect.height;

    const ry = clamp((xRatio - 0.5) * 16, -8, 8);
    const rx = clamp((0.5 - yRatio) * 16, -8, 8);

    setStyle({
      '--rx': `${rx}deg`,
      '--ry': `${ry}deg`,
    });
  };

  const handleMouseLeave = () => {
    if (!supportsHover) return;
    setStyle({
      '--rx': '0deg',
      '--ry': '0deg',
    });
  };

  return (
    <div className="[perspective:1000px]">
      <Link
        ref={revealRef}
        to={href}
        aria-label={`Read more about ${title}`}
        className={cn(
          "group block relative will-change-transform motion-safe:transition-all motion-safe:duration-500",
          isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}
        style={{ transitionDelay: `${revealDelayMs}ms` }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="relative bg-slate-50 dark:bg-slate-800 rounded-2xl shadow-md motion-safe:transition-all motion-safe:duration-300 [transform-style:preserve-3d] group-hover:shadow-xl group-focus-visible:shadow-xl motion-safe:group-hover:-translate-y-2 motion-safe:group-focus-visible:-translate-y-2"
          style={{
            transform: 'rotateX(var(--rx, 0)) rotateY(var(--ry, 0)) translateZ(0)',
            transition: 'transform 300ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 300ms cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <div className="md:grid md:grid-cols-2 md:items-center gap-6">
            <div className="relative h-64 md:h-full w-full overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
              {/* Skeleton Shimmer */}
              {!isImageLoaded && (
                <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700 animate-pulse"></div>
              )}
              <img
                src={image.src}
                alt={image.alt}
                srcSet={image.srcSet}
                sizes={image.sizes || "(max-width: 1024px) 100vw, 50vw"}
                width={image.width}
                height={image.height}
                loading="lazy"
                decoding="async"
                onLoad={() => setIsImageLoaded(true)}
                className={cn(
                  "w-full h-full object-cover transition-opacity duration-300",
                  isImageLoaded ? "opacity-100" : "opacity-0"
                )}
              />
            </div>
            <div className="p-6 md:p-8">
              <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
                {label}
              </p>
              <h2 className="text-3xl font-serif font-bold mb-4 text-slate-900 dark:text-white">
                {title}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                {description}
              </p>
              <div className="inline-flex items-center font-semibold text-avada-green-darker bg-avada-yellow px-4 py-2 rounded-md transition-colors group-hover:bg-yellow-400 group-focus-visible:bg-yellow-400">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
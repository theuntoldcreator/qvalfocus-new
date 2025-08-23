import { useState, useEffect, useRef, useCallback } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {}
): [(node: T | null) => void, boolean] {
  const { threshold = 0.2, rootMargin = '0px', triggerOnce = true } = options;
  const [isRevealed, setIsRevealed] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const ref = useCallback((node: T | null) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          if (triggerOnce && node) {
            observerRef.current?.unobserve(node);
          }
        }
      },
      { threshold, rootMargin }
    );

    if (node) {
      observerRef.current.observe(node);
    }
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isRevealed];
}
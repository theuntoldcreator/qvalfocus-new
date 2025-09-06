"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (totalHeight > 0) {
      const scrollPosition = window.scrollY;
      // Update the target progress in a ref to avoid re-renders on every scroll event
      progressRef.current = (scrollPosition / totalHeight) * 100;
    } else {
      progressRef.current = 0;
    }
    toggleVisibility();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const animateProgress = () => {
      // Smoothly interpolate the current progress towards the target progress
      const newProgress = progress + (progressRef.current - progress) * 0.1;
      
      // Only update state if the change is significant enough
      if (Math.abs(progressRef.current - newProgress) > 0.01) {
        setProgress(newProgress);
      } else {
        // Snap to the final value if it's very close
        setProgress(progressRef.current);
      }
      
      animationFrameRef.current = requestAnimationFrame(animateProgress);
    };

    // Start the animation loop
    animationFrameRef.current = requestAnimationFrame(animateProgress);

    // Clean up the animation frame on unmount
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [progress]); // The effect re-runs when 'progress' changes, continuing the animation loop

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const circumference = 2 * Math.PI * 20; // 2 * pi * radius
  const offset = circumference - (progress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-50 p-0 w-12 h-12 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-full shadow-lg hover:scale-110 transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
      aria-label="Scroll to top"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="24"
          cy="24"
          r="20"
          stroke="currentColor"
          strokeWidth="3"
          className="text-slate-200 dark:text-slate-700"
        />
        <circle
          cx="24"
          cy="24"
          r="20"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="text-primary -rotate-90 origin-center"
        />
      </svg>
      <ArrowUp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 text-slate-700 dark:text-slate-300" />
    </button>
  );
}
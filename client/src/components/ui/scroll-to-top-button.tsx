"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

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
      const scrollProgress = (scrollPosition / totalHeight) * 100;
      setProgress(scrollProgress);
    } else {
      setProgress(0);
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
          style={{ transition: "stroke-dashoffset 0.1s linear" }}
        />
      </svg>
      <ArrowUp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 text-slate-700 dark:text-slate-300" />
    </button>
  );
}
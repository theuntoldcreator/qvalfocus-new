import { useState, useEffect } from 'react';

/**
 * A custom hook to track whether the user has scrolled past a certain threshold.
 * @param {number} threshold - The scroll distance in pixels to trigger the state change. Defaults to 10.
 * @returns {boolean} - `true` if scrolled past the threshold, `false` otherwise.
 */
export function useScroll(threshold = 10): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Set initial state in case the page loads already scrolled
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isScrolled;
}
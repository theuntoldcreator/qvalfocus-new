import React from 'react';

export function FadingLogoBanner() {
  return (
    <div className="relative h-48 flex items-center justify-center overflow-hidden bg-white dark:bg-slate-900 -mb-px">
      <h1
        className="text-8xl md:text-9xl font-extrabold text-slate-100 dark:text-slate-800 select-none animate-blur-in-out"
      >
        QvalFocus
      </h1>
    </div>
  );
}
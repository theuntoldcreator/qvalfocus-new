import React from 'react';

export function FadingLogoBanner() {
  return (
    <div className="relative h-48 flex items-center justify-center overflow-hidden bg-white dark:bg-slate-900 -mb-px">
      <h1
        className="text-8xl md:text-9xl font-extrabold text-slate-100 dark:text-slate-800 select-none animate-fade-in-out"
        style={{
          maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
        }}
      >
        QvalFocus
      </h1>
    </div>
  );
}
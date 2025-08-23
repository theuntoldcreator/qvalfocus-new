import React from 'react';

export function FadingLogoBanner() {
  return (
    <div className="relative h-48 flex items-center justify-center overflow-hidden bg-white dark:bg-slate-900 -mb-px">
      <img
        src="https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/qvalfocus_ghitel.png"
        alt="QvalFocus Fading Logo"
        className="h-24 md:h-32 select-none"
        style={{
          maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
        }}
      />
    </div>
  );
}
export function CircularProgressArc() {
  return (
    <svg 
      width="240" 
      height="240" 
      viewBox="0 0 240 240" 
      className="absolute inset-0 m-auto text-white/40"
      fill="none"
    >
      <path 
        d="M 50 200 A 90 90 0 1 1 190 200" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeDasharray="2 8"
      />
    </svg>
  );
}
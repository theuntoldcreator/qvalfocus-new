export function FooterCurve() {
  return (
    <div className="absolute bottom-full left-0 w-full text-theme-black overflow-hidden leading-[0]">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-[150px]"
      >
        <path
          d="M0,60 L1000,60 A40,40 0 0 1 1040,100 L1200,100 V120 H0 Z"
          className="fill-current"
        ></path>
      </svg>
    </div>
  );
}
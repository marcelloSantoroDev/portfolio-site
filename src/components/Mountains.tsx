/** As duas montanhas da base do céu. A altura vem da classe. */
export default function Mountains({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 1000 200"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`absolute right-0 bottom-0 left-0 w-full ${className}`}
    >
      <path
        d="M0 120 L90 80 L170 105 L260 52 L360 98 L450 70 L560 112 L660 60 L760 96 L860 74 L1000 110 L1000 200 L0 200 Z"
        fill="var(--color-mountain-far)"
      />
      <path
        d="M0 150 L120 128 L240 146 L380 120 L520 150 L640 132 L780 152 L900 136 L1000 148 L1000 200 L0 200 Z"
        fill="var(--color-mountain-near)"
      />
    </svg>
  );
}

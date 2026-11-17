/** Provisional logo — replace with the official master file when available. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} aria-label="HeroPass">
      <span
        aria-hidden
        className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-lg bg-brand font-display text-lg font-bold text-on-navy"
      >
        <span className="absolute -right-3 top-0 h-full w-5 skew-x-[-20deg] bg-brand-bright" />
        <span className="relative">H</span>
      </span>
      <span className="font-display text-xl font-bold tracking-tight">
        <span className="text-on-navy">Hero</span>
        <span className="text-brand-bright">Pass</span>
      </span>
    </span>
  );
}

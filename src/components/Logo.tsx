export function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  void light;
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} style={{ color: "var(--snow)" }}>
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true" style={{ color: "var(--lime)" }}>
        <circle cx="14" cy="14" r="12.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="5.5" fill="currentColor" />
        <path d="M14 1.5v5M14 21.5v5M1.5 14h5M21.5 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span
        className="font-semibold tracking-[0.08em] text-[15px]"
        style={{ fontFamily: "var(--font-body)" }}
      >
        OROM UGG
      </span>
    </span>
  );
}

const bars = [
  { duration: "0.7s", delay: "0s" },
  { duration: "0.9s", delay: "0.1s" },
  { duration: "0.6s", delay: "0.2s" },
  { duration: "1s", delay: "0.05s" },
  { duration: "0.8s", delay: "0.15s" },
];

export function EqualizerBars({
  animated,
  className = "",
  barClassName = "bg-current",
}: {
  animated: boolean;
  className?: string;
  barClassName?: string;
}) {
  return (
    <span className={`inline-flex items-end gap-[3px] h-4 ${className}`} aria-hidden="true">
      {bars.map((bar, i) => (
        <span
          key={i}
          data-animated={animated}
          className={`eq-bar w-[3px] h-full rounded-sm ${barClassName}`}
          style={{ animationDuration: bar.duration, animationDelay: bar.delay }}
        />
      ))}
    </span>
  );
}

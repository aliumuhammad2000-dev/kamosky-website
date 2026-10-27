import { Icon } from "./site-icons";

type PlaceholderVisualProps = {
  label: string;
  tall?: boolean;
};

export function PlaceholderVisual({ label, tall = false }: PlaceholderVisualProps) {
  const heightClass = tall ? "min-h-112 sm:min-h-136" : "min-h-56";

  return (
    <div
      className={`placeholder-grid relative overflow-hidden bg-forest-950 ${heightClass}`}
      role="img"
      aria-label={`${label} placeholder`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(190,154,81,0.34),transparent_34%),linear-gradient(140deg,rgba(11,50,42,0.9),rgba(24,72,59,0.4))]" />
      <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-6 text-ivory-100">
        <span className="max-w-56 text-xs uppercase tracking-[0.22em] text-ivory-100/70">
          {label}
        </span>
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-gold-300/50 text-gold-200">
          <Icon name="camera" className="size-5" />
        </span>
      </div>
    </div>
  );
}

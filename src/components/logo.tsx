import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function FleetMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-7", className)}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" className="fill-elevated" />
      <path
        d="M7 21.5 12 10h2.2L9.2 21.5H7Zm8.1 0L20.1 10h2.2L17.3 21.5h-2.2Zm8.1 0L28.2 10H30L25.1 21.5h-1.9Z"
        className="fill-primary"
      />
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      className="flex min-w-0 items-center gap-2.5 text-fg no-underline"
      aria-label="CodingFleet home"
    >
      <FleetMark className="shrink-0" />
      {!compact && (
        <span className="hidden font-medium tracking-tight sm:inline">
          Coding<span className="text-primary">Fleet</span>
        </span>
      )}
    </Link>
  );
}

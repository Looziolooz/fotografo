import { SITE } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * The Solari wordmark — an editorial lockup: the name set in the Ogg display
 * serif, wide-tracked uppercase, over a small wide-spaced tagline. Inherits
 * colour from its parent (white over photos, black over content pages).
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex flex-col items-center leading-none", className)}>
      <span className="font-serif text-[clamp(1.5rem,2.4vw,2.15rem)] uppercase tracking-[0.34em] [text-indent:0.34em]">
        {SITE.name}
      </span>
      <span className="mt-[0.55em] font-sans text-[clamp(6.5px,0.66vw,8.5px)] font-medium uppercase tracking-[0.46em] opacity-70 [text-indent:0.46em]">
        Wedding Photography
      </span>
    </span>
  );
}

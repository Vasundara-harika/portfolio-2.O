import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  ghost: string;
  prefix: string;
  accent: string;
  id?: string;
  className?: string;
  children?: ReactNode;
}

export function SectionHeading({ ghost, prefix, accent, id, className, children }: SectionHeadingProps) {
  return (
    <div id={id} className={cn("relative flex flex-col items-center justify-center pt-20 pb-12", className)}>
      <span
        aria-hidden
        className="ghost-text absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ fontSize: "clamp(4rem, 13vw, 16rem)" }}
      >
        {ghost}
      </span>
      <h2 className="relative z-10 text-center text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
        <span className="text-foreground">{prefix} </span>
        <span className="text-gradient">{accent}</span>
      </h2>
      {children && <div className="relative z-10 mt-3 text-muted-foreground text-center max-w-2xl">{children}</div>}
    </div>
  );
}

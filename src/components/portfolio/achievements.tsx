import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { Code, BookOpen, Award, Trophy, Star, Github } from "lucide-react";

const stats = [
  { Icon: Code, value: 200, suffix: "+", label: "LeetCode Problems" },
  { Icon: BookOpen, value: 100, suffix: "+", label: "GFG Solutions" },
  { Icon: Award, value: 9.5, suffix: "", label: "PUC CGPA", decimals: 1 },
  { Icon: Star, value: 10, suffix: "/10", label: "Class X GPA" },
  { Icon: Trophy, value: 1, suffix: "st", label: "Prize · Science Day" },
  { Icon: Github, value: 2026, suffix: "", label: "GSSoC Contributor" },
];

function Counter({ to, decimals = 0 }: { to: number; decimals?: number }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const dur = 1500;
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setV(to * eased);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);

  return <span ref={ref}>{v.toFixed(decimals)}</span>;
}

export function Achievements() {
  return (
    <section className="relative py-20 px-5 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading ghost="ACHIEVEMENTS" prefix="My" accent="ACHIEVEMENTS" id="achievements" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="group relative p-7 rounded-2xl border border-border bg-card/60 hover:border-cyan/60 hover:-translate-y-1.5 hover:shadow-[0_0_40px_-10px_var(--cyan)] transition-all overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-violet/10 blur-2xl group-hover:bg-cyan/20 transition-colors" />
                <s.Icon className="size-8 mb-4 text-violet group-hover:text-cyan transition-colors relative" />
                <div className="text-4xl font-bold text-gradient relative">
                  <Counter to={s.value} decimals={s.decimals ?? 0} />{s.suffix}
                </div>
                <p className="text-muted-foreground text-sm mt-2 relative">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

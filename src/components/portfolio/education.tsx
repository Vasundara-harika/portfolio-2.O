import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { GraduationCap } from "lucide-react";

const edu = [
  { title: "B.Tech ECE", school: "RGUKT Srikakulam", years: "2022 – 2026", grade: "CGPA: 8.8" },
  { title: "PUC MPC", school: "RGUKT Srikakulam", years: "2020 – 2022", grade: "CGPA: 9.5" },
  { title: "Class X", school: "Bhashyam", years: "2019 – 2020", grade: "GPA: 10/10" },
];

export function Education() {
  return (
    <section className="relative py-20 px-5 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading ghost="EDUCATION" prefix="My" accent="EDUCATION" id="education" />

        <div className="relative max-w-3xl mx-auto mt-10 pl-8 md:pl-12">
          <div className="absolute left-2 md:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan via-violet to-transparent" />

          {edu.map((e, i) => (
            <Reveal key={e.title} delay={i * 100}>
              <div className="relative mb-7">
                <div className="absolute -left-[26px] md:-left-[34px] top-3 size-4 rounded-full bg-cyan shadow-[0_0_20px_var(--cyan)] ring-4 ring-background" />
                <div className="p-6 rounded-2xl border border-border bg-card/60 hover:border-cyan/60 hover:shadow-[0_0_30px_-10px_var(--cyan)] transition-all">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="size-6 text-cyan mt-1 shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{e.title}</h3>
                      <p className="text-muted-foreground">{e.school}</p>
                      <div className="flex flex-wrap gap-4 mt-2 text-xs font-mono">
                        <span className="text-muted-foreground">{e.years}</span>
                        <span className="text-violet">{e.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

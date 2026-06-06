import itprof from "@/assets/itprof.png";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
// import { Code2, Server, Database } from "lucide-react";
import { Code2, Server, Database, Sparkles } from "lucide-react";

const skills = [
  {
    Icon: Code2,
    title: "Frontend",
    color: "violet",
    items: [
      "React.js",
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
    ],
  },

  {
    Icon: Server,
    title: "Backend",
    color: "cyan",
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "SQLite",
    ],
  },

  {
    Icon: Sparkles,
    title: "Other Skills",
    color: "pink",
    items: [
      "React Native",
      "AI Tools",
      "Python",
      "C++",
      "DSA",
      "Git",
      "GitHub",
    ],
  },
];

export function About() {
  return (
    <section className="relative py-20 px-5 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading ghost="ABOUT ME" prefix="About" accent="ME" id="about" />

        <div className="grid lg:grid-cols-5 gap-12 items-center mt-8">
          <Reveal className="lg:col-span-2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-3 bg-gradient-to-br from-violet to-cyan rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity" />
              <div className="relative -mt-7 rotate-[-3deg] group-hover:rotate-0 transition-transform duration-500">
                <div className="p-1.5 rounded-3xl bg-gradient-to-br from-violet via-pink to-cyan">
                  <img src={itprof} alt="Vasundara Harika Varanasi" width={768} height={896}
                    className="rounded-[1.4rem] w-[420px] h-[520px] object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full glass border border-cyan/50 text-sm font-mono">
                  <span className="text-cyan">8.8</span> CGPA
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3 space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
              Crafting <span className="text-gradient">scalable apps</span> that solve real-world problems.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              B.Tech ECE student at RGUKT Srikakulam with 8.8 CGPA. Full Stack Developer in the MERN stack
              and React Native. Open source contributor via <span className="text-cyan font-medium">GSSoC 2026</span>.
              I love building scalable apps and solving real-world problems.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              {skills.map(({ Icon, title, color, items }) => (
                <div key={title}
                  className="group p-5 rounded-2xl border border-border bg-card/60 hover:bg-card hover:border-violet/60 hover:-translate-y-1.5 hover:shadow-[0_0_30px_-8px_var(--violet)] transition-all">
                  <Icon className={`size-7 mb-3 text-${color}`} style={{ color: `var(--${color})` }} />
                  <h4 className="font-semibold mb-2">{title}</h4>
                  <ul className="space-y-1 text-xs text-muted-foreground font-mono">
                    {items.map((i) => <li key={i}>· {i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

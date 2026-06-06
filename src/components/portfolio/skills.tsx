import { useEffect, useRef, useState } from "react";

import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiReact,
  SiMongodb,
  SiPostgresql,
  SiSqlite,
  SiCplusplus,
  SiGithub,
} from "react-icons/si";

const skills = [
  {
    name: "React.js",
    pct: 90,
    Icon: FaReact,
    color: "#61DAFB",
  },

  {
    name: "JavaScript",
    pct: 88,
    Icon: FaJs,
    color: "#F7DF1E",
  },

  {
    name: "HTML5",
    pct: 95,
    Icon: FaHtml5,
    color: "#E34F26",
  },

  {
    name: "CSS3",
    pct: 92,
    Icon: FaCss3Alt,
    color: "#1572B6",
  },

  {
    name: "Tailwind CSS",
    pct: 90,
    Icon: SiTailwindcss,
    color: "#38BDF8",
  },

  {
    name: "Bootstrap",
    pct: 80,
    Icon: FaBootstrap,
    color: "#7952B3",
  },

  {
    name: "Node.js",
    pct: 85,
    Icon: FaNodeJs,
    color: "#339933",
  },

  {
    name: "Express.js",
    pct: 82,
    Icon: SiExpress,
    color: "#FFFFFF",
  },

  {
    name: "React Native",
    pct: 50,
    Icon: SiReact,
    color: "#61DAFB",
  },

  {
    name: "MongoDB",
    pct: 80,
    Icon: SiMongodb,
    color: "#47A248",
  },

  {
    name: "PostgreSQL",
    pct: 75,
    Icon: SiPostgresql,
    color: "#336791",
  },

  {
    name: "SQLite",
    pct: 78,
    Icon: SiSqlite,
    color: "#003B57",
  },

  {
    name: "Python",
    pct: 82,
    Icon: FaPython,
    color: "#3776AB",
  },

  {
    name: "C++",
    pct: 78,
    Icon: SiCplusplus,
    color: "#00599C",
  },

  {
    name: "Java",
    pct: 75,
    Icon: FaJava,
    color: "#F89820",
  },

  {
    name: "Git",
    pct: 92,
    Icon: FaGitAlt,
    color: "#F05032",
  },

  {
    name: "GitHub",
    pct: 90,
    Icon: SiGithub,
    color: "#FFFFFF",
  },
];

export function Skills() {

  const [loaded, setLoaded] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {
          setLoaded(true);
        }

      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {

      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }

    };

  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-20 px-5 sm:px-8"
    >

      <div className="mx-auto max-w-7xl">

        <SectionHeading
          ghost="SKILLS"
          prefix="Technical"
          accent="SKILLS"
        />

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">

          {skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 50}>

              <div className="group p-6 rounded-3xl border border-border bg-card/60 hover:border-violet/60 hover:-translate-y-2 hover:shadow-[0_15px_40px_-15px_var(--violet)] transition-all duration-300">

                {/* Icon */}
                <div className="flex justify-center mb-5">

                  <div className="size-20 rounded-2xl bg-secondary/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">

                    <s.Icon
                      className="size-10"
                      style={{ color: s.color }}
                    />

                  </div>

                </div>

                {/* Skill Name */}
                <div className="text-center mb-4">

                  <h3 className="text-lg font-semibold">
                    {s.name}
                  </h3>

                </div>

                {/* Progress */}
                <div>

                  <div className="flex items-center justify-between mb-2">

                    <span className="text-sm text-muted-foreground">
                      Proficiency
                    </span>

                    <span className="font-mono text-sm text-cyan">
                      {s.pct}%
                    </span>

                  </div>

                  {/* Progress Bar */}
                  <div className="h-3 rounded-full bg-secondary overflow-hidden">

                    <div
                      className="h-full rounded-full bg-gradient-to-r from-violet via-pink to-cyan shadow-[0_0_15px_var(--violet)] transition-all duration-[2000ms] ease-out"
                      style={{
                        width: loaded ? `${s.pct}%` : "0%",
                      }}
                    />

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
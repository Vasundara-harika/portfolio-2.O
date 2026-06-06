import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

import {
  Briefcase,
  MapPin,
  Calendar,
} from "lucide-react";

import gssoc1 from "@/assets/gssoc1.png";
import gssoc2 from "@/assets/gssoc2.png";

export function Experience() {
  return (
    <section
      className="relative py-20 px-5 sm:px-8"
    >

      <div className="mx-auto max-w-7xl">

        <SectionHeading
          ghost="EXPERIENCE"
          prefix="Professional"
          accent="EXPERIENCE"
          id="experience"
        />

        <div className="relative max-w-6xl mx-auto mt-16">

          {/* LEFT IMAGE */}
          <div className="hidden lg:block absolute -left-10 top-16">

            <img
              src={gssoc1}
              alt="GSSoC"
              className="w-52 rounded-3xl border border-violet/40 shadow-[0_0_40px_-10px_var(--violet)] hover:scale-105 transition-transform duration-500"
            />

          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden lg:block absolute -right-10 top-16">

            <img
              src={gssoc2}
              alt="GSSoC"
              className="w-52 rounded-3xl border border-cyan/40 shadow-[0_0_40px_-10px_var(--cyan)] hover:scale-105 transition-transform duration-500"
            />

          </div>

          {/* Timeline */}
          <div className="relative max-w-3xl mx-auto pl-8 md:pl-12">

            {/* Line */}
            <div className="absolute left-2 md:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-violet via-cyan to-transparent" />

            <Reveal>

              <div className="relative">

                {/* Dot */}
                <div className="absolute -left-[26px] md:-left-[34px] top-2 size-4 rounded-full bg-violet shadow-[0_0_20px_var(--violet)] ring-4 ring-background" />

                {/* Card */}
                <div className="p-6 md:p-8 rounded-3xl border border-border bg-card/60 hover:border-violet/60 hover:shadow-[0_0_40px_-10px_var(--violet)] transition-all duration-300">

                  {/* Heading */}
                  <div className="flex flex-wrap items-center gap-3 mb-2">

                    <Briefcase className="size-5 text-violet" />

                    <h3 className="text-2xl font-semibold">
                      Open Source Contributor
                    </h3>

                  </div>

                  {/* Subtitle */}
                  <p className="text-cyan font-medium mb-4 text-lg">
                    GSSoC 2026
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-xs font-mono text-muted-foreground mb-5">

                    <span className="inline-flex items-center gap-1">

                      <Calendar className="size-3.5" />

                      2026 – Present

                    </span>

                    <span className="inline-flex items-center gap-1">

                      <MapPin className="size-3.5" />

                      Remote

                    </span>

                  </div>

                  {/* Points */}
                  <ul className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">

                    <li className="flex gap-2">

                      <span className="text-violet">
                        ▸
                      </span>

                      Contributing to open-source projects with developers across India through collaborative development workflows.

                    </li>

                    <li className="flex gap-2">

                      <span className="text-violet">
                        ▸
                      </span>

                      Worked on bug fixing, feature enhancements, pull requests, and Git-based collaboration.

                    </li>

                    <li className="flex gap-2">

                      <span className="text-violet">
                        ▸
                      </span>

                      Improved code quality, documentation, UI consistency, and overall project reliability.

                    </li>

                  </ul>

                </div>

              </div>

            </Reveal>

          </div>

        </div>

      </div>

    </section>
  );
}
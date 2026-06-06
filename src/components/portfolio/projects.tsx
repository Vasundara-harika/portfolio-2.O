import { useState } from "react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

import {
  Github,
  ExternalLink,
} from "lucide-react";

import recipiefinder from "@/assets/recipiefinder.png";
import hand2handimg from "@/assets/hand2hand.png";
import lenssmart from "@/assets/lenssmart.png";
import portfolio1 from "@/assets/portfolio1.png";
import finsight from "@/assets/finsight.png";
import helpdesk from "@/assets/helpdesk.png";
import dewali from "@/assets/diwali.png";
import ipldashboard from "@/assets/ipldashboard.png";

import hand2handppt from "@/assets/hand2hand.pdf";

import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Recipe Finder App",

    categories: ["Full Stack", "React Native"],

    image: recipiefinder,

    accent: "violet",

    live:
      "https://www.linkedin.com/feed/update/urn:li:activity:7441874907061465089/",

    github:
      "https://github.com/Vasundara-harika/recipe-app-mobile",

    desc:
      "Full-stack mobile app with Clerk authentication, REST APIs, Neon PostgreSQL, Gemini AI chatbot integration, and Android APK deployment using Expo EAS.",

    tech: [
      "React Native",
      "Node.js",
      "PostgreSQL",
      "Clerk Auth",
      "Gemini AI",
    ],
  },

  {
    title: "Hand2Hand",

    categories: ["Full Stack"],

    image: hand2handimg,

    ppt: hand2handppt,

    accent: "cyan",

    live:
      "https://handtohandpwa.vercel.app/app/home",

    github:
      "https://github.com/Vasundara-harika/handtohandpwa",

    desc:
      "PWA platform connecting workers with customers through profiles, bookings, job posts, and real-time communication.",

    tech: [
      "React JS",
      "PWA",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },

  {
    title: "LensSmart",

    categories: ["Frontend"],

    image: lenssmart,

    accent: "pink",

    live:
      "https://lens-smart.vercel.app/",

    github:
      "https://github.com/Vasundara-harika/lens-smart",

    desc:
      "Modern e-commerce application with routing, shopping cart functionality, responsive UI, and AI chatbot integration.",

    tech: [
      "React.js",
      "Tailwind CSS",
      "AI Chatbot",
    ],
  },

  {
    title: "Portfolio 1.O",

    categories: ["Frontend"],

    image: portfolio1,

    accent: "violet",

    live:
      "https://vasundara-harika.github.io/portfolio-1/",

    github:
      "https://github.com/Vasundara-harika/portfolio-1",

    desc:
      "Personal portfolio website showcasing projects, skills, animations, responsive layouts, and modern UI design.",

    tech: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Responsive Design",
    ],
  },

  {
  title: "FinSight",

  categories: ["Frontend"],

  image: finsight,

  accent: "cyan",

  live:
    "https://finsight-dashboard-git-main-vasundara-harika-varanasis-projects.vercel.app/",

  github:
    "https://github.com/Vasundara-harika/finsight-dashboard",

  desc:
    "Personal finance dashboard designed to help users track income, monitor expenses, analyze spending habits, and manage money efficiently through interactive charts and clean dashboard UI.",

  tech: [
    "React.js",
    "Dashboard UI",
    "Tailwind CSS",
    "Charts",
    "Finance Tracker",
  ],
},

{
  title: "HelpDesk",

  categories: ["Frontend"],

  image: helpdesk,

  accent: "pink",

  live:
    "https://helpdesk-ruddy-five.vercel.app/",

  github:
    "https://github.com/Vasundara-harika/helpdesk",

  desc:
    "Ticket management system designed to streamline communication between users and technical or operational support teams. Features role-based access for Admin, Technical Team, Operational Team, and Users for efficient issue tracking and resolution.",

  tech: [
    "React.js",
    "Ticket System",
    "Role-Based Access",
    "Tailwind CSS",
    "Dashboard UI",
  ],
},

{
  title: "Diwali Crackers Store",

  categories: ["Frontend"],

  image: dewali,

  accent: "orange",

  live:
    "https://cracker-ruby.vercel.app/",

  github:
    "https://github.com/Vasundara-harika/cracker",

  desc:
    "Festival-themed website developed for marketing and selling Diwali crackers. Features attractive product showcases, responsive UI, smooth navigation, and a festive user experience designed to improve customer engagement and sales.",

  tech: [
    "React.js",
    "E-Commerce UI",
    "Tailwind CSS",
    "Responsive Design",
    "Product Showcase",
  ],
},

{
  title: "IPL Dashboard",

  categories: ["Frontend"],

  image: ipldashboard,

  accent: "cyan",

  live:
    "https://contact-manager-46bs.vercel.app/",

  github:
    "https://github.com/Vasundara-harika/iplDashboard",

  desc:
    "Interactive IPL dashboard application displaying team details, match information, points tables, and cricket statistics through a clean and responsive frontend interface designed for cricket enthusiasts.",

  tech: [
    "React.js",
    "Dashboard UI",
    "Tailwind CSS",
    "Sports Analytics",
    "Responsive Design",
  ],
},

];

const filters = [
  "All",
  "Full Stack",
  "React Native",
  "Frontend",
];

export function Projects() {
  const [filter, setFilter] = useState("All");

  const shown =
    filter === "All"
      ? projects
      : projects.filter((p) =>
          p.categories?.includes(filter)
        );

  return (
    <section className="relative py-20 px-5 sm:px-8">

      <div className="mx-auto max-w-7xl">

        <SectionHeading
          ghost="PROJECTS"
          prefix="Featured"
          accent="PROJECTS"
          id="projects"
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">

          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium border transition-all",

                filter === f
                  ? "bg-violet text-white border-violet shadow-[0_0_20px_-4px_var(--violet)]"
                  : "border-border text-muted-foreground hover:border-violet/60 hover:text-foreground"
              )}
            >
              {f}
            </button>
          ))}

        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {shown.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>

              <article className="group h-full p-6 rounded-3xl border border-border bg-card/60 hover:bg-card hover:border-violet/60 hover:-translate-y-2 hover:shadow-[0_20px_60px_-20px_var(--violet)] transition-all duration-300">

                {/* Project Image */}
                <div className="relative h-56 mb-5 rounded-2xl overflow-hidden border border-border">

                  <a
                    href={p.live || p.ppt || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full h-full"
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </a>

                </div>

                {/* Categories */}
                <div className="flex items-center gap-2 mb-3">

                  <span className="text-xs font-mono px-2 py-0.5 rounded-full border border-cyan/40 text-cyan">

                    {p.categories?.join(" • ")}

                  </span>

                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient transition-colors">

                  {p.title}

                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">

                  {p.desc}

                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">

                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}

                </div>

                {/* Links */}
                <div className="flex gap-3">

                  {/* Live Link */}
                  <a
                    href={p.live || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-violet hover:text-cyan transition-colors"
                  >
                    <ExternalLink className="size-4" />
                    Live
                  </a>

                  {/* GitHub Link */}
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="size-4" />
                    GitHub
                  </a>

                </div>

              </article>

            </Reveal>
          ))}

        </div>

      </div>
      {/* View More Projects Button */}
      <div className="flex justify-center mt-14">

        <a
          href="https://github.com/Vasundara-harika"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-violet/40 bg-card/60 text-lg font-semibold text-foreground hover:border-violet hover:bg-violet/10 hover:shadow-[0_0_30px_-8px_var(--violet)] transition-all duration-300"
        >
          <Github className="size-5" />
          View More Projects on GitHub
        </a>

      </div>

    </section>
  );
}
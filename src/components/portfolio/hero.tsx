import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import { ParticleField } from "./particle-field";
import graduation from "@/assets/graduation.png";
import resume from "@/assets/resume.pdf";

const ROLES = ["Full Stack Developer", "MERN Stack Engineer", "React Native Developer", "Open Source Contributor"];

export function Hero() {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = ROLES[idx];
    const speed = del ? 45 : 85;
    const t = setTimeout(() => {
      if (!del) {
        const next = full.slice(0, text.length + 1);
        setText(next);
        if (next === full) setTimeout(() => setDel(true), 1500);
      } else {
        const next = full.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setIdx((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, idx]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <ParticleField />
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-violet/20 blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-cyan/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8 animate-[fade-in_0.8s_ease-out]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-violet/40 mb-6">
            <span className="size-2 rounded-full bg-success animate-pulse" />
            <span className="text-xs font-mono text-muted-foreground">Available for Projects</span>
          </div>

          <p className="text-muted-foreground font-mono text-lg sm:text-xl md:text-2xl mb-4">
            Hi, I am
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-4">
            <span className="text-gradient">Vasundara Harika</span>
            <br />
            <span className="text-foreground">Varanasi</span>
          </h1>

          <div className="h-10 mt-4 mb-6 font-mono text-xl md:text-2xl text-cyan">
            <span>&gt; </span>
            <span>{text}</span>
            <span className="animate-pulse">|</span>
          </div>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            B.Tech ECE student at RGUKT Srikakulam. I build full-stack web & mobile apps
            with React, Node.js, and AI integrations.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" className="bg-violet hover:bg-violet/90 text-white shadow-[0_0_30px_-6px_var(--violet)]" asChild>
              <a href="#projects">View My Projects</a>
            </Button>
            <Button size="lg" variant="outline" className="border-cyan text-cyan hover:bg-cyan/10 hover:text-cyan" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
            <a
              href={resume}
              download="Vasundara_Harika_Resume.pdf"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Download className="size-4" />
              Download Resume
            </a>
          </div>

          <div className="flex items-center gap-4 mt-10">
            {[
              { Icon: Github, href: "https://github.com/Vasundara-harika", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/vasundara-harika-varanasi", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:vasundaraharikavaranasi@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                className="size-11 grid place-items-center rounded-full border border-border bg-card/60 hover:border-violet hover:text-violet hover:-translate-y-1 transition-all">
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 hidden lg:flex justify-center">
          <div className="relative">

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet to-cyan blur-3xl opacity-40" />

            {/* Image Container */}
            <div className="relative w-[480px] h-[650px]  rounded-3xl overflow-hidden border border-violet/30 glass shadow-2xl">

              <img
                src={graduation}
                alt="Vasundara Harika"
                className="w-full h-full object-cover"
              />

            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground animate-bounce">
        <ArrowDown className="size-5" />
      </a>
    </section>
  );
}

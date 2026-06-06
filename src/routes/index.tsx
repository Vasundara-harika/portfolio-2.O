import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/portfolio/theme-provider";
import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Projects } from "@/components/portfolio/projects";
import { Skills } from "@/components/portfolio/skills";
import { Experience } from "@/components/portfolio/experience";
import { Achievements } from "@/components/portfolio/achievements";
import { Education } from "@/components/portfolio/education";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { ScrollTop } from "@/components/portfolio/scroll-top";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vasundara Harika Varanasi · Full Stack Developer" },
      { name: "description", content: "Portfolio of Vasundara Harika Varanasi — Full Stack & React Native developer, MERN engineer, open-source contributor (GSSoC 2026)." },
      { property: "og:title", content: "Vasundara Harika Varanasi · Full Stack Developer" },
      { property: "og:description", content: "B.Tech ECE student at RGUKT Srikakulam building full-stack web & mobile apps with React, Node.js and AI." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Achievements />
          <Education />
          <Contact />
        </main>
        <Footer />
        <ScrollTop />
        <Toaster position="bottom-right" />
      </div>
    </ThemeProvider>
  );
}

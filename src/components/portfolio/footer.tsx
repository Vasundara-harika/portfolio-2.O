import {
  Github,
  Linkedin,
  Mail,
  Heart,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden pt-28 pb-12 px-5 sm:px-8 border-t border-border">

      {/* Huge Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">

        <h1 className="ghost-text text-[5rem] sm:text-[8rem] md:text-[11rem] lg:text-[15rem]">

          VASUNDARA

        </h1>

      </div>

      {/* Gradient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-violet/20 blur-[120px]" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">

        {/* Real Name */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5">

          <span className="text-gradient">
            Vasundara Harika
          </span>

        </h2>

        {/* Funny / Personality Line */}
        <p className="max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">

          Turning Ideas into code, bugs into features,
          and ideas into interactive experiences ✨

        </p>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-5 mb-10">

          <a
            href="https://github.com/Vasundara-harika"
            target="_blank"
            rel="noreferrer"
            className="size-12 rounded-full border border-border bg-card/60 flex items-center justify-center hover:border-violet hover:text-violet hover:-translate-y-1 transition-all duration-300"
          >
            <Github className="size-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/vasundara-harika-varanasi"
            target="_blank"
            rel="noreferrer"
            className="size-12 rounded-full border border-border bg-card/60 flex items-center justify-center hover:border-cyan hover:text-cyan hover:-translate-y-1 transition-all duration-300"
          >
            <Linkedin className="size-5" />
          </a>

          <a
            href="mailto:vasundaraharikavaranasi@gmail.com"
            className="size-12 rounded-full border border-border bg-card/60 flex items-center justify-center hover:border-pink hover:text-pink hover:-translate-y-1 transition-all duration-300"
          >
            <Mail className="size-5" />
          </a>

        </div>

        {/* Bottom Line */}
        <div className="text-sm text-muted-foreground flex items-center justify-center gap-2">

          <span>
            Made with
          </span>

          <Heart className="size-4 text-pink fill-pink animate-pulse" />

          <span>
            by Vasundara Harika
          </span>

        </div>

      </div>

    </footer>
  );
}
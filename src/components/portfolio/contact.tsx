import { useState } from "react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Send, Check } from "lucide-react";

const EMAIL = "vasundaraharikavaranasi@gmail.com";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="relative py-20 px-5 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading ghost="CONTACT" prefix="Get In" accent="TOUCH" id="contact" />

        <div className="grid lg:grid-cols-2 gap-10 mt-8">
          <Reveal>
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-3">DON'T BE <span className="text-gradient">SHY!</span></h3>
                <p className="text-muted-foreground leading-relaxed">
                  Got a project, an idea, or just want to say hi? Drop a message and I'll get back to you faster than my deploys.
                </p>
                <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full glass border border-success/40">
                  <span className="size-2 rounded-full bg-success animate-pulse" />
                  <span className="text-xs font-mono text-success">Available for Projects</span>
                </div>
              </div>

              <div className="space-y-3">
                <button onClick={copy} className="w-full flex items-center gap-4 p-4 rounded-2xl border border-border bg-card/60 hover:border-violet/60 transition-all text-left group">
                  <span className="size-10 grid place-items-center rounded-xl bg-violet/15 text-violet"><Mail className="size-5" /></span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-xs text-muted-foreground">Email · click to copy</span>
                    <span className="block font-mono text-sm truncate">{EMAIL}</span>
                  </span>
                  {copied ? <Check className="size-5 text-success" /> : <Copy className="size-5 text-muted-foreground group-hover:text-violet" />}
                </button>

                <div className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card/60">
                  <span className="size-10 grid place-items-center rounded-xl bg-cyan/15 text-cyan"><Phone className="size-5" /></span>
                  <span>
                    <span className="block text-xs text-muted-foreground">Phone</span>
                    <span className="block font-mono text-sm">+91 7032633613</span>
                  </span>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card/60">
                  <span className="size-10 grid place-items-center rounded-xl bg-pink/15" style={{ color: "var(--pink)" }}><MapPin className="size-5" /></span>
                  <span>
                    <span className="block text-xs text-muted-foreground">Location</span>
                    <span className="block text-sm">Mandapeta, Andhra Pradesh</span>
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                {[
                  { Icon: Github, href: "https://github.com/Vasundara-harika" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/vasundara-harika-varanasi" },
                  { Icon: Mail, href: `mailto:${EMAIL}` },
                ].map(({ Icon, href }, i) => (
                  <a key={i} href={href} target="_blank" rel="noreferrer"
                    className="size-12 grid place-items-center rounded-xl border border-border bg-card/60 hover:border-violet hover:text-violet hover:-translate-y-1 transition-all">
                    <Icon className="size-5" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form onSubmit={submit} className="p-7 rounded-3xl border border-border bg-card/60 backdrop-blur space-y-5">
              <div className="grid sm:grid-cols-3 gap-4">
                <Input required placeholder="Your Name" className="bg-background/60" />
                <Input required type="email" placeholder="Your Email" className="bg-background/60" />
                <Input required placeholder="Your Subject" className="bg-background/60" />
              </div>
              <Textarea required placeholder="Your Message" rows={7} className="bg-background/60 resize-none" />
              <Button type="submit" size="lg" className="rounded-full px-8 bg-violet hover:bg-violet/90 text-white shadow-[0_0_30px_-6px_var(--violet)]">
                <Send className="size-4" /> SEND
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

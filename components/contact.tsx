"use client";

import { Github, Linkedin, Mail, Send } from "lucide-react";
import { socials } from "@/lib/data";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

const socialIcons = {
  Email: Mail,
  LinkedIn: Linkedin,
  GitHub: Github
};

export function Contact() {
  return (
    <section id="contact" className="section-shell pb-10">
      <Reveal>
        <SectionHeading
          kicker="Contact"
          title="Let&apos;s build something unforgettable."
          copy="Open to creative frontend work, UI/UX collaborations, interactive concepts, and product experiences that need a memorable digital presence."
        />
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="glass-panel rounded-2xl p-6 md:p-8">
          <h3 className="font-display text-2xl font-bold text-pearl">Start a conversation</h3>
          <p className="mt-4 leading-7 text-mist">
            Bring the vision, the product problem, or even the messy first idea. I can help shape it into an interface
            that feels clear, premium, and alive.
          </p>

          <div className="mt-8 grid gap-3">
            {socials.map((social) => {
              const Icon = socialIcons[social.label as keyof typeof socialIcons];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.045] p-4 transition hover:border-cyan/35 hover:bg-cyan/[0.06]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-cyan/10 text-cyan">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-pearl">{social.label}</span>
                    <span className="block break-all text-sm text-mist">{social.value}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </Reveal>

        <Reveal className="rounded-2xl border border-white/10 bg-white/[0.045] p-6 md:p-8" delay={0.08}>
          <form className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-pearl">
                Name
                <input
                  className="h-12 rounded-lg border border-white/10 bg-void/70 px-4 text-pearl outline-none transition placeholder:text-mist/60 focus:border-cyan/50"
                  type="text"
                  name="name"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-pearl">
                Email
                <input
                  className="h-12 rounded-lg border border-white/10 bg-void/70 px-4 text-pearl outline-none transition placeholder:text-mist/60 focus:border-cyan/50"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-bold text-pearl">
              Project Type
              <select
                className="h-12 rounded-lg border border-white/10 bg-void/70 px-4 text-pearl outline-none transition focus:border-cyan/50"
                name="project"
                defaultValue="Interactive Website"
              >
                <option>Interactive Website</option>
                <option>UI/UX Design</option>
                <option>Frontend Development</option>
                <option>Creative Concept</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold text-pearl">
              Message
              <textarea
                className="min-h-36 resize-y rounded-lg border border-white/10 bg-void/70 p-4 text-pearl outline-none transition placeholder:text-mist/60 focus:border-cyan/50"
                name="message"
                placeholder="Tell me about the experience you want to create..."
              />
            </label>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-pearl px-6 py-4 text-sm font-black text-void transition hover:bg-cyan"
            >
              Send Message
              <Send className="h-4 w-4" aria-hidden />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

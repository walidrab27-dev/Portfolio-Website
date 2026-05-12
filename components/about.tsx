import { BadgeCheck, Cpu, Gamepad2, PenTool } from "lucide-react";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

const highlights = [
  { label: "Design-led thinking", icon: PenTool },
  { label: "Interactive frontend craft", icon: Cpu },
  { label: "Gamified interface concepts", icon: Gamepad2 },
  { label: ".NET learning mindset", icon: BadgeCheck }
];

export function About() {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <SectionHeading
          kicker="About Walid"
          title="A developer who treats interface design like world-building."
          copy="Walid Rabei blends frontend development with UI/UX thinking to create digital products that feel sharp, useful, and memorable."
        />
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal className="glass-panel rounded-2xl p-6 md:p-8">
          <p className="text-lg leading-8 text-mist">
            I am a creative frontend developer and UI/UX-focused designer with a strong passion for modern interactive
            web experiences. My work sits between product clarity and cinematic mood: clean structure, confident
            hierarchy, refined motion, and interfaces that invite people to explore.
          </p>
          <p className="mt-5 text-lg leading-8 text-mist">
            I am especially drawn to gamified web design, fantasy-inspired visual systems, and premium digital products.
            Alongside React and modern frontend tools, I am growing a deeper technical foundation through C#, SQL,
            Entity Framework, and .NET.
          </p>
        </Reveal>

        <Reveal className="grid gap-4 sm:grid-cols-2" delay={0.08}>
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:border-cyan/35 hover:bg-cyan/[0.06]">
                <span className="mb-6 grid h-12 w-12 place-items-center rounded-xl border border-cyan/25 bg-cyan/10 text-cyan">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-display text-xl font-bold text-pearl">{item.label}</h3>
                <p className="mt-3 text-sm leading-6 text-mist">
                  Focused on details that make digital products feel responsive, intentional, and alive.
                </p>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

import { skills } from "@/lib/data";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

const accentClasses = {
  cyan: "from-cyan to-sky-300 text-cyan border-cyan/25 bg-cyan/10",
  violet: "from-violet to-fuchsia-300 text-violet border-violet/25 bg-violet/10",
  ember: "from-ember to-yellow-200 text-ember border-ember/25 bg-ember/10",
  mint: "from-mint to-emerald-200 text-mint border-mint/25 bg-mint/10"
};

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <Reveal>
        <SectionHeading
          kicker="Skill Matrix"
          title="Design, motion, and code in one creative toolkit."
          copy="A balanced stack for building polished interfaces from concept and layout to animation and implementation."
        />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          const accent = accentClasses[skill.accent as keyof typeof accentClasses];

          return (
            <Reveal key={skill.name} delay={index * 0.025}>
              <article className="group rounded-2xl border border-white/10 bg-white/[0.045] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-violet">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className={`grid h-12 w-12 place-items-center rounded-xl border ${accent}`}>
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="font-display text-2xl font-black text-pearl">{skill.level}%</span>
                </div>
                <h3 className="font-display text-xl font-bold text-pearl">{skill.name}</h3>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10" aria-label={`${skill.name} proficiency ${skill.level}%`}>
                  <div className={`h-full rounded-full bg-gradient-to-r ${accent.split(" ").slice(0, 2).join(" ")}`} style={{ width: `${skill.level}%` }} />
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

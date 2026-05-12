import { journey } from "@/lib/data";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

export function Experience() {
  return (
    <section id="journey" className="section-shell">
      <Reveal>
        <SectionHeading
          kicker="Journey"
          title="A focused path from visual craft to full product thinking."
          copy="The portfolio frames Walid's growth as a creative developer: design sensitivity, frontend precision, backend learning, and interactive exploration."
        />
      </Reveal>

      <div className="relative grid gap-5 before:absolute before:left-4 before:top-2 before:hidden before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-cyan before:via-violet before:to-ember md:before:block">
        {journey.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <article className="relative grid gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-6 md:ml-12 md:grid-cols-[130px_1fr] md:p-7">
              <span className="absolute -left-[43px] top-8 hidden h-5 w-5 rounded-full border-4 border-void bg-cyan shadow-glow md:block" />
              <div>
                <span className="inline-flex rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-sm font-black text-cyan">{item.year}</span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-pearl">{item.title}</h3>
                <p className="mt-3 leading-7 text-mist">{item.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

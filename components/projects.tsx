import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/data";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <Reveal>
        <SectionHeading
          kicker="Selected Projects"
          title="Cinematic product ideas with practical frontend structure."
          copy="Placeholder showcases designed as a premium portfolio foundation. Replace the links and thumbnails with live work whenever you are ready."
        />
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] transition duration-300 hover:-translate-y-2 hover:border-cyan/35 hover:shadow-glow">
              <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                <Image
                  src={project.image}
                  alt={`${project.title} interface thumbnail`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-pearl">{project.title}</h3>
                <p className="mt-3 min-h-24 text-sm leading-6 text-mist">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1 text-xs font-semibold text-cyan">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <a
                    href={project.demo}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-pearl px-4 py-3 text-sm font-bold text-void transition hover:bg-cyan"
                    aria-label={`Open live demo for ${project.title}`}
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.055] px-4 py-3 text-sm font-bold text-pearl transition hover:border-violet/40 hover:bg-violet/15"
                    aria-label={`Open GitHub repository for ${project.title}`}
                  >
                    <Github className="h-4 w-4" aria-hidden />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

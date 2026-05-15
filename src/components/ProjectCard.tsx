import { Link } from "@tanstack/react-router";
import type { Project } from "@/lib/content";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      to="/work/$slug"
      params={{ slug: project.slug }}
      className="group block reveal"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative overflow-hidden bg-charcoal aspect-[4/5]">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover scale-[1.04] group-hover:scale-100 transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
        <div className="absolute top-5 left-5 right-5 flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-paper/70">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="font-serif text-2xl md:text-3xl text-paper leading-tight max-w-[20ch]">
            {project.title}
          </h3>
          <p className="mt-3 text-sm text-paper/70 max-w-[36ch] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            {project.impactLine}
          </p>
        </div>
      </div>
    </Link>
  );
}

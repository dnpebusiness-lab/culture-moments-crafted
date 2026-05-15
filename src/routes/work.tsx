import { createFileRoute } from "@tanstack/react-router";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/content";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Milestone Inventive" },
      { name: "description", content: "Selected projects: festivals, public programmes, conferences and cultural events produced across Ireland." },
      { property: "og:title", content: "Work — Milestone Inventive" },
      { property: "og:description", content: "A portfolio of festivals, public programmes and cultural projects." },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <PageIntro
        eyebrow="Selected Work"
        title="A portfolio of cultural production."
        subtitle="From national programmes to city-centre festivals — projects spanning programming, production and operational delivery."
      />
      <section className="bg-paper text-charcoal py-20 md:py-28 px-6 md:px-10">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}

export function PageIntro({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="bg-charcoal text-paper pt-40 md:pt-52 pb-20 md:pb-28 px-6 md:px-10 border-b border-white/5">
      <div className="mx-auto max-w-[1600px]">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-8 animate-fade-up">{eyebrow}</p>
        <h1 className="font-serif text-[clamp(2.75rem,7vw,7rem)] leading-[0.98] text-balance max-w-[20ch] animate-fade-up [animation-delay:120ms]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-10 text-paper/70 text-lg md:text-xl max-w-2xl leading-relaxed animate-fade-up [animation-delay:260ms]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

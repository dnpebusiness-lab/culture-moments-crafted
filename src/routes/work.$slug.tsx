import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projects } from "@/lib/content";
import { ProjectCard } from "@/components/ProjectCard";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Project — Milestone Inventive" }] };
    return {
      meta: [
        { title: `${p.title} — Milestone Inventive` },
        { name: "description", content: p.impactLine },
        { property: "og:title", content: `${p.title} — Milestone Inventive` },
        { property: "og:description", content: p.impactLine },
        { property: "og:type", content: "article" },
        { property: "og:image", content: p.image },
        { property: "og:url", content: `/work/${p.slug}` },
      ],
      links: [{ rel: "canonical", href: `/work/${p.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-charcoal text-paper">
      <div className="text-center">
        <h1 className="font-serif text-5xl">Project not found.</h1>
        <Link to="/work" className="inline-block mt-8 border border-paper/30 px-6 py-3 text-[11px] uppercase tracking-[0.22em] hover:border-gold hover:text-gold">Back to work</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center bg-charcoal text-paper">
      <p>{error.message}</p>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[80svh] md:h-[100svh] w-full overflow-hidden bg-charcoal">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover animate-zoom"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/30" />
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-10 pb-20 max-w-[1600px] mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-6 animate-fade-up">
            {project.category} · {project.year}
          </p>
          <h1 className="font-serif text-[clamp(2.5rem,7vw,7rem)] leading-[0.98] text-paper text-balance max-w-[22ch] animate-fade-up [animation-delay:120ms]">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Meta */}
      <section className="bg-paper text-charcoal py-20 md:py-28 px-6 md:px-10 border-b border-charcoal/5">
        <div className="mx-auto max-w-[1600px] grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-8">
            <Meta label="Client / Partner" value={project.client} />
            <Meta label="Year" value={project.year} />
            <Meta label="Services" value={project.tags.join(" · ")} />
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="font-serif text-3xl md:text-5xl leading-[1.1] text-balance">
              {project.impactLine}
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-paper text-charcoal py-20 md:py-32 px-6 md:px-10">
        <div className="mx-auto max-w-3xl space-y-16">
          <Block label="The brief">
            A complex public event with multiple partners, ambitious creative scope and a non-negotiable date in the cultural calendar.
          </Block>
          <Block label="The approach">
            Milestone Inventive shaped the production from first principles — site, story, audience and operations — building a programme that worked at every scale.
          </Block>
          <Block label="What we delivered">
            End-to-end production management across programming, partner coordination, marketing, safety, supplier procurement and live delivery.
          </Block>
          <Block label="Outcome">
            {project.impactLine}
          </Block>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-charcoal py-20 md:py-32 px-6 md:px-10">
        <div className="mx-auto max-w-[1600px] grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={project.image} alt="" loading="lazy" className="h-full w-full object-cover reveal hover:scale-105 transition-transform duration-1000" />
          </div>
          <div className="aspect-[4/5] overflow-hidden md:translate-y-16">
            <img src={project.image} alt="" loading="lazy" className="h-full w-full object-cover reveal hover:scale-105 transition-transform duration-1000" />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-paper text-charcoal py-24 md:py-32 px-6 md:px-10 border-t border-charcoal/5">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-serif text-3xl md:text-5xl">Related work</h2>
            <Link to="/work" className="font-mono text-[11px] uppercase tracking-[0.25em] border-b border-charcoal pb-1 hover:text-madder hover:border-madder">All projects →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {related.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
          </div>
        </div>
      </section>
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-charcoal/50 mb-2">{label}</p>
      <p className="text-charcoal text-base md:text-lg">{value}</p>
    </div>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="reveal">
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-madder mb-4">{label}</p>
      <p className="font-serif text-2xl md:text-3xl leading-snug">{children}</p>
    </div>
  );
}

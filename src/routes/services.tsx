import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "./work";
import { services } from "@/lib/content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Event production, programming, project management — Milestone Inventive" },
      { name: "description", content: "Event production, programming, project management, marketing & comms, research & evaluation, sponsorship, training and conference management." },
      { property: "og:title", content: "Services — Milestone Inventive" },
      { property: "og:description", content: "Cultural production capabilities for festivals, public programmes and conferences in Ireland." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Capabilities"
        title="Eight disciplines, one production team."
        subtitle="Senior practitioners across every stage of cultural production — from creative concept to live delivery, audience research to commercial revenue."
      />
      <section className="bg-charcoal text-paper py-20 md:py-32 px-6 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <ul>
            {services.map((s, i) => (
              <li
                key={s.n}
                className="group relative reveal border-b border-paper/10"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="grid grid-cols-12 items-baseline gap-4 py-10 md:py-14 transition-colors duration-500 hover:bg-white/[0.015]">
                  <span className="col-span-2 md:col-span-1 font-mono text-xs text-gold/70">{s.n}</span>
                  <h2 className="col-span-10 md:col-span-5 font-serif text-3xl md:text-5xl text-paper transition-transform duration-500 group-hover:translate-x-2">
                    {s.title}
                  </h2>
                  <p className="col-span-12 md:col-span-6 text-paper/70 text-base md:text-lg leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <span className="absolute left-0 bottom-0 h-px bg-gold w-0 group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

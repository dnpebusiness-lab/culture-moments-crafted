import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "./work";
import aboutImage from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Milestone Inventive" },
      { name: "description", content: "A Galway-based creative production company specialising in festivals, public programmes and cultural experiences across Ireland." },
      { property: "og:title", content: "About — Milestone Inventive" },
      { property: "og:description", content: "The studio, the team, the approach behind Milestone Inventive." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const team = [
  { name: "Patricia Philbin", role: "Founder · Creative Director", line: "Two decades of festival and cultural production." },
  { name: "Aoife Ní Bhriain", role: "Programme Lead", line: "Curates national cultural programmes and partnerships." },
  { name: "Conor Daly", role: "Production Manager", line: "Site, safety and operations across complex events." },
  { name: "Niamh O'Connor", role: "Marketing & Comms", line: "Audience strategy and campaign delivery." },
  { name: "Eimear Walsh", role: "Research & Evaluation", line: "Audience and impact research that shapes strategy." },
  { name: "Liam Murphy", role: "Sponsorship & Commercial", line: "Sponsorship strategy and partner servicing." },
];

function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="The Studio"
        title="Structure for creativity, at every scale."
        subtitle="Milestone Inventive is a Galway-based creative production company. We work with cities, cultural organisations, public bodies and festival makers to produce experiences that move people."
      />

      <section className="bg-paper text-charcoal py-24 md:py-32 px-6 md:px-10">
        <div className="mx-auto max-w-[1600px] grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 reveal">
            <div className="aspect-[16/11] overflow-hidden">
              <img src={aboutImage} alt="Production team backstage" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 reveal" style={{ transitionDelay: "120ms" }}>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-madder mb-4">Approach</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 leading-tight">Operational precision. Cultural ambition.</h2>
            <p className="text-charcoal/75 leading-relaxed mb-6">
              We bring senior practitioners to every project. The same team that shapes the creative also runs the production — so nothing is lost in translation between idea and delivery.
            </p>
            <p className="text-charcoal/75 leading-relaxed">
              Our work spans national cultural programmes, city festivals, conferences, research projects and public commemorations.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-charcoal text-paper py-24 md:py-32 px-6 md:px-10 border-t border-white/5">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex items-end justify-between mb-16 reveal">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-4">Team</p>
              <h2 className="font-serif text-4xl md:text-6xl max-w-[18ch]">The people behind the production.</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((m, i) => (
              <div key={m.name} className="group reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="aspect-[4/5] overflow-hidden bg-navy mb-5">
                  <div className="h-full w-full bg-gradient-to-br from-navy to-charcoal grayscale group-hover:grayscale-0 transition-all duration-700 flex items-end p-6">
                    <span className="font-serif text-7xl text-paper/20 group-hover:text-gold/50 transition-colors duration-700">
                      {m.name.split(" ").map(p => p[0]).join("")}
                    </span>
                  </div>
                </div>
                <h3 className="font-serif text-2xl">{m.name}</h3>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mt-2">{m.role}</p>
                <p className="text-paper/60 text-sm mt-3">{m.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

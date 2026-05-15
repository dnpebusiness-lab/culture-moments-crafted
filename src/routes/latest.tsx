import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "./work";
import { projects } from "@/lib/content";

export const Route = createFileRoute("/latest")({
  head: () => ({
    meta: [
      { title: "Latest — News & updates — Milestone Inventive" },
      { name: "description", content: "News, press releases, festival updates and opportunities from Milestone Inventive." },
      { property: "og:title", content: "Latest — Milestone Inventive" },
      { property: "og:description", content: "Recent updates, press and opportunities from the studio." },
      { property: "og:url", content: "/latest" },
    ],
    links: [{ rel: "canonical", href: "/latest" }],
  }),
  component: LatestPage,
});

const updates = [
  { cat: "News", title: "Galway Christmas Market returns for another season of light.", excerpt: "A look at the planning, production and city partnership behind one of Ireland's most-loved seasonal events.", img: 0 },
  { cat: "Press Release", title: "Samhain processions confirmed for autumn programme.", excerpt: "Producing the next iteration of fire and shadow on Galway's streets.", img: 4 },
  { cat: "Festival Update", title: "Galway Oyster Festival marks its 70th year.", excerpt: "Looking ahead to a milestone edition of the world's longest-running oyster festival.", img: 2 },
  { cat: "Opportunity", title: "Cruinniú na nÓg — programme partners welcome.", excerpt: "Open call for cultural partners to join the national day of free creativity.", img: 6 },
  { cat: "News", title: "Tonnta — coastal programme in development.", excerpt: "A new site-specific cultural programme along the Atlantic shoreline.", img: 7 },
];

function LatestPage() {
  return (
    <>
      <PageIntro
        eyebrow="Latest"
        title="News, press and opportunities."
        subtitle="A curated stream of recent updates from the studio and the festivals we produce."
      />
      <section className="bg-paper text-charcoal py-20 md:py-28 px-6 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <article className="grid md:grid-cols-2 gap-10 md:gap-16 mb-20 md:mb-28 reveal">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={projects[updates[0].img].image} alt="" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-madder mb-4">{updates[0].cat}</p>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6">{updates[0].title}</h2>
              <p className="text-charcoal/70 leading-relaxed max-w-prose">{updates[0].excerpt}</p>
            </div>
          </article>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 md:gap-16 border-t border-charcoal/10 pt-20">
            {updates.slice(1).map((u, i) => (
              <article key={u.title} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="aspect-[16/10] overflow-hidden mb-6">
                  <img src={projects[u.img].image} alt="" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-1000" />
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-madder mb-3">{u.cat}</p>
                <h3 className="font-serif text-2xl md:text-3xl mb-2 leading-tight">{u.title}</h3>
                <p className="text-charcoal/70">{u.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

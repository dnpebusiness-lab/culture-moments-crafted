import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero.jpg";
import aboutImage from "@/assets/about.jpg";
import { MagneticButton } from "@/components/MagneticButton";
import { CountUp } from "@/components/CountUp";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, services } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Milestone Inventive — Creative production for cultural moments" },
      { name: "description", content: "Galway-based creative production. Festivals, public programmes, conferences and cultural experiences across Ireland." },
      { property: "og:title", content: "Milestone Inventive — Creative production for cultural moments" },
      { property: "og:description", content: "We design, manage and deliver festivals, public programmes and cultural experiences across Ireland." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = projects.slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] w-full overflow-hidden bg-charcoal">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Crowds gathered at a Galway open-air cultural event at night"
            className="h-full w-full object-cover animate-zoom"
            width={1920}
            height={1088}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/30" />
          <div className="absolute inset-0 grain pointer-events-none" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-10 pb-20 md:pb-24 max-w-[1600px] mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-8 animate-fade-up [animation-delay:200ms]">
            Milestone Inventive · Galway · Est. cultural production
          </p>
          <h1 className="font-serif text-[clamp(2.75rem,7.5vw,8rem)] leading-[0.95] text-paper text-balance max-w-[20ch]">
            <span className="block overflow-hidden">
              <span className="block animate-reveal [animation-delay:200ms]">Creative production</span>
            </span>
            <span className="block overflow-hidden">
              <span className="block italic text-gold animate-reveal [animation-delay:400ms]">for cultural moments</span>
            </span>
            <span className="block overflow-hidden">
              <span className="block animate-reveal [animation-delay:600ms]">that move people.</span>
            </span>
          </h1>
          <div className="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-10">
            <p className="max-w-xl text-base md:text-lg text-paper/80 leading-relaxed animate-fade-up [animation-delay:900ms]">
              We design, manage and deliver festivals, public programmes, conferences and cultural experiences across Ireland.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up [animation-delay:1100ms]">
              <Link to="/work">
                <MagneticButton variant="solid">Explore our work</MagneticButton>
              </Link>
              <Link to="/contact">
                <MagneticButton variant="ghost">Start a project</MagneticButton>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-paper/40">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="block w-px h-10 bg-paper/30 origin-top animate-pulse" />
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-paper text-charcoal py-32 md:py-44 px-6 md:px-10">
        <div className="mx-auto max-w-[1600px] grid md:grid-cols-12 gap-12 md:gap-20 items-start">
          <div className="md:col-span-2 hidden md:flex flex-col items-start gap-3 reveal">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-charcoal/50">01 · Studio</span>
            <span className="block w-px h-32 bg-madder origin-top" />
          </div>
          <div className="md:col-span-7 reveal">
            <h2 className="font-serif text-[clamp(2.25rem,5vw,4.75rem)] leading-[1.05] text-balance">
              We bring <span className="italic">structure</span> to creativity.
            </h2>
          </div>
          <div className="md:col-span-3 md:pt-6 reveal" style={{ transitionDelay: "120ms" }}>
            <p className="text-lg leading-relaxed text-charcoal/75">
              Milestone Inventive works at the point where creative vision, public experience and operational delivery meet. From city-wide festivals to national cultural programmes, we turn ambitious ideas into live experiences people remember.
            </p>
          </div>
        </div>
      </section>

      {/* IMPACT NUMBERS */}
      <section className="relative py-32 md:py-40 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(ellipse_at_30%_30%,oklch(0.74_0.12_80/0.5),transparent_60%),radial-gradient(ellipse_at_70%_70%,oklch(0.22_0.05_260/0.7),transparent_60%)]" />
        <div className="relative mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="flex items-end justify-between mb-16 reveal">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-4">02 · Impact</p>
              <h2 className="font-serif text-3xl md:text-5xl text-paper max-w-[18ch]">Numbers tell only part of the story.</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            <Stat n={400000} suffix="+" label="Visitors / Galway Christmas Market" />
            <Stat n={70} suffix="th" label="Year of the Galway Oyster Festival" />
            <Stat n={30} suffix="+" label="Festivals & public programmes delivered" />
            <Stat n={20} suffix="y" label="Combined production experience" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-charcoal py-32 md:py-44 px-6 md:px-10 border-t border-white/5">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex items-end justify-between border-b border-paper/10 pb-10 mb-4 reveal">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-4">03 · Capabilities</p>
              <h2 className="font-serif text-4xl md:text-6xl text-paper">What we do.</h2>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/40 hidden md:block">
              Eight disciplines · One team
            </span>
          </div>
          <ul>
            {services.map((s, i) => (
              <li
                key={s.n}
                className="group relative reveal border-b border-paper/10"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="grid grid-cols-12 items-baseline gap-4 py-8 md:py-12 transition-colors duration-500 hover:bg-white/[0.015]">
                  <span className="col-span-2 md:col-span-1 font-mono text-xs text-gold/70">{s.n}</span>
                  <h3 className="col-span-10 md:col-span-5 font-serif text-2xl md:text-4xl text-paper transition-transform duration-500 group-hover:translate-x-2">
                    {s.title}
                  </h3>
                  <p className="col-span-12 md:col-span-6 text-paper/60 text-sm md:text-base leading-relaxed md:opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                    {s.desc}
                  </p>
                </div>
                <span className="absolute left-0 bottom-0 h-px bg-gold w-0 group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="bg-paper text-charcoal py-32 md:py-44 px-6 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16 reveal">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-madder mb-4">04 · Selected Work</p>
              <h2 className="font-serif text-4xl md:text-6xl text-balance max-w-[18ch]">Cultural moments, made live.</h2>
            </div>
            <Link
              to="/work"
              className="font-mono text-[11px] uppercase tracking-[0.25em] border-b border-charcoal pb-1 hover:text-madder hover:border-madder transition-colors"
            >
              View full archive →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featured.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* TEAM / ABOUT TEASER */}
      <section className="relative bg-charcoal text-paper py-32 md:py-44 overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="aspect-[4/3] overflow-hidden bg-navy">
              <img
                src={aboutImage}
                alt="Production crew working backstage at a large outdoor event at dusk"
                loading="lazy"
                className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                width={1600}
                height={1088}
              />
            </div>
          </div>
          <div className="reveal" style={{ transitionDelay: "120ms" }}>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-6">05 · The Team</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] mb-8 text-balance">
              The people behind the production.
            </h2>
            <p className="text-paper/70 text-lg leading-relaxed max-w-xl mb-10">
              Experienced across festivals, public programmes, communications, research, operations and cultural delivery — Milestone Inventive brings senior expertise to every project, from concept to closure.
            </p>
            <Link
              to="/about"
              className="inline-block font-mono text-[11px] uppercase tracking-[0.25em] border-b border-paper pb-1 hover:text-gold hover:border-gold transition-colors"
            >
              Meet the studio →
            </Link>
          </div>
        </div>
      </section>

      {/* LATEST */}
      <section className="bg-paper text-charcoal py-32 md:py-40 px-6 md:px-10 border-t border-charcoal/5">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex items-end justify-between mb-16 reveal">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-madder mb-4">06 · Latest</p>
              <h2 className="font-serif text-4xl md:text-6xl">Recent thinking.</h2>
            </div>
            <Link to="/latest" className="font-mono text-[11px] uppercase tracking-[0.25em] border-b border-charcoal pb-1 hover:text-madder hover:border-madder transition-colors">
              All updates →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <article className="reveal md:row-span-2">
              <div className="aspect-[4/5] bg-charcoal/10 overflow-hidden mb-6">
                <img src={projects[0].image} alt="" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-madder mb-3">News · Festival</p>
              <h3 className="font-serif text-3xl md:text-4xl mb-3">Galway Christmas Market returns for another season of light.</h3>
              <p className="text-charcoal/70 leading-relaxed max-w-prose">A look at the planning, production and city partnership behind one of Ireland's most-loved seasonal events.</p>
            </article>
            <article className="reveal" style={{ transitionDelay: "120ms" }}>
              <div className="aspect-[16/10] bg-charcoal/10 overflow-hidden mb-6">
                <img src={projects[4].image} alt="" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-madder mb-3">Press Release</p>
              <h3 className="font-serif text-2xl md:text-3xl mb-2">Samhain processions confirmed for autumn programme.</h3>
              <p className="text-charcoal/70">Producing the next iteration of fire and shadow on Galway's streets.</p>
            </article>
            <article className="reveal" style={{ transitionDelay: "200ms" }}>
              <div className="aspect-[16/10] bg-charcoal/10 overflow-hidden mb-6">
                <img src={projects[6].image} alt="" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-madder mb-3">Opportunity</p>
              <h3 className="font-serif text-2xl md:text-3xl mb-2">Cruinniú na nÓg — programme partners welcome.</h3>
              <p className="text-charcoal/70">Open call for cultural partners to join the national day of free creativity.</p>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <ContactCTA />
    </>
  );
}

function Stat({ n, suffix, label }: { n: number; suffix?: string; label: string }) {
  return (
    <div className="reveal">
      <CountUp to={n} suffix={suffix} className="block font-serif text-5xl md:text-7xl text-paper" />
      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/60 max-w-[20ch]">{label}</p>
    </div>
  );
}

function ContactCTA() {
  return (
    <section className="bg-charcoal text-paper py-32 md:py-44 px-6 md:px-10 border-t border-white/5">
      <div className="mx-auto max-w-[1600px] grid lg:grid-cols-2 gap-16">
        <div className="reveal">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-6">07 · Get in touch</p>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,5rem)] leading-[1.02] text-balance max-w-[18ch]">
            Let's build the next <span className="italic text-gold">cultural moment.</span>
          </h2>
          <p className="mt-8 text-paper/70 text-lg max-w-md leading-relaxed">
            Planning a festival, public programme, conference or cultural project? Talk to Milestone Inventive about production, programming, management and delivery.
          </p>
          <div className="mt-12 space-y-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Studio</p>
            <p className="text-paper/80">11 Henry Street, Galway, Ireland</p>
            <p className="text-paper/80 mt-4">
              <a href="mailto:hello@milestoneinventive.ie" className="hover:text-gold">hello@milestoneinventive.ie</a>
            </p>
          </div>
          <div className="mt-10">
            <Link to="/contact">
              <MagneticButton variant="solid">Start a project</MagneticButton>
            </Link>
          </div>
        </div>
        <div className="reveal" style={{ transitionDelay: "120ms" }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export function ContactForm() {
  return (
    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
      <Field label="Name" name="name" />
      <Field label="Organisation" name="org" />
      <Field label="Email" name="email" type="email" />
      <Field label="Project type" name="type" placeholder="Festival, conference, public programme…" />
      <div className="space-y-3">
        <label className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/40" htmlFor="msg">Brief</label>
        <textarea
          id="msg"
          rows={4}
          className="w-full bg-transparent border-b border-paper/20 py-3 text-paper placeholder:text-paper/30 focus:border-gold outline-none transition-colors resize-none"
          placeholder="Tell us a little about the project…"
        />
      </div>
      <button
        type="submit"
        className="w-full md:w-auto px-10 py-5 bg-gold text-charcoal text-[11px] uppercase tracking-[0.22em] font-medium hover:bg-paper transition-colors"
      >
        Send enquiry
      </button>
    </form>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div className="space-y-3">
      <label htmlFor={name} className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/40">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-paper/20 py-3 text-paper placeholder:text-paper/30 focus:border-gold outline-none transition-colors"
      />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "./work";
import { ContactForm } from "./index";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Milestone Inventive · Galway" },
      { name: "description", content: "Plan a festival, public programme, conference or cultural project with Milestone Inventive. 11 Henry Street, Galway." },
      { property: "og:title", content: "Contact — Milestone Inventive" },
      { property: "og:description", content: "Talk to Milestone Inventive about production, programming, management and delivery." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Let's build the next cultural moment."
        subtitle="Planning a festival, public programme, conference or cultural project? Talk to Milestone Inventive about production, programming, management and delivery."
      />
      <section className="bg-charcoal text-paper py-20 md:py-32 px-6 md:px-10">
        <div className="mx-auto max-w-[1600px] grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-10 reveal">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">Studio</p>
              <p className="text-paper/85 text-lg leading-relaxed">
                Milestone Inventive<br />
                11 Henry Street<br />
                Galway, Ireland
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">General enquiries</p>
              <a href="mailto:hello@milestoneinventive.ie" className="font-serif text-2xl md:text-3xl hover:text-gold transition-colors">
                hello@milestoneinventive.ie
              </a>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">Phone</p>
              <a href="tel:+35391000000" className="text-paper/85 text-lg hover:text-gold transition-colors">+353 91 000 000</a>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 reveal" style={{ transitionDelay: "120ms" }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

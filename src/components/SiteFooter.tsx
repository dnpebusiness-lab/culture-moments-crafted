import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-paper border-t border-white/5">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 pt-24 pb-10">
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          <div className="lg:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-4">
              Milestone Inventive
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight max-w-[18ch]">
              Creative production for cultural moments that move people.
            </h2>
          </div>
          <div className="lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/40 mb-4">
              Studio
            </p>
            <address className="not-italic text-paper/70 leading-relaxed">
              11 Henry Street<br />
              Galway, Ireland
            </address>
          </div>
          <div className="lg:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/40 mb-4">
              Contact
            </p>
            <a href="mailto:hello@milestoneinventive.ie" className="block text-paper/80 hover:text-gold transition-colors">
              hello@milestoneinventive.ie
            </a>
            <a href="tel:+35391000000" className="block text-paper/60 mt-2 hover:text-gold transition-colors">
              +353 91 000 000
            </a>
          </div>
          <div className="lg:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/40 mb-4">
              Site
            </p>
            <ul className="space-y-2 text-paper/70">
              <li><Link to="/work" className="hover:text-gold transition-colors">Work</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
              <li><Link to="/latest" className="hover:text-gold transition-colors">Latest</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/30">
          <p>© {new Date().getFullYear()} Milestone Inventive. All rights reserved.</p>
          <p>Galway · Ireland</p>
        </div>
      </div>
    </footer>
  );
}

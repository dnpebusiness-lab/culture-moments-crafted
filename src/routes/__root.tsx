import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RevealOnScroll } from "@/components/RevealOnScroll";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-charcoal text-paper px-6">
      <div className="max-w-md text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-6">404 — Off the programme</p>
        <h1 className="font-serif text-6xl md:text-7xl">Page not found.</h1>
        <p className="mt-6 text-paper/60">The page you're looking for has moved or never existed.</p>
        <Link to="/" className="inline-block mt-10 border border-paper/30 px-8 py-4 text-[11px] uppercase tracking-[0.22em] hover:border-gold hover:text-gold transition-colors">
          Return home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-charcoal text-paper px-6">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-4xl">Something didn't load.</h1>
        <p className="mt-4 text-paper/60 text-sm">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-8 border border-paper/30 px-8 py-4 text-[11px] uppercase tracking-[0.22em] hover:border-gold hover:text-gold transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Milestone Inventive — Creative production for cultural moments" },
      { name: "description", content: "Galway-based creative production company delivering festivals, public programmes, conferences and cultural experiences across Ireland." },
      { name: "author", content: "Milestone Inventive" },
      { property: "og:title", content: "Milestone Inventive — Creative production for cultural moments" },
      { property: "og:description", content: "We design, manage and deliver festivals, public programmes and cultural experiences across Ireland." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Milestone Inventive" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Milestone Inventive",
          url: "/",
          description: "Creative production for cultural moments — festivals, public programmes and cultural experiences in Ireland.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "11 Henry Street",
            addressLocality: "Galway",
            addressCountry: "IE",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-charcoal text-paper">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <RevealOnScroll />
      <SiteHeader />
      <main id="main">
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}

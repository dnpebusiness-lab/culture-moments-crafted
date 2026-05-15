import { useEffect, useRef } from "react";

/**
 * Adds .is-visible to children with .reveal as they enter the viewport.
 * Mount once near the root.
 */
export function RevealOnScroll() {
  const ref = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduce) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );
    ref.current = io;
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    const mo = new MutationObserver(() => {
      document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => io.observe(el));
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}

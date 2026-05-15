import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useRef, useState } from "react";

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "ghost";
  children: ReactNode;
}

export function MagneticButton({
  variant = "solid",
  className = "",
  children,
  ...rest
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - (r.left + r.width / 2);
    const my = e.clientY - (r.top + r.height / 2);
    setPos({ x: mx * 0.18, y: my * 0.25 });
  };
  const handleLeave = () => setPos({ x: 0, y: 0 });

  const base =
    "relative inline-flex items-center justify-center px-9 py-4 text-[11px] uppercase tracking-[0.22em] font-medium transition-colors duration-500";
  const variants = {
    solid: "bg-paper text-charcoal hover:bg-gold hover:text-charcoal",
    ghost: "border border-paper/30 text-paper hover:border-gold hover:text-gold",
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`${base} ${variants[variant]} ${className}`}
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), background-color 0.5s, color 0.5s, border-color 0.5s",
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

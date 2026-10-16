"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Contêiner do céu. Converte a posição do cursor em variáveis CSS
 * (--cx, --cy, --active) com uma escrita por quadro, sem renderizar o React.
 * O transform de cada boneco é calculado em CSS (classe .lean).
 */
export default function Sky({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const pointer = useRef({ x: 0.5, y: 0.5, active: 0 });
  const frame = useRef<number | null>(null);
  const enabled = useRef(false);

  useEffect(() => {
    const query = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    const update = () => {
      enabled.current = query.matches;
    };
    update();
    query.addEventListener("change", update);
    return () => {
      query.removeEventListener("change", update);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  const flush = () => {
    frame.current = null;
    const el = ref.current;
    if (!el) return;
    const { x, y, active } = pointer.current;
    el.style.setProperty("--cx", x.toFixed(4));
    el.style.setProperty("--cy", y.toFixed(4));
    el.style.setProperty("--active", String(active));
  };

  const schedule = () => {
    if (frame.current === null) frame.current = requestAnimationFrame(flush);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!enabled.current || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    pointer.current = {
      x: (e.clientX - r.left) / r.width,
      y: (e.clientY - r.top) / r.height,
      active: 1,
    };
    schedule();
  };

  const onPointerLeave = () => {
    pointer.current = { ...pointer.current, active: 0 };
    schedule();
  };

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="sky relative min-h-[40rem] flex-[1_1_640px] overflow-hidden bg-sky"
    >
      {children}
    </div>
  );
}

import type { CSSProperties } from "react";
import AvatarFigure from "@/components/AvatarFigure";

type Layer = {
  name: "far" | "mid" | "front";
  count: number;
  size: number;
  rowTops: number[];
  shift: number;
  pull: number;
  opacity: number;
  z: number;
  drift: "d1" | "d2" | "d3";
};

const LAYERS: Layer[] = [
  { name: "far", count: 8, size: 50, rowTops: [4, 26, 48], shift: 6, pull: 0.1, opacity: 0.6, z: 1, drift: "d3" },
  { name: "mid", count: 7, size: 74, rowTops: [12, 36, 58], shift: 7, pull: 0.2, opacity: 1, z: 2, drift: "d2" },
  { name: "front", count: 5, size: 104, rowTops: [26, 6, 46], shift: 9, pull: 0.3, opacity: 1, z: 3, drift: "d1" },
];

const LIMIT = 40;

/** Posições da multidão (em %), conforme o layout. */
export function place(count: number, rowTops: number[], shift: number) {
  return Array.from({ length: count }, (_, i) => {
    const row = i % rowTops.length;
    const left = ((i * (100 / count) + (row % 2 ? shift : 0)) % 88) + 3;
    return { left, top: rowTops[row] };
  });
}

/** Multidão decorativa: flutua e se inclina para o cursor, nunca reage ao hover. */
export default function Crowd() {
  return (
    <>
      {LAYERS.map((layer) =>
        place(layer.count, layer.rowTops, layer.shift).map(({ left, top }, i) => (
          <span
            key={`${layer.name}-${i}`}
            aria-hidden="true"
            className={`absolute block ${layer.name === "far" ? "layer-far" : ""}`}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: layer.size,
              height: layer.size,
              zIndex: layer.z,
              opacity: layer.opacity,
            }}
          >
            <span
              className={`lean ${layer.drift} relative block h-full w-full`}
              style={
                { "--left": left, "--top": top, "--pull": layer.pull, "--lim": LIMIT } as CSSProperties
              }
            >
              <AvatarFigure color="var(--color-avatar)" />
            </span>
          </span>
        )),
      )}
    </>
  );
}

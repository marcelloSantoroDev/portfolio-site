type AvatarFigureProps = {
  /** Cor da cabeça e do corpo */
  color: string;
  /** Disco com contorno ink (bonecos de destaque e avatar do projeto) */
  outlined?: boolean;
  className?: string;
  /** Chapéu-coco sobre a cabeça. "hover" só aparece no hover/foco do boneco (.fig); "on" fica sempre visível. */
  hat?: "hover" | "on";
};

const BODY =
  "M38 38 Q50 34 62 38 Q66 40 66 46 L68 64 Q68 67 64 67 L62 67 L61 86 Q61 89 58 89 L54 89 Q52 89 52 86 L51 70 L49 70 L48 86 Q48 89 46 89 L42 89 Q39 89 39 86 L38 67 L36 67 Q32 67 32 64 L34 46 Q34 40 38 38 Z";

// Copa arredondada do chapéu-coco, apoiada no topo da cabeça (cy=25, r=10)
const HAT_CROWN = "M40.5 17.5 C40.5 9.5 44.5 5.5 50 5.5 C55.5 5.5 59.5 9.5 59.5 17.5 Z";

/** Cores dos bonecos de destaque ativos, alternadas pela ordem do projeto (vermelho e amarelo do Google). */
const FIG_COLORS = ["var(--color-fig-red)", "var(--color-fig-yellow)"];

export function figColor(index: number): string {
  return FIG_COLORS[index % FIG_COLORS.length];
}

/** Avatar genérico de perfil vazio. O tamanho vem do contêiner. */
export default function AvatarFigure({ color, outlined = false, className, hat }: AvatarFigureProps) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={`block h-full w-full ${className ?? ""}`}>
      {outlined ? (
        <circle cx="50" cy="50" r="48" fill="var(--color-white)" stroke="var(--color-ink)" strokeWidth="2" />
      ) : (
        <circle cx="50" cy="50" r="49" fill="var(--color-white)" />
      )}
      <circle cx="50" cy="25" r="10" fill={color} className="ink" />
      <path d={BODY} fill={color} className="ink" />
      {hat && (
        <g className={`hat ${hat === "on" ? "hat-on" : ""}`} fill="var(--color-ink)">
          <path d={HAT_CROWN} />
          <ellipse cx="50" cy="17.5" rx="14.5" ry="2.6" />
        </g>
      )}
    </svg>
  );
}

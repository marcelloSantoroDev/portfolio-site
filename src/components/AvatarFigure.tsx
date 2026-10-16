type AvatarFigureProps = {
  /** Cor da cabeça e do corpo */
  color: string;
  /** Disco com contorno ink (bonecos de destaque e avatar do projeto) */
  outlined?: boolean;
  /** Classe aplicada à cabeça e ao corpo, para trocar a cor em CSS */
  inkClassName?: string;
  className?: string;
};

const BODY =
  "M38 38 Q50 34 62 38 Q66 40 66 46 L68 64 Q68 67 64 67 L62 67 L61 86 Q61 89 58 89 L54 89 Q52 89 52 86 L51 70 L49 70 L48 86 Q48 89 46 89 L42 89 Q39 89 39 86 L38 67 L36 67 Q32 67 32 64 L34 46 Q34 40 38 38 Z";

/** Avatar genérico de perfil vazio. O tamanho vem do contêiner. */
export default function AvatarFigure({ color, outlined = false, inkClassName, className }: AvatarFigureProps) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={`block h-full w-full ${className ?? ""}`}>
      {outlined ? (
        <circle cx="50" cy="50" r="48" fill="var(--color-white)" stroke="var(--color-ink)" strokeWidth="2" />
      ) : (
        <circle cx="50" cy="50" r="49" fill="var(--color-white)" />
      )}
      <circle cx="50" cy="25" r="10" fill={color} className={inkClassName} />
      <path d={BODY} fill={color} className={inkClassName} />
    </svg>
  );
}

type PlaceholderProps = {
  label: string;
  className?: string;
  /** Borda tracejada (padrão) ou sem borda, quando a moldura já existe */
  dashed?: boolean;
};

/** Caixa rotulada para conteúdo que o usuário ainda vai fornecer. */
export default function Placeholder({ label, className = "", dashed = true }: PlaceholderProps) {
  return (
    <span
      className={`flex items-center justify-center text-[12px] ${dashed ? "border-2 border-dashed border-current" : ""} ${className}`}
    >
      {label}
    </span>
  );
}

import { useDataColor } from "../hooks/useDataColor";
import { cx } from "../utils/cx";

export const GradientLayout = ({ children }: { children: React.ReactNode }) => {
  const id = "playlist-container";

  useDataColor(id);

  return (
    <div
      id={id}
      className={cx(
        "space-y-4 transition-all duration-1000",
        "relative bg-context/95",
        // "bg-gradient-to-b from-context to-20% to-transparent", //notransition
        "before:absolute before:inset-0",
        "before:bg-gradient-to-t before:from-zinc-900 before:from-50% before:to-transparent",
      )}
      data-color="#134e4a"
    >
      {children}
    </div>
  );
};

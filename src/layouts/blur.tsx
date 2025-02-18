import { Playlist } from "../data";
import { cx } from "../utils/cx";

export const BlurLayout = ({
  children,
  playlist,
}: { children: React.ReactNode; playlist: Playlist }) => {
  return (
    <div className="relative h-full flex flex-col">
      <div
        className={cx(
          "absolute inset-0 bg-gradient-to-b from-context",
          "after:absolute after:inset-0",
          "after:bg-gradient-to-t after:from-zinc-900 after:via-transparent",
        )}
        data-color={playlist.color.accent}
      >
        <img
          src={playlist.cover}
          alt={playlist.title}
          className={cx(
            "transition-all duration-500",
            "absolute inset-0 opacity-20 scale-90",
            "w-full h-full object-cover",
            "mix-blend-overlay blur-md",
          )}
        />
      </div>

      {children}
    </div>
  );
};

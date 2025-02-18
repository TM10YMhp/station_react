import { Aside } from "../components/aside";
import Player from "../components/player";
import { cx } from "../utils/cx";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={cx(
        "grid",
        "[grid-template-areas:'aside_main''player_player']",
        "grid-cols-[280px_1fr]",
        "grid-rows-[1fr_auto]",
        "min-h-screen max-h-screen p-2 gap-2",
      )}
    >
      <Aside />
      <main className="[grid-area:main] rounded-lg bg-zinc-900 overflow-y-auto">
        {children}
      </main>
      <footer className="[grid-area:player]">
        <Player />
      </footer>
    </div>
  );
};

import { usePlayerState, usePlayerUpdater } from "../context";
import { cx } from "../utils/cx";

export const PlaylistButton = ({
  id,
  className,
}: { id: string; className?: string }) => {
  const { isPlaying, currentMusic } = usePlayerState();
  const { playMusic, pauseMusic } = usePlayerUpdater();

  const isPlayingThisPlaylist = isPlaying && currentMusic.playlist?.id === id;

  return (
    <button
      className={cx(
        "h-12 w-12",
        "bg-green-500 shadow-md shadow-black/40 rounded-full",
        "flex items-center justify-center",
        className,
      )}
      onClick={() => {
        if (isPlayingThisPlaylist) {
          pauseMusic(id);
        } else {
          playMusic(id);
        }
      }}
    >
      <i
        // className="nf nf-fa-play ml-1 text-black text-xl"
        className={`text-black text-xl nf ${isPlayingThisPlaylist ? "nf-fa-stop" : "nf-fa-play ml-0.5"}`}
      />
    </button>
  );
};

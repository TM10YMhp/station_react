import { create } from "zustand";
import { getPlaylist, getSongs } from "./api";
import { Playlist, Song } from "./data";

interface CurrentMusic {
  playlist?: Playlist;
  song?: Song;
  songs: Song[];
}

interface PlayerStore {
  isPlaying: boolean;
  currentMusic: CurrentMusic;
  volume: number;
  index: number;
  setVolume: (volume: number) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setCurrentMusic: (currentMusic: CurrentMusic) => void;
  setIndex: (index: number) => void;
}

const usePlayerStore = create<PlayerStore>((set) => ({
  isPlaying: false,
  currentMusic: { playlist: undefined, song: undefined, songs: [] },
  volume: 1,
  index: 0,
  setVolume: (volume) => set({ volume }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
  setIndex: (index) => set({ index }),
}));

// context

export const usePlayerState = () => {
  const isPlaying = usePlayerStore((x) => x.isPlaying);
  const currentMusic = usePlayerStore((x) => x.currentMusic);
  const volume = usePlayerStore((x) => x.volume);
  const index = usePlayerStore((x) => x.index);

  return { isPlaying, currentMusic, volume, index };
};

export const usePlayerUpdater = () => {
  const { index, currentMusic } = usePlayerState();

  const setIsPlaying = usePlayerStore((x) => x.setIsPlaying);
  const setCurrentMusic = usePlayerStore((x) => x.setCurrentMusic);
  const setVolume = usePlayerStore((x) => x.setVolume);
  const setIndex = usePlayerStore((x) => x.setIndex);

  const nextSong = () => {
    const nextIndex = index + 1;
    if (nextIndex >= currentMusic.songs.length) return;

    setIndex(nextIndex);

    const draft = { ...currentMusic, song: currentMusic.songs[nextIndex] };
    setCurrentMusic(draft);
  };

  const prevSong = () => {
    const prevIndex = index - 1;
    if (prevIndex < 0) return;

    setIndex(prevIndex);

    const draft = { ...currentMusic, song: currentMusic.songs[prevIndex] };
    setCurrentMusic(draft);
  };

  const pauseMusic = (id: string) => {
    if (currentMusic.playlist?.id !== id) return;

    setCurrentMusic({
      playlist: undefined,
      songs: [],
      song: undefined,
    });
    setIsPlaying(false);
  };

  const playMusic = async (id: string, i?: number) => {
    const playlist = await getPlaylist({ id });
    if (!playlist) return;

    const songs = await getSongs({ id });

    if (i) setIndex(i);

    setCurrentMusic({
      playlist,
      songs,
      song: songs[typeof i === "number" ? i : index],
    });
    setIsPlaying(true);
  };

  return {
    setIsPlaying,
    setCurrentMusic,
    setVolume,
    nextSong,
    prevSong,
    playMusic,
    pauseMusic,
  };
};

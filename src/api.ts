import { customPlaylist, playlists, songs } from "./data";

export const getPlaylists = async () => {
  return playlists;
};

export const getPlaylist = async ({ id }: { id?: string }) => {
  if (!id) return;

  const playlist = playlists.find((x) => x.id === id);
  return playlist;
};

export const getSongs = async ({ id }: { id?: string }) => {
  if (id === "7") {
    return customPlaylist.map((song) => ({ ...song, id: song.id + "_1" }));
  }
  return songs;
};

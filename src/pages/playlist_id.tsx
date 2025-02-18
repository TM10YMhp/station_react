import { Fragment } from "react";
import { useParams } from "react-router";
import useSWRImmutable from "swr/immutable";
import { getPlaylist, getSongs } from "../api";
import { Header } from "../components/header";
import { PlaylistButton } from "../components/playlist_button";
import { usePlayerUpdater } from "../context";
import { BlurLayout } from "../layouts/blur";

const MusicTable = ({ id }: { id: string }) => {
  const { data: songs, isLoading } = useSWRImmutable(`songs/${id}`, () =>
    getSongs({ id }),
  );
  const { playMusic } = usePlayerUpdater();

  if (isLoading) return <div>Loading...</div>;
  if (!songs) return <div>Not found songs</div>;

  return (
    <table className="table-auto text-left divide-y-2 divide-gray-500/30 w-full max-w-7xl">
      <thead>
        <tr className="text-gray-300">
          <th className="font-normal px-4 py-2 whitespace-nowrap w-5">#</th>
          <th className="font-normal px-4 py-2 whitespace-nowrap">Título</th>
          <th className="font-normal px-4 py-2 whitespace-nowrap">Álbum</th>
          <th className="font-normal px-4 py-2 whitespace-nowrap w-5 text-center">
            <i className="nf nf-fa-clock text-xl"></i>
          </th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song, index) => (
          <tr
            key={index}
            className="group hover:bg-gray-500/20 cursor-pointer"
            onClick={() => playMusic(id, index)}
          >
            <td className="whitespace-nowrap px-4 py-2">{index + 1}</td>
            <td className="whitespace-nowrap px-4 py-2 flex gap-3 items-center w-max">
              <img
                src={song.image}
                alt={song.title}
                className="rounded object-cover h-10 w-10 shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
              />
              <div className="text-sm text-gray-300 group-hover:text-white">
                <a href="#" className="hover:underline">
                  {song.title}
                </a>
                <p>
                  {song.artists.map((artist, i, arr) => (
                    <Fragment key={artist}>
                      <a href="#" className="hover:underline">
                        {artist}
                      </a>
                      {i < arr.length - 1 ? ", " : ""}
                    </Fragment>
                  ))}
                </p>
              </div>
            </td>
            <td className="whitespace-nowrap px-4 py-2">
              <a
                href="#"
                className="text-gray-300 group-hover:text-white hover:underline text-sm"
              >
                {song.album}
              </a>
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-center">
              {song.duration}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const PlaylistId = () => {
  const { id } = useParams();
  const { data: playlist, isLoading } = useSWRImmutable(id, (id) =>
    getPlaylist({ id }),
  );
  const totalSongs = id === "7" ? 5 : 10;

  if (isLoading) return <div>Loading...</div>;
  if (!playlist) return <div>Not found playlist</div>;

  return (
    <BlurLayout playlist={playlist}>
      <div className="relative">
        <Header className="p-5" />
        <div className="flex flex-col items-center md:flex-row md:items-stretch gap-8 px-5 mb-5">
          <img
            src={playlist.cover}
            alt={playlist.title}
            className="object-cover h-52 w-52 shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
          />

          <div className="self-center mt-auto">
            <p>Playlist</p>
            <p className="text-[clamp(1.25rem,_6vw,_3rem)] leading-none font-bold mb-4">
              {playlist.title}
            </p>
            <p className="text-sm">
              {playlist.artists.map((artist, i, arr) => (
                <Fragment key={artist}>
                  <a href="#" className="hover:underline">
                    {artist}
                  </a>
                  {i < arr.length - 1 ? ", " : ""}
                </Fragment>
              ))}
            </p>
            <p className="text-sm mt-1">
              <span className="font-semibold">58 likes</span>, {totalSongs}{" "}
              canciones,{" "}
              <span className="text-gray-300">3h 15min aproximadamente</span>
            </p>
          </div>
        </div>

        <div className="relative bg-zinc-900/30 p-5 overflow-x-auto space-y-2">
          <div className="flex items-center">
            <PlaylistButton id={playlist.id} className="mr-6 hover:scale-105" />

            <button className="h-12 w-12 rounded-full flex items-center justify-center">
              <i className="nf nf-md-heart text-2xl text-green-500 hover:scale-110"></i>
            </button>
            <button className="h-12 w-12 rounded-full flex items-center justify-center">
              <i className="nf nf-md-dots_horizontal text-2xl text-gray-400 hover:text-gray-300"></i>
            </button>
          </div>

          <MusicTable id={id ?? ""} />
        </div>
      </div>
    </BlurLayout>
  );
};

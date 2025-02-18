import { Link } from "react-router";
import useSWRImmutable from "swr/immutable";
import { getPlaylists } from "../api";
import { Greeting } from "../components/greeting";
import { Header } from "../components/header";
import { PlaylistButton } from "../components/playlist_button";
import { GradientLayout } from "../layouts/gradient";
import { cx } from "../utils/cx";

export const Home = () => {
  const { data: playlists, isLoading } = useSWRImmutable(
    "playlists",
    getPlaylists,
  );

  if (isLoading) return <div>Loading...</div>;
  if (!playlists) return <div>Not found playlists</div>;

  const base = cx(
    "group overflow-hidden",
    "bg-zinc-500/15 rounded-md shadow-lg",
    "hover:shadow-xl hover:bg-zinc-500/30 focus:bg-zinc-500/30",
  );
  return (
    <GradientLayout>
      <title>Music React</title>

      <div className="relative p-5">
        <Header className="mb-2" />
        <Greeting />
        <div
          className={cx(
            "grid gap-4 mt-6",
            "sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4",
          )}
        >
          {playlists.slice(0, 4).map((playlist) => (
            <Link
              key={playlist.id}
              to={`/playlist/${playlist.id}`}
              className={cx("relative flex items-center gap-4 pr-6", base)}
              data-item="true"
              data-color={playlist.color.dark}
            >
              <img
                src={playlist.cover}
                alt={playlist.title}
                className="h-20 w-20 object-cover shadow-[5px_0_30px_rgba(0,0,0,0.3)]"
              />
              <p className="font-bold line-clamp-3">
                {playlist.title}{" "}
                {playlist.id === "7" && <i className="nf nf-fa-flask" />}
              </p>
              <PlaylistButton
                id={playlist.id}
                className={cx(
                  "absolute right-4 opacity-0",
                  "transition-opacity duration-300",
                  "group-hover:opacity-100 hover:scale-105",
                )}
              />
            </Link>
          ))}
        </div>

        <p className="text-2xl font-bold mt-8">Listas de Reproducción</p>
        <div className="flex flex-wrap mt-6 gap-4">
          {playlists.map((playlist) => (
            <Link
              key={playlist.id}
              to={`/playlist/${playlist.id}`}
              className={cx("p-2 w-44", base)}
              data-color={playlist.color.dark}
            >
              <div className="relative mx-auto h-40 w-full flex-none shadow-lg">
                <img
                  src={playlist.cover}
                  alt={playlist.title}
                  className={cx(
                    "object-cover h-full w-full",
                    "rounded-md shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]",
                  )}
                />
                <PlaylistButton
                  id={playlist.id}
                  className={cx(
                    "absolute right-2 bottom-2 translate-y-4 opacity-0 transition-all",
                    "group-hover:translate-y-0 group-hover:opacity-100 hover:scale-105",
                  )}
                />
              </div>
              <div className="pt-2">
                <p className="font-bold truncate">{playlist.title}</p>
                <p className="text-gray-400 text-xs">
                  {playlist.artists.join(", ")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </GradientLayout>
  );
};

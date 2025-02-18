import { Link } from "react-router";
import { NavLink } from "react-router";
import useSWRImmutable from "swr/immutable";
import { getPlaylists } from "../api";
import { cx } from "../utils/cx";

export const Aside = () => {
  const navLinks = [
    { icon: "nf-oct-home", text: "Inicio" },
    { icon: "nf-oct-search", text: "Buscar" },
    // { icon: "nf-oct-gear", text: "Ajustes" },
  ];

  const { data: playlists, isLoading } = useSWRImmutable(
    "playlists",
    getPlaylists,
  );

  if (isLoading) return <div>Loading...</div>;
  if (!playlists) return <div>Not found playlists</div>;

  return (
    <aside className="[grid-area:aside] flex flex-col overflow-y-auto gap-2">
      <div className="bg-zinc-900 rounded-lg p-2 flex flex-col">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to="/"
            className={cx(
              "text-zinc-400 hover:text-zinc-100 py-2.5 px-3 font-medium",
              "flex gap-4",
              "transition duration-300",
            )}
          >
            <i className={`nf ${link.icon} text-xl`} /> {link.text}
          </Link>
        ))}
      </div>
      <div className="bg-zinc-900 rounded-lg p-2 flex-1">
        <Link
          to="/"
          className={cx(
            "text-zinc-400 hover:text-zinc-100 py-2.5 mb-1 px-3 font-medium",
            "flex gap-4",
            "transition duration-300",
          )}
        >
          <i className="nf nf-cod-library text-xl" /> Tu biblioteca
        </Link>

        {playlists.map((playlist) => (
          <NavLink
            key={playlist.id}
            to={`/playlist/${playlist.id}`}
            className={({ isActive }) =>
              cx(
                "flex group p-2 items-center gap-3 rounded-md",
                "shadow-lg hover:shadow-xl outline-none",
                "hover:bg-zinc-500/10",
                isActive && "bg-zinc-500/30",
              )
            }
            data-item="true"
            data-color={playlist.color.dark}
          >
            <img
              src={playlist.cover}
              alt={playlist.title}
              className="h-12 w-12 object-cover rounded shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
            />
            <div className="flex flex-auto flex-col truncate">
              <p className="font-semibold w-full flex-none truncate">
                {playlist.title}
              </p>
              <p className="text-gray-400 text-sm truncate flex-1">
                {playlist.artists.join(", ")}
              </p>
            </div>
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

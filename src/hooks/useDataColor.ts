import { useEffect } from "react";

export const useDataColor = (id: string) => {
  useEffect(() => {
    const playlistContainer = document.getElementById(id);
    if (!playlistContainer) return;

    const setContainerColor = (dataColor: string) => {
      if (!playlistContainer) return;

      const currentColor = playlistContainer.getAttribute("data-color");
      if (dataColor === currentColor) return;

      playlistContainer.setAttribute("data-color", dataColor);
    };

    let timer: number | undefined;

    const onMouseEnter = (e: Event) => {
      const element = e.currentTarget;
      if (!(element instanceof HTMLElement)) return;

      const dataColor = element.getAttribute("data-color");
      if (!dataColor) return;

      timer = setTimeout(() => setContainerColor(dataColor), 100);
    };

    const onMouseLeave = () => {
      clearTimeout(timer);
      timer = undefined;
    };

    const items = document.querySelectorAll('[data-item="true"]');
    for (const playlist of items) {
      playlist.addEventListener("mouseenter", onMouseEnter, {
        passive: true,
      });
      playlist.addEventListener("mouseleave", onMouseLeave, {
        passive: true,
      });
    }

    return () => {
      for (const playlist of items) {
        playlist.removeEventListener("mouseenter", onMouseEnter);
        playlist.removeEventListener("mouseleave", onMouseLeave);
      }
    };
  }, [id]);
};

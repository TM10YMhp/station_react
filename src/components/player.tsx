import { useEffect, useRef, useState } from "react";
import { usePlayerState, usePlayerUpdater } from "../context";
import { cx } from "../utils/cx";

const formatTime = (time?: number) => {
  if (!time || isNaN(time)) return "00:00";

  const seconds = Math.floor(time % 60);
  const minutes = Math.floor(time / 60);

  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

export default function Player() {
  const { currentMusic, isPlaying, volume } = usePlayerState();
  const { setIsPlaying, setVolume, nextSong, prevSong } = usePlayerUpdater();

  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const silence = volume < 0.1;
  const previousVolumeRef = useRef(volume);

  const image = currentMusic.song?.image;
  const title = currentMusic.song?.title;
  const artists = currentMusic.song?.artists;
  const source = currentMusic.song?.source;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!source) {
      audio.load();
      return;
    }

    audio.src = source;
    audio.play();
  }, [source, setIsPlaying]);

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio?.src) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  }

  return (
    <div className="grid grid-cols-3 w-full px-2">
      <div className="flex items-center gap-4">
        {image ? (
          <img
            className="h-16 w-16 bg-zinc-800 rounded-md shadow-lg"
            src={image}
            alt={title}
          />
        ) : null}

        <div className="flex flex-col">
          <p className="font-bold leading-none line-clamp-2">{title}</p>
          <p>{artists?.join(", ")}</p>
        </div>
      </div>

      <div
        className={cx(
          "flex justify-center flex-col items-center pt-1 gap-1",
          source || "text-gray-500",
        )}
      >
        <div className="flex gap-6 justify-center">
          <button onClick={prevSong}>
            <i className="nf nf-md-skip_previous" />
          </button>
          <button
            className={cx(
              source ? "bg-white" : "bg-gray-500",
              "h-8 w-8 rounded-full text-black",
              "flex justify-center items-center",
            )}
            onClick={togglePlay}
          >
            <i
              className={`nf ${isPlaying ? "nf-fa-pause" : "nf-fa-play ml-0.5"}`}
            />
          </button>
          <button onClick={nextSong}>
            <i className="nf nf-md-skip_next" />
          </button>
        </div>
        <div className="flex gap-3 items-center w-full">
          <span className="opacity-50 w-12 text-right">
            {formatTime(currentTime)}
          </span>
          <input
            type="range"
            value={currentTime}
            max={audioRef.current?.duration || 0}
            min="0"
            className={cx(
              "w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700 overflow-hidden",
            )}
            onChange={(e) => {
              const audio = audioRef.current;
              if (!audio) return;
              const newTime = e.target.value;
              audio.currentTime = Number(newTime);
            }}
          />
          <span className="opacity-50 w-12 text-right">
            {formatTime(audioRef.current?.duration)}
          </span>
        </div>
        <audio
          ref={audioRef}
          onTimeUpdate={() => {
            const audio = audioRef.current;
            if (!audio) return;
            setCurrentTime(audio.currentTime);
          }}
          onEnded={nextSong}
        />
      </div>

      <div className="grid place-content-center justify-self-end">
        <div className="flex items-center gap-2">
          <button
            className="opacity-70 hover:opacity-100"
            onClick={() => {
              if (silence) {
                setVolume(previousVolumeRef.current);
              } else {
                previousVolumeRef.current = volume;
                setVolume(0);
              }
            }}
          >
            {!silence ? (
              <i className="nf nf-md-volume_high" />
            ) : (
              <i className="nf nf-md-volume_off" />
            )}
          </button>
          <input
            type="range"
            value={volume * 100}
            max="100"
            min="0"
            className={cx(
              "w-full h-1.5 rounded-lg appearance-none cursor-pointer bg-gray-700 overflow-hidden",
            )}
            onChange={(e) => {
              const newVolume = e.target.value;
              const volumeValue = Number(newVolume) / 100;
              setVolume(volumeValue);
            }}
          />
        </div>
      </div>
    </div>
  );
}

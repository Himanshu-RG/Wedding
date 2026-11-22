"use client";

import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { MUSIC_ENABLED, MUSIC_LOOP, MUSIC_LOOP_END, MUSIC_SRC } from "./content";
import { useLanguage } from "./LanguageContext";

export interface MusicPlayerHandle {
  playMusic: () => void;
  pauseMusic: () => void;
}

/** Floating song pill. The song starts when the doors open and loops at MUSIC_LOOP_END seconds. */
const MusicPlayer = forwardRef<MusicPlayerHandle>(function MusicPlayer(_props, ref) {
  const { t } = useLanguage();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const on = () => setPlaying(true);
    const off = () => setPlaying(false);
    const fail = (e: Event) => {
      console.warn("Audio playback error:", e);
      setPlaying(false);
    };
    audio.addEventListener("play", on);
    audio.addEventListener("playing", on);
    audio.addEventListener("pause", off);
    audio.addEventListener("error", fail);
    return () => {
      audio.removeEventListener("play", on);
      audio.removeEventListener("playing", on);
      audio.removeEventListener("pause", off);
      audio.removeEventListener("error", fail);
    };
  }, []);

  const playMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !MUSIC_ENABLED || !audio.paused) return;
    audio.play()?.catch((e: DOMException) => {
      if (e.name !== "AbortError") {
        console.warn("Autoplay blocked or play failed:", e);
        setPlaying(false);
      }
    });
  }, []);

  const pauseMusic = useCallback(() => audioRef.current?.pause(), []);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) playMusic();
    else pauseMusic();
  }, [playMusic, pauseMusic]);

  useImperativeHandle(ref, () => ({ playMusic, pauseMusic }));

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => {
      if (MUSIC_LOOP_END && audio.currentTime >= MUSIC_LOOP_END - 0.15) {
        audio.currentTime = 0;
        if (!audio.paused) audio.play().catch(() => {});
      }
    };
    const onEnded = () => {
      audio.currentTime = 0;
      if (MUSIC_LOOP) audio.play().catch(() => {});
    };
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const label = playing ? t.music.pause : t.music.play;

  return (
    <>
      <button
        type="button"
        className={`luxury-music-pill ${playing ? "playing" : "paused"}`}
        id="musicBtn"
        onClick={toggle}
        aria-label={label}
        title={`${t.music.title} · ${label}`}
      >
        <span className="music-pill-icon" aria-hidden="true">
          {playing ? "♫" : "♪"}
        </span>
        <span className="music-equalizer" aria-hidden="true">
          <span className="eq-bar eq-bar-1" />
          <span className="eq-bar eq-bar-2" />
          <span className="eq-bar eq-bar-3" />
          <span className="eq-bar eq-bar-4" />
        </span>
        <span className="music-pill-text">
          <span className="music-track-title">{playing ? t.music.title : t.music.play}</span>
          <span className="music-track-sub">{playing ? t.music.artist : t.music.tapToListen}</span>
        </span>
      </button>
      <audio ref={audioRef} src={MUSIC_SRC} preload="auto" />
    </>
  );
});

export default MusicPlayer;

"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

export const STREAM_URL = "http://stream.rumbayguateque.com:8388/stream";

export type PlayerStatus = "idle" | "loading" | "playing" | "paused" | "error";

type PlayerContextValue = {
  status: PlayerStatus;
  volume: number;
  elapsedSeconds: number;
  start: () => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
  retry: () => void;
  setVolume: (v: number) => void;
};

const PlayerContext = createContext<PlayerContextValue | null>(null);

export function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error("usePlayer must be used within PlayerProvider");
  return ctx;
}

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const playStartRef = useRef<number>(0);

  const [status, setStatus] = useState<PlayerStatus>("idle");
  const [volume, setVolumeState] = useState(0.8);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  const stopTicking = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startTicking = useCallback(() => {
    stopTicking();
    intervalRef.current = setInterval(() => {
      setElapsedSeconds(Math.floor((Date.now() - playStartRef.current) / 1000));
    }, 1000);
  }, [stopTicking]);

  const attemptPlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    setStatus("loading");
    audio.src = STREAM_URL;
    audio.volume = volume;
    audio.play().catch(() => setStatus("error"));
  }, [volume]);

  const start = useCallback(() => {
    setElapsedSeconds(0);
    playStartRef.current = Date.now();
    attemptPlay();
  }, [attemptPlay]);

  const retry = useCallback(() => {
    attemptPlay();
  }, [attemptPlay]);

  const pause = useCallback(() => {
    audioRef.current?.pause();
    stopTicking();
    setStatus("paused");
  }, [stopTicking]);

  const resume = useCallback(() => {
    playStartRef.current = Date.now() - elapsedSeconds * 1000;
    setStatus("loading");
    audioRef.current?.play().catch(() => setStatus("error"));
  }, [elapsedSeconds]);

  const stop = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
    }
    stopTicking();
    setElapsedSeconds(0);
    setStatus("idle");
  }, [stopTicking]);

  const setVolume = useCallback((v: number) => {
    setVolumeState(v);
    if (audioRef.current) audioRef.current.volume = v;
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlaying = () => {
      setStatus("playing");
      startTicking();
    };
    const onError = () => {
      stopTicking();
      setStatus("error");
    };

    audio.addEventListener("playing", onPlaying);
    audio.addEventListener("error", onError);
    return () => {
      audio.removeEventListener("playing", onPlaying);
      audio.removeEventListener("error", onError);
    };
  }, [startTicking, stopTicking]);

  useEffect(() => () => stopTicking(), [stopTicking]);

  return (
    <PlayerContext.Provider
      value={{ status, volume, elapsedSeconds, start, pause, resume, stop, retry, setVolume }}
    >
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={audioRef} preload="none" />
      {children}
    </PlayerContext.Provider>
  );
}

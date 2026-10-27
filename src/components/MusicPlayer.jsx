import { useRef, useState, useEffect } from "react";
import weddingMusic from "../assets/music/wedding-instrumental.mp3";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.25;

    const startMusic = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch  {
        // Browsers may block autoplay with sound.
        console.log("Autoplay was blocked by the browser.");
        setIsPlaying(false);
      }
    };

    startMusic();

    return () => {
      audio.pause();
    };
  }, []);

  const playMusic = async () => {
  try {
    await audioRef.current.play();
    setIsPlaying(true);
  } catch (error) {
    console.error("Unable to play music:", error);
  }
};

// const pauseMusic = () => {
//   audioRef.current.pause();
//   setIsPlaying(false);
// };
  const pauseMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    setIsPlaying(false);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={weddingMusic}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {!isPlaying ? (
  <button onClick={playMusic}>
    ▶ Play Music
  </button>
) : (
  <button onClick={pauseMusic}>
    ⏸ Pause Music
  </button>
)}
    </>
  );
}
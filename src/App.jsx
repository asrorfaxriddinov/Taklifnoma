import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import rasm from "./assets/bg-002.webp";
import "@fontsource/great-vibes";
import musiqa from "./assets/JojSXPclG6U.mp3";

const App = () => {
  const targetDate = new Date("2025-08-27T19:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [showInvitation, setShowInvitation] = useState(false);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Sana hisoblash
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Taklifnomani ochish va musiqani chalish
  const openInvitation = async () => {
    setShowInvitation(true);
    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (err) {
      console.error("Musiqa autoplay bloklandi:", err);
      setIsPlaying(false);
    }
  };

  // Musiqa boshqarish
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="container">
      <audio ref={audioRef} src={musiqa} loop preload="auto" />

      {!showInvitation && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Fayyozbek va Madinabonularning <br /> visol oqshomi uchun</p>
            <h2 style={{color:'#000'}}>📜 Taklifnoma</h2> 
            <button className="modal-button" onClick={openInvitation}>
              Taklifnomani ochish
            </button>
          </div>
        </div>
      )}

      {showInvitation && (
        <>
          <h1>Hurmatli mehmonlar!</h1>
          <p>
            Sizni Fayyozbek va Madinabonu nikoh to‘yining faxriy mehmoni bo‘lishga taklif qilamiz.
          </p>
          <p>
            Qalblar ezguliklarga to‘la bo‘lgan ushbu qutlug‘ kunda do‘stlar yonida bo‘ling!
          </p>
          <img src={rasm} alt="To‘y rasmi" className="toy-image" />
          <p>🗓 To‘y: 27-avgust, 2025 – 19:00</p>

          <div className="countdown-container">
            <div className="circle">
              <span>{timeLeft.days}</span>
              <p>Kun</p>
            </div>
            <div className="circle">
              <span>{timeLeft.hours}</span>
              <p>Soat</p>
            </div>
            <div className="circle">
              <span>{timeLeft.minutes}</span>
              <p>Daqiqa</p>
            </div>
            <div className="circle">
              <span>{timeLeft.seconds}</span>
              <p>Soniya</p>
            </div>
          </div>

          <p className="address">📍 Manzil: Jaloyir <br /> Muqaddam Restorani </p>
          <p className="location">
            <a href="geo:0,0?q=Muqaddam" className="map-link">
              To‘yxona joylashuvi
            </a>
          </p>

          <button className="music-button" onClick={toggleAudio}>
            {isPlaying ? "⏸ Musiqani to‘xtatish" : "▶ Musiqani davom ettirish"}
          </button>

          
        </>
      )}
    </div>
  );
};

export default App;

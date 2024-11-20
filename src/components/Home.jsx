import React, { useEffect, useState } from 'react';
import "../Styles/Home.css";

function Home({ onStart }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <header className="header">
      <div className="logo-section">
        <h1 className="title">Healthy Life</h1>
        <button className="back-button">{"<"}</button>
      </div>
      <nav className="navigation">
        <a href="#">Home</a>
        <div className="dropdown">
          <a href="#" className="dropbtn">
            Fitur &#x25BC;
          </a>
          <div className="dropdown-content">
            <a href="#">Fitur 1</a>
            <a href="#">Fitur 2</a>
            <a href="#">Fitur 3</a>
          </div>
        </div>
        <a href="#">Artikel</a>
        <a href="#">Pusat Bantuan</a>
      </nav>
      <button className="menu-button">&#9776;</button>
    </header>
      <h1>Selamat Tidur</h1>
      <h2 className="time">{time.toLocaleTimeString()}</h2>
      <div className="clock">
        <img src="1789-[Converted].png" alt="Clock Icon"/>
      </div>
      <button onClick={onStart} className="start-button">
        Mulai Tidur
      </button>
    </div>
  );
}

export default Home;

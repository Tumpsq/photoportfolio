import React, { useEffect, useState } from "react";
import "./App.css";
import PhotoPlayer from "./components/PhotoPlayer";
import TopIcon from "./assets/img/TuomoHautalaPhotographyVesileima.png";

function App() {
  const initMouseMoveFunctions = () => {
    const bg = document.querySelector(".App");
    const windowWidth = window.innerWidth / 0.5;
    const windowHeight = window.innerHeight / 0.5;
    bg.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX / windowWidth;
      const mouseY = e.clientY / windowHeight;
      const player = document.querySelector(".PhotoPlayer");
      player.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
    });
  };

  const [contentMaskState, setContentMaskState] = useState(true);

  return (
    <div className="App">
      <div
        className="App-mask"
        style={{
          animationName: `${
            contentMaskState ? "Show-content-mask" : "Hide-content-mask"
          }`,
        }}
      />
      <div className="Top-icon">
        <img src={TopIcon} alt="TopIcon" />
      </div>
      <div className="App-frames" />
      <PhotoPlayer
        initMouseMoveFunctions={initMouseMoveFunctions}
        setContentMaskState={setContentMaskState}
      />
    </div>
  );
}

export default App;

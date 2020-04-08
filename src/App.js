import React from "react";
import "./App.css";
import PhotoPlayer from "./components/PhotoPlayer";

function App() {
  const initMouseMoveFunctions = () => {
    // const bg = document.querySelector(".App");
    // const windowWidth = window.innerWidth / 2;
    // const windowHeight = window.innerHeight / 2;
    // bg.addEventListener("mousemove", (e) => {
    //   const mouseX = e.clientX / windowWidth;
    //   const mouseY = e.clientY / windowHeight;
    //   const player = document.querySelector(".PhotoPlayer");
    //   player.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
    // });
  };

  return (
    <div className="App">
      <div className="App-frames" />
      <PhotoPlayer initMouseMoveFunctions={initMouseMoveFunctions} />
    </div>
  );
}

export default App;

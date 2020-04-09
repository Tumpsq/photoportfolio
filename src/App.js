import React, { useEffect, useState } from "react";
import "./App.css";
import PhotoPlayer from "./components/PhotoPlayer";
import Photographer_logo from "./assets/img/TuomoHautalaPhotographyVesileima.png";
import Photographer_profile_image from "./assets/img/Photographer_profile_image.jpg";

function App() {
  // const initMobileTiltFunctions = () => {
  //   //const inner = document.getElementById("inner");
  //   const limit = 45;
  //   if (window.DeviceOrientationEvent) {
  //     const player = document.querySelector(".PhotoPlayer");

  //     window.addEventListener("deviceorientation", function (event) {
  //       console.log("SADASD");
  //       if (Math.abs(position) > limit) {
  //         if (position > limit) {
  //           position = limit;
  //         } else {
  //           position = -limit;
  //         }
  //       }
  //       position = position / -50;
  //       let style = "rotateY(" + position + "deg)";
  //       inner.style.transform = style;
  //     });
  //   }
  // };

  // useEffect(() => {
  //   initMobileTiltFunctions();
  // }, []);

  const initMouseMoveFunctions = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    window.addEventListener("mousemove", (e) => {
      var center = { x: windowWidth / 2, y: windowHeight / 2 };
      var shadowX = (center.x - e.clientX) / 40;
      var shadowY = (center.y - e.clientY) / 40;
      const appMenuContent = document.querySelector(".Photographer-logo");
      appMenuContent.style.setProperty(
        "-webkit-filter",
        `drop-shadow(${Math.ceil(shadowX)}px ${Math.ceil(
          shadowY
        )}px 1px #11111163)`
      );
      const player = document.querySelector(".PhotoPlayer");
      player.style.transform = `translate3d(-${
        e.clientX / windowWidth / 0.5
      }%, -${e.clientY / windowHeight / 0.5}%, 0)`;
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
      <div className="App-menu-content">
        <div className="Photographer-logo">
          <img src={Photographer_logo} alt="Photograpger_logo_image" />
        </div>
        <div className="Photographer-profile-info">
          <div className="Photographer-profile-image">
            <img src={Photographer_profile_image} alt="" />
          </div>
        </div>
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

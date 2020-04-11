import React, { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader";
import PhotoPlayer from "./components/PhotoPlayer";
import Photographer_logo from "./assets/img/TuomoHautalaPhotographyWM_w400.png";
import Photographer_profile_image from "./assets/img/Profile_img_0.jpg";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [contentMaskState, setContentMaskState] = useState(true);
  const [menuState, setMenuState] = useState(null);
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

  useEffect(() => {
    function winLoad(callback) {
      if (document.readyState === "complete") {
        callback();
      } else {
        window.addEventListener("load", callback);
      }
    }

    winLoad(function () {
      console.log("LOADED");
      initMouseMoveFunctions();
      setIsLoading(false);
      setContentMaskState(false);
      setMenuState("init");
      const photographerLogo = document.querySelector(".Photographer-logo");
      const photographerProfileInfo = document.querySelector(
        ".Photographer-profile-info"
      );
      photographerLogo.style.setProperty(
        "animation-name",
        "Init-photographer-logo"
      );
      photographerProfileInfo.style.setProperty(
        "animation-name",
        "Init-profile-info"
      );
    });
  }, []);

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

  const handleMenuClick = () => {
    const photographerLogo = document.querySelector(".Photographer-logo");
    const photographerProfileInfo = document.querySelector(
      ".Photographer-profile-info"
    );
    setMenuState(() => {
      if (menuState === "init" || menuState === "hide") {
        setMenuState("show");
        photographerLogo.style.setProperty("animation-duration", "2s");
        photographerLogo.style.setProperty(
          "animation-name",
          "Show-photographer-logo"
        );
        photographerProfileInfo.style.setProperty("animation-duration", "2s");
        photographerProfileInfo.style.setProperty(
          "animation-name",
          "Show-profile-info"
        );
      } else {
        setMenuState("hide");
        photographerLogo.style.setProperty(
          "animation-name",
          "Hide-photographer-logo"
        );
        photographerProfileInfo.style.setProperty(
          "animation-name",
          "Hide-profile-info"
        );
      }
    });
  };

  return (
    <div className="App">
      {isLoading && <Loader state={isLoading} />}
      <div
        className="App-mask"
        style={{
          animationName: `${
            contentMaskState ? "Show-content-mask" : "Hide-content-mask"
          }`,
        }}
      />
      <div className="Menu-button">
        <div
          className="icon-3"
          onClick={() => handleMenuClick()}
          style={{
            transform: `${
              menuState === "init" || menuState === "hide"
                ? "rotate(-135deg) rotate3d(0, 0, 1, 0deg)"
                : "rotate(-135deg) rotate3d(0, 0, 1, 180deg)"
            }`,
          }}
        >
          <div className="arrow">
            <div className="top-arrow"></div>
          </div>
        </div>
      </div>
      <div className="Photographer-logo">
        <img src={Photographer_logo} alt="Photograpger_logo_image" />
      </div>
      <div className="Photographer-profile-info">
        <div className="Photographer-profile-image">
          <img src={Photographer_profile_image} alt="" />
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

import React, { useEffect, useState } from "react";
import PhotoPlayerImage from "./PhotoPlayerImage";
import img_0 from "../assets/img/img_0.JPG";
import img_1 from "../assets/img/img_1.JPG";
import img_2 from "../assets/img/img_2.JPG";
import img_3 from "../assets/img/img_3.JPG";
import img_4 from "../assets/img/img_4.JPG";
import img_5 from "../assets/img/img_5.JPG";
import img_6 from "../assets/img/img_6.JPG";
import img_7 from "../assets/img/img_7.JPG";
import img_8 from "../assets/img/img_8.JPG";
import img_9 from "../assets/img/img_9.JPG";
import img_10 from "../assets/img/img_10.JPG";
import img_11 from "../assets/img/img_11.JPG";
import img_12 from "../assets/img/img_12.JPG";
import img_13 from "../assets/img/img_13.JPG";
import img_14 from "../assets/img/img_14.JPG";
import img_15 from "../assets/img/img_15.JPG";
import img_16 from "../assets/img/img_16.JPG";
import img_17 from "../assets/img/img_17.JPG";
import img_18 from "../assets/img/img_18.JPG";
import img_19 from "../assets/img/img_19.JPG";
import img_20 from "../assets/img/img_20.JPG";
import img_21 from "../assets/img/img_21.JPG";

var currentImageIndex = 0;
var nextImageIndex = 0;

const PhotoPlayer = ({ initMouseMoveFunctions }) => {
  useEffect(() => {
    window.addEventListener("animationend", handlePhotoChange);
    initMouseMoveFunctions();
  }, []);

  //   // SHOW FIRST PHOTO WHEN PHOTOPLAYER HAS BEEN MOUNTED
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentImageIndex((currentImageIndex) => currentImageIndex + 1);
  //     }, 5000);
  //     return () => clearInterval(interval);
  //   }, []);

  const [images, setImages] = useState([
    { id: "img_0", state: true, src: img_0 },
    { id: "img_1", state: false, src: img_1 },
    { id: "img_2", state: false, src: img_2 },
    { id: "img_3", state: false, src: img_3 },
    { id: "img_4", state: false, src: img_4 },
    { id: "img_5", state: false, src: img_5 },
    { id: "img_6", state: false, src: img_6 },
    { id: "img_7", state: false, src: img_7 },
    { id: "img_8", state: false, src: img_8 },
    { id: "img_9", state: false, src: img_9 },
    { id: "img_10", state: false, src: img_10 },
    { id: "img_11", state: false, src: img_11 },
    { id: "img_12", state: false, src: img_12 },
    { id: "img_13", state: false, src: img_13 },
    { id: "img_14", state: false, src: img_14 },
    { id: "img_15", state: false, src: img_15 },
    { id: "img_16", state: false, src: img_16 },
    { id: "img_17", state: false, src: img_17 },
    { id: "img_18", state: false, src: img_18 },
    { id: "img_19", state: false, src: img_19 },
    { id: "img_20", state: false, src: img_20 },
    { id: "img_21", state: false, src: img_21 },
  ]);

  const handlePhotoChange = (event) => {
    switch (event.animationName) {
      case "showPhotoPlayer-image":
        // NEW PHOTO HAS NOW FULLY ANIMATED TO PLAYER
        // WAIT FOR TIMEOUT AND CHANGE TO NEXT ONE
        if (currentImageIndex >= images.length - 1) {
          nextImageIndex = 0;
          console.log(nextImageIndex);
        } else {
          nextImageIndex++;
          console.log(nextImageIndex);
        }

        console.log("images.length ", images.length);
        console.log("currentImageIndex ", currentImageIndex);
        console.log("nextImageIndex ", nextImageIndex);

        //setTimeout(() => {
        let newState = [...images];
        newState[currentImageIndex].state = false;
        newState[nextImageIndex].state = true;
        setImages(newState);
        console.log(newState);
        currentImageIndex = nextImageIndex;
        //}, 3000);
        break;
      default:
        break;
    }
  };

  return (
    <div className="PhotoPlayer" id="Photo-player">
      {images.map((img) => {
        return <PhotoPlayerImage key={img.id} img={img} state={img.state} />;
      })}
    </div>
  );
};

export default PhotoPlayer;

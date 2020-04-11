import React, { useEffect, useState } from "react";
import PhotoPlayerImage from "./PhotoPlayerImage";
import img_0 from "../assets/img/photo_0.jpg";
import img_1 from "../assets/img/photo_1.jpg";
import img_2 from "../assets/img/photo_2.jpg";
import img_3 from "../assets/img/photo_3.jpg";
import img_4 from "../assets/img/photo_4.jpg";
import img_5 from "../assets/img/photo_5.jpg";
import img_6 from "../assets/img/photo_6.jpg";
import img_7 from "../assets/img/photo_7.jpg";
import img_8 from "../assets/img/photo_8.jpg";
import img_9 from "../assets/img/photo_9.jpg";
import img_10 from "../assets/img/photo_10.jpg";
import img_11 from "../assets/img/photo_11.jpg";
import img_12 from "../assets/img/photo_12.jpg";
import img_13 from "../assets/img/photo_13.jpg";
import img_14 from "../assets/img/photo_14.jpg";
import img_15 from "../assets/img/photo_15.jpg";
import img_16 from "../assets/img/photo_16.jpg";
import img_17 from "../assets/img/photo_17.jpg";
import img_18 from "../assets/img/photo_18.jpg";
import img_19 from "../assets/img/photo_19.jpg";
import img_20 from "../assets/img/photo_20.jpg";
import img_21 from "../assets/img/photo_21.jpg";
import img_22 from "../assets/img/photo_22.jpg";
import img_23 from "../assets/img/photo_23.jpg";
import img_24 from "../assets/img/photo_24.jpg";
import img_25 from "../assets/img/photo_25.jpg";
import img_26 from "../assets/img/photo_26.jpg";
import img_27 from "../assets/img/photo_27.jpg";

var currentImageIndex = 0;
var nextImageIndex = 0;

const PhotoPlayer = ({ initMouseMoveFunctions, setContentMaskState }) => {
  useEffect(() => {
    window.addEventListener("animationend", handlePhotoChange);
  });

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
    { id: "img_22", state: false, src: img_22 },
    { id: "img_23", state: false, src: img_23 },
    { id: "img_24", state: false, src: img_24 },
    { id: "img_25", state: false, src: img_25 },
    { id: "img_26", state: false, src: img_26 },
    { id: "img_27", state: false, src: img_27 },
  ]);

  const handlePhotoChange = (event) => {
    switch (event.animationName) {
      case "Show-photo-player-image":
        // NEW PHOTO HAS NOW FULLY ANIMATED TO PLAYER
        // WAIT FOR TIMEOUT AND CHANGE TO NEXT ONE
        if (currentImageIndex >= images.length - 1) {
          nextImageIndex = 0;
          //console.log(nextImageIndex);
        } else {
          nextImageIndex++;
          //console.log(nextImageIndex);
        }
        //setTimeout(() => {
        let newState = [...images];
        newState[currentImageIndex].state = false;
        newState[nextImageIndex].state = true;
        setImages(newState);
        //console.log(newState);
        currentImageIndex = nextImageIndex;
        //}, 3000);
        break;
      default:
        break;
    }
  };

  return (
    <div className="PhotoPlayer" id="Photo-player">
      {images.map((img, index) => {
        return <PhotoPlayerImage key={img.id} img={img} state={img.state} />;
      })}
    </div>
  );
};

export default PhotoPlayer;

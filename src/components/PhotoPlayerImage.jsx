import React from "react";

const PhotoPlayerImage = ({ img, state }) => {
  return (
    <img
      id={img.id}
      className="PhotoPlayer-image"
      src={img.src}
      alt="asd"
      style={{
        animationName: `${
          state ? "Show-photo-player-image" : "Hide-photo-player-image"
        }`,
      }}
    />
  );
};

export default PhotoPlayerImage;

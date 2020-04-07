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
          state ? "showPhotoPlayer-image" : "hidePhotoPlayer-image"
        }`,
      }}
    />
  );
};

export default PhotoPlayerImage;

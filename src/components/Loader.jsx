import React from "react";

const Loader = ({ state }) => {
  return (
    <div
      className="Loader"
      style={{ animationName: `${state ? "Loading" : "none"}` }}
    />
  );
};

export default Loader;

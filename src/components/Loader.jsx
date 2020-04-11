import React from "react";

const Loader = ({ state }) => {
  console.log("STATE ", state);
  return (
    <div
      className="Loader"
      style={{ animationName: `${state ? "Loading" : "none"}` }}
    />
  );
};

export default Loader;

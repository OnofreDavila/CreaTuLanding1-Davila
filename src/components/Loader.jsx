import React from "react";
import { PacmanLoader } from "react-spinners";

export const Loader = ({ text }) => {
  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "100vh", width: "100%" }}
    >
      <PacmanLoader size={40} />
      <span>{text}</span>
    </div>
  );
};

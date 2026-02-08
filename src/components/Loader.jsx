import React from "react";
import {  SyncLoader } from "react-spinners";

export const Loader = ({ text }) => {
  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "100vh", width: "100%" }}
    >
      <SyncLoader size={10} margin={5} />
      <span style={{padding:10}}>{text}</span>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

export const Error = () => {
  return (
    <div className="error-page-wrapper">
      <div className="error-content">
        <div className="error-code">404</div>
        <h1 className="error-title">PÁGINA NO ENCONTRADA</h1>
        <p className="error-message">La ruta que buscas no existe o ha sido movida</p>
        <Link to="/" className="btn-error-home">
          VOLVER AL INICIO
        </Link>
      </div>
    </div>

    // <div className="container text-center">
    //   <h1> Error: no se encuentra la ruta! </h1>
    //   <Link className="btn btn-dark" to="/">
    //     !Volver a Home!
    //   </Link>
    // </div>
  );
};

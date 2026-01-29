import React from "react";
import { Link } from "react-router-dom";

export const EmptyCart = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <h1>Tu carrito esta vacio! 😱 </h1>
      <h2>Te invitamos a ver nuestros productos </h2>
      <Link to="/" className="btn btn-dark">
        Ir a Comprar.
      </Link>
    </div>
  );
};

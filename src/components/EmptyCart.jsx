import React from "react";
import { Link } from "react-router-dom";
import "./EmptyCart.css";

export const EmptyCart = () => {
  return (
    <div className="empty-state-wrapper">
      <div className="empty-state-content">
        <div className="empty-icon">🛒</div>
        <h1 className="empty-title">TU CARRITO ESTÁ VACÍO</h1>
        <p className="empty-message">Descubre nuestra colección y encuentra tu estilo único</p>
        <Link to="/" className="btn-shop">
          EXPLORAR PRODUCTOS
        </Link>
      </div>
    </div>

    // <div className="container d-flex flex-column justify-content-center align-items-center">
    //   <h1>Tu carrito esta vacio! 😱 </h1>
    //   <h2>Te invitamos a ver nuestros productos </h2>
    //   <Link to="/" className="btn btn-dark">
    //     Ir a Comprar.
    //   </Link>
    // </div>
  );
};

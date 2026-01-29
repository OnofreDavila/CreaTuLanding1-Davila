import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const CartView = () => {
  const { cart, removeItem, clear, total } = useContext(CartContext);

  return (
    <div className="container">
      <h1>Tu Carrito 🛒</h1>
      <div>
        {cart.map((compra) => (
          <div
            key={compra.id}
            className="d-flex justify-content-between align-items-center w-100 p-4"
          >
            <img
              src={compra.img}
              alt={compra.name}
              style={{ width: "10rem" }}
            />
            <span>Nombre: {compra.name}</span>
            <span>Precio: ${compra.price}</span>
            <span>cantidad: {compra.quantity}</span>
            <span>precio final: ${compra.quantity * compra.price}</span>
            <button
              className="btn btn-danger"
              onClick={() => removeItem(compra.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
      <span>Total a pagar: $ </span>
      <div>
        <button className="btn btn-danger m-2" onClick={clear}>
          Vaciar Carrito
        </button>
        <button className="btn btn-success">Terminar Compra.</button>
      </div>
    </div>
  );
};

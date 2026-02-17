import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ItemCount.css";

export const ItemCount = ({ stock, onAdd }) => {
  const [counter, setCounter] = useState(1);
  const navigate = useNavigate();

  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const restar = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const comprar = () => {
    onAdd(counter);
  };

  return (
    <>
      {stock > 0 ? (
        <div className="item-count-wrapper">
          <div className="quantity-selector">
            <button className="quantity-btn" onClick={restar} disabled={counter === 1}>
              -
            </button>
            <span className="quantity-display">{counter}</span>
            <button className="quantity-btn" onClick={sumar} disabled={counter === stock}>
              +
            </button>
          </div>
          <button className="btn-add-cart" onClick={comprar} disabled={counter === 0 || stock === 0}>
            AGREGAR AL CARRITO
          </button>
        </div>
      ) : (
        <div className="no-stock-wrapper">
          <p className="no-stock-message">Lo sentimos, no hay stock disponible en este momento</p>
          <button className="btn-back" onClick={() => navigate(-1)}>
            VOLVER ATRÁS
          </button>
        </div>
      )}
    </>
  );
};

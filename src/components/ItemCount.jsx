import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ItemCount = ({ stock, onAdd }) => {
  //Estado del contador
  const [counter, setCounter] = useState(1);
  const navigate = useNavigate();

  //funciones de los botones
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
        <div>
          <button className="btn btn-danger" onClick={restar}>
            -
          </button>
          <span className="btn">{counter}</span>
          <button className="btn btn-success" onClick={sumar}>
            +
          </button>
          <button
            className="btn btn-primary m-2"
            onClick={comprar}
            disabled={counter === 0 || stock === 0}
          >
            Comprar
          </button>
        </div>
      ) : (
        <div>
          <p>Lo sentimos, por el momento no hay stock disponible 😭</p>
          <button className="btn btn-dark" onClick={() => navigate(-1)}>
            Volver atrás
          </button>
        </div>
      )}
    </>
  );
};

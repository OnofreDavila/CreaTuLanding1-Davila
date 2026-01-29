import React, { useState } from "react";

export const ItemCount = ({ stock, onAdd }) => {
  //Estado del contador
  const [counter, setCounter] = useState(1);

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
  );
};

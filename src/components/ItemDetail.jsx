import React from "react";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ detail }) => {
  const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} del producto ${detail.name}.`);
  };

  return (
    <div className="container">
      <h1>Detalle del producto: {detail.name}</h1>
      <img src={detail.img} alt={detail.name} />
      <p>{detail.description}</p>
      <p>Stock: {detail.stock}</p>
      <p>Precio: ${detail.price},00</p>
      <ItemCount stock={detail.stock} onAdd={onAdd} />
    </div>
  );
};

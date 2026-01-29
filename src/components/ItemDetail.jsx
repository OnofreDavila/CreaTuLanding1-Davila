import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ItemCount } from "./ItemCount";
import { Link, useNavigate } from "react-router-dom";

export const ItemDetail = ({ detail }) => {
  const { addItem, cart } = useContext(CartContext);
  const [condiRender, setCondiRender] = useState(false);
  const navigate = useNavigate();
  console.log(cart, "cart");

  const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} del producto ${detail.name}.`);
    addItem(detail, cantidad);
    setCondiRender(true);
  };

  return (
    <div className="container">
      <h1>Detalle del producto: {detail.name}</h1>
      <img src={detail.img} alt={detail.name} />
      <p>{detail.description}</p>
      <p>Stock: {detail.stock}</p>
      <p>Precio: ${detail.price},00</p>
      {condiRender ? (
        <>
          <Link className="btn btn-dark me-2" to="/cart">
            Ir al Carrito
          </Link>
          <button className="btn btn-dark" onClick={() => navigate(-1)}>
            Volver atrás
          </button>
        </>
      ) : (
        <ItemCount stock={detail.stock} onAdd={onAdd} />
      )}
    </div>
  );
};

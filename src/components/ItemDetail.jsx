import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ItemCount } from "./ItemCount";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./ItemDetail.css";

export const ItemDetail = ({ detail }) => {
  const { addItem, itemQuantity } = useContext(CartContext);
  const [condiRender, setCondiRender] = useState(false);
  const navigate = useNavigate();

  const onAdd = (cantidad) => {
    addItem(detail, cantidad);
    setCondiRender(true);
    Swal.fire({
      title: `¡Producto agregado!`,
      text: `${detail.name} x${cantidad}`,
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
      background: "#0a0a0a",
      color: "#ffffff",
      iconColor: "#f4e04d",
    });
  };

  const stockActualizado = detail.stock - itemQuantity(detail.id);

  return (
    <div className="item-detail-wrapper">
      <div className="item-detail-container">
        <div className="detail-image-section">
          <img src={detail.img} alt={detail.name} className="detail-image" />
        </div>

        <div className="detail-info-section">
          <div className="detail-header">
            <h1 className="detail-name">{detail.name}</h1>
            <div className="detail-price">${detail.price}</div>
          </div>

          <div className="detail-description">
            <p>{detail.description}</p>
          </div>

          <div className="detail-stock">
            <span className="stock-label">DISPONIBILIDAD:</span>
            <span className={`stock-value ${stockActualizado > 0 ? "in-stock" : "out-stock"}`}>
              {stockActualizado > 0 ? `${stockActualizado} unidades disponibles` : "Sin stock"}
            </span>
          </div>

          <div className="detail-actions">
            {condiRender ? (
              <div className="action-buttons">
                <Link className="btn-cart" to="/cart">
                  IR AL CARRITO
                </Link>
                <button className="btn-continue" onClick={() => navigate(-1)}>
                  SEGUIR COMPRANDO
                </button>
              </div>
            ) : (
              <ItemCount stock={stockActualizado} onAdd={onAdd} />
            )}
          </div>
        </div>
      </div>
    </div>

    // <div className="container">
    //   <h1>Detalle del producto: {detail.name}</h1>
    //   <img src={detail.img} alt={detail.name} />
    //   <p>{detail.description}</p>
    //   <p>Stock: {stockActualizado} unidades disponibles</p>
    //   <p>Precio: ${detail.price},00</p>
    //   {condiRender ? (
    //     <>
    //       <Link className="btn btn-dark me-2" to="/cart">
    //         Ir al Carrito
    //       </Link>
    //       <button className="btn btn-dark" onClick={() => navigate(-1)}>
    //         Volver atrás
    //       </button>
    //     </>
    //   ) : (
    //     <ItemCount stock={stockActualizado} onAdd={onAdd} />
    //   )}
    // </div>
  );
};

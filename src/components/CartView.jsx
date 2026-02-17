import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./CartView.css";

export const CartView = () => {
  const { cart, removeItem, clear, totalPrice } = useContext(CartContext);
  const preConfirm = () => {
    Swal.fire({
      title: "¿Estás seguro de vaciar el Carrito?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showDenyButton: true,
      denyButtonText: "Cancelar",
      confirmButtonText: "Sí, vaciar",
      confirmButtonColor: "#ff6b35",
      denyButtonColor: "#1a1a1a",
      background: "#0a0a0a",
      color: "#ffffff",
    }).then((result) => {
      if (result.isConfirmed) {
        clear();
        Swal.fire({
          title: "¡Carrito vaciado!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
          background: "#0a0a0a",
          color: "#ffffff",
        });
      }
    });
  };

  return (
    <div className="cart-view-wrapper">
      <div className="cart-header">
        <h1 className="cart-title">TU CARRITO 🛒</h1>
        <p className="cart-subtitle">
          {cart.length} {cart.length === 1 ? "producto" : "productos"}
        </p>
      </div>

      <div className="cart-items-container">
        {cart.map((compra) => (
          <div key={compra.id} className="cart-item">
            <div className="cart-item-image">
              <img src={compra.img} alt={compra.name} />
            </div>
            <div className="cart-item-info">
              <h3 className="cart-item-name">{compra.name}</h3>
              <p className="cart-item-price">${compra.price}</p>
            </div>
            <div className="cart-item-quantity">
              <span className="quantity-label">Cantidad:</span>
              <span className="quantity-value">{compra.quantity}</span>
            </div>
            <div className="cart-item-total">
              <span className="total-label">Subtotal:</span>
              <span className="total-value">${compra.quantity * compra.price}</span>
            </div>
            <button className="cart-item-remove" onClick={() => removeItem(compra.id)} title="Eliminar producto">
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="summary-content">
          <div className="summary-row">
            <span className="summary-label">TOTAL A PAGAR:</span>
            <span className="summary-total">${totalPrice()}</span>
          </div>
        </div>

        <div className="cart-actions">
          <button className="btn-clear-cart" onClick={preConfirm}>
            VACIAR CARRITO
          </button>
          <Link to="/checkout" className="btn-checkout">
            FINALIZAR COMPRA
          </Link>
        </div>
      </div>
    </div>
  );
};

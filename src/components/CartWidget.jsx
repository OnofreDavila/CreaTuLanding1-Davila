import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { TiShoppingCart } from "react-icons/ti";
import "./CartWidget.css";

export const CartWidget = () => {
  const { cart, cartQuantity } = useContext(CartContext);
  return (
    <div className="cart-widget">
      <TiShoppingCart className="cart-icon" />
      {cart.length > 0 && <span className="cart-badge">{cartQuantity()}</span>}
    </div>
  );
};

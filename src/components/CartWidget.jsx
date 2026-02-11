import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { TiShoppingCart } from "react-icons/ti";
import Badge from "react-bootstrap/Badge";

export const CartWidget = () => {
  const { cart, cartQuantity } = useContext(CartContext);
  return (
    <div>
      <TiShoppingCart fontSize={"1.5rem"} color="white" />
      {cart.length > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
    </div>
  );
};

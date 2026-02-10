import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { TiShoppingCart } from "react-icons/ti";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const { cart, cartQuantity } = useContext(CartContext);
  return (
    <div>
      <Link to='/cart'>
        <TiShoppingCart fontSize={"1.5rem"} color="white" />
        <Badge bg="danger">{cartQuantity()}</Badge>
      </Link>      
    </div>
  );
};

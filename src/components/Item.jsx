import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Item.css";

export const Item = ({ prod }) => {
  return (
    <Card className="product-card">
      <div className="product-image-wrapper">
        <Card.Img variant="top" src={prod.img} className="product-image" />
        <div className="product-overlay">
          <Link to={`/item/${prod.id}`} className="view-details-btn">
            VER DETALLES
          </Link>
        </div>
      </div>
      <Card.Body className="product-body">
        <Card.Title className="product-name">{prod.name}</Card.Title>
        <Card.Text className="product-price">${prod.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

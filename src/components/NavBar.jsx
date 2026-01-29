import { useContext } from "react";
import { CartWidget } from "./CartWidget";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export const NavBar = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Navbar className="bg-secondary container">
        <Container className="d-flex align-items-center  justify-content-between flex-wrap">
          <div className="d-flex align-items-center flex-wrap gap-3">
            <Navbar.Brand as={NavLink} to="/" className="text-white">
              <img src="./logoPC.png" alt="logo" height={40} />
            </Navbar.Brand>
            <Nav className="me-auto d-flex flex-row gap-3 flex-wrap">
              <Nav.Link as={NavLink} to="/" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/category/Men" className="text-white">
                Men
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/category/Women"
                className="text-white"
              >
                Women
              </Nav.Link>
              <Nav.Link as={NavLink} to="/category/Kids" className="text-white">
                Kids
              </Nav.Link>
            </Nav>
          </div>
          <div className="d-flex align-items-center flex-shrink-0">
            <CartWidget />
          </div>
        </Container>
      </Navbar>
    </>
  );
};

import { CartWidget } from "./CartWidget";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <>
      <Navbar className="navbar-custom">
        <Container className="navbar-container">
          <div className="navbar-left">
            <Navbar.Brand as={NavLink} to="/" className="brand-logo">
              <img src="./logoPC.png" alt="logo" className="logo-img" />
              <span className="brand-text">CONSPIRACY</span>
            </Navbar.Brand>
            <Nav className="nav-links">
              <Nav.Link as={NavLink} to="/" className="nav-item">
                HOME
              </Nav.Link>
              <Nav.Link as={NavLink} to="/category/Men" className="nav-item">
                MEN
              </Nav.Link>
              <Nav.Link as={NavLink} to="/category/Women" className="nav-item">
                WOMEN
              </Nav.Link>
              <Nav.Link as={NavLink} to="/category/Kids" className="nav-item">
                KIDS
              </Nav.Link>
            </Nav>
          </div>
          <div className="navbar-right">
            <Nav.Link as={NavLink} to="/cart" className="cart-link">
              <CartWidget />
            </Nav.Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

import { CartWidget } from "./CartWidget";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  //const { cart } = useContext(CartContext);

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

      {/* <Navbar className="bg-secondary container">
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
              <Nav.Link as={NavLink} to="/category/Women" className="text-white">
                Women
              </Nav.Link>
              <Nav.Link as={NavLink} to="/category/Kids" className="text-white">
                Kids
              </Nav.Link>
            </Nav>
          </div>
          <div className="d-flex align-items-center flex-shrink-0">
            <Nav.Link as={NavLink} to="/cart">
              <CartWidget />
            </Nav.Link>
          </div>
        </Container>
      </Navbar> */}
    </>
  );
};

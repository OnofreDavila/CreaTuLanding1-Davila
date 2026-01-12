import React from "react";
import { CartWidget } from "./CartWidget";
import { Container, Nav, Navbar } from "react-bootstrap";

export const NavBar = () => {
  return (
    <>
      <Navbar className="bg-secondary">
        <Container className="d-flex align-items-center  justify-content-between flex-wrap">
          <div className="d-flex align-items-center flex-wrap gap-3">
            <Navbar.Brand href="#" className="text-white">
              <img src="./logoPC.png" alt="logo" height={40} />
            </Navbar.Brand>
            <Nav className="me-auto d-flex flex-row gap-3 flex-wrap">
              <Nav.Link href="#" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Poleras Adultos
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Poleras Niños
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

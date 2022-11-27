import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const Navbarr = () => {

    return (
        <>
            <Navbar bg="snow" className='zzz' expand="lg">
      <Container>
        <Navbar.Brand  href="#home">E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="me-auto">
            <Nav.Link as={Link} to="/">home</Nav.Link>
            <Nav.Link as={Link} to="/login">login</Nav.Link>
            <Nav.Link as={Link} to="/purchases">pucharses</Nav.Link>
            <Nav.Link as={Link} to="/">carrito</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </>
    );
};

export default Navbarr;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SideCart from './SideCart';

const Navbarr = () => {

const navigate=useNavigate()

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);



    return (
        <>
            <Navbar bg="snow" className='zzz' expand="lg">
      <Container>
        <Navbar.Brand style={{color:"white"}}  onClick={()=>navigate("/")}>E-commerce<i className='bx bx-cart'></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="me-auto">
            <Nav.Link as={Link} to="/">Home<i className='bx bx-gift'></i></Nav.Link>
            <Nav.Link as={Link} to="/login">Login<i className='bx bxs-user-circle'></i></Nav.Link>
            <Nav.Link as={Link} to="/purchases">Pucharses<i className='bx bx-dollar'></i></Nav.Link>
            <Nav.Link as={Link} onClick={handleShow}>Cart<i className='bx bxs-shopping-bags'></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

            <SideCart show={show} handleClose={handleClose}/>

        </>
    );
};

export default Navbarr;
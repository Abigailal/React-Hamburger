import React, {useState} from 'react';
import logoHamburguesa from '@assets/logo-burguer.png';
import logoMoto from '@assets/icono-moto.png';
import './NavHeader.scss';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarHeader = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="ligth" variant="ligth"  className="fixed-top pt-0 mt-0 ">
            <Container fluid className="fondoNavItems px-0">
                <Navbar.Brand href="#home" className="logoimg-a px-2">
                    <div className="logoimg">
                        <img src={logoHamburguesa} alt="Logo de la empresa Burguer House"/>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="btn-navbar mx-4"/>
                <Navbar.Collapse id="responsive-navbar-nav"  className="collapse fondoNavItems " >
                    <Nav className="navbar-nav ms-auto mb-2 mb-lg-0 fondoNavItems align-items-center px-4">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#menu">Menu</Nav.Link>
                        <Nav.Link href="#ourstory">Our Story</Nav.Link>
                        <Nav.Link href="#contactus">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarHeader;
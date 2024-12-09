import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/images/Logo.png';
// import './App.css';


const Navbar = () => {
  return (
    <BootstrapNavbar className='navbar-custom' bg="" variant="" expand="lg">
      <BootstrapNavbar.Brand as={Link} to="/">
      <img src={logo} className='logo' alt='Laundary logo' width='100vh' height='100vh' /></BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          {/* <Nav.Link as={Link} disabled to="/">Home</Nav.Link> */}
          <Nav.Link className='navLinkClolor' as={Link} to="/price-list">Price List</Nav.Link>
          <NavDropdown className='navLinkClolor' title="More" id="basic-nav-dropdown dropDownMore">
            <NavDropdown.Item as={Link} to="/services">Services</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/about">About Us</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
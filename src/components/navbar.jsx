import React from "react";
import { Container, Navbar, Nav, NavLink } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Logo from "../assets/logo.png"


const menuData = [
  {
    path:'/menu',
    name: 'Menu'
  },
  {
    path: '/about',
    name: 'About'
  },
  {
    path: '/contact',
    name: 'Contact'
  },
]

export default function AppNavbar() {
  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Container>
        <Navbar.Brand href='/' className="me-auto">
            {/* LOGO */}
            <img
              src={Logo}
              width="219"
              height="79"
              className="d-inline-block align-top"
              alt="Logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {
                menuData.map((item)=>(
                    <NavLink href={item.path} key={item.name}>
                        <div>{item.name}</div>
                    </NavLink>
                ))
            }        
          </Nav>
          <Nav>
            <Nav.Link className="my-3"><i className="fa-brands fa-facebook-f"></i></Nav.Link>
            <Nav.Link className="my-3"><i className="fa-brands fa-instagram"></i></Nav.Link>
            <Nav.Link className="m-2" href='https://www.doordash.com/home/'><Button>Order Online</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
import React from "react";
import { Container, Navbar, Nav, NavLink } from 'react-bootstrap'
import Logo from "../assets/logo.svg"


const menuData = [
  {
    path:'/menu',
    name: 'Menu'
  },
  {
    path: '/reservations',
    name: 'Reservations'
  },
  {
    path: '/events',
    name: 'Events'
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
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href='/' className="me-auto">
            {/* LOGO */}
            <img
              src={Logo}
              width="190"
              height="50"
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
            <Nav.Link className="m-1"><i class="fa-brands fa-facebook-f"></i></Nav.Link>
            <Nav.Link className="m-1"><i class="fa-brands fa-instagram"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
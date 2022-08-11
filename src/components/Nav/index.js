import React, { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function TopNav() {
    return (
          <Container className="text-center">
        <Navbar bg="light" expand="lg" sticky="top">
            <Navbar.Brand href="home">My Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/About">About</Nav.Link>
                <Nav.Link href="/Projects">My Projects</Nav.Link>
                <Nav.Link href="/Contact">Contact Me</Nav.Link>

              </Nav>
            </Navbar.Collapse>
        </Navbar>
          </Container>
      );
    }

export default TopNav;
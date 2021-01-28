import React, { Component } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './style.css'

class NavBar extends Component {
    render() {
        return (
            <Navbar expand="lg" className="nav-bg text-white mb-4">
                <Container>
                    <Navbar.Brand href="/" className="text-white">Lance</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-white">
                        <FontAwesomeIcon icon={faBars} className="text-white" />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/" className="text-white">Home</Nav.Link>
                            <Nav.Link href="#about" className="text-white">About</Nav.Link>
                            <Nav.Link href="#projects" className="text-white">Projects</Nav.Link>
                            <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default NavBar

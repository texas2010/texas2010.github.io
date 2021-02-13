import React, { Component } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-scroll"

import ThemeModeToggle from '../ThemeModeToggle';

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
                            <Link href="/" className="nav-link text-white">Home</Link>
                            <Link href="#about"
                                to="about" smooth={true}
                                className="nav-link text-white">About</Link>
                            <Link href="#projects"
                                to="projects" smooth={true}
                                duration={600}
                                className="nav-link text-white">Projects</Link>
                            <Link href="#contact"
                                to="contact" smooth={true}
                                duration={1000}
                                className="nav-link text-white">Contact</Link>
                            <ThemeModeToggle className='nav-link text-white' />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default NavBar

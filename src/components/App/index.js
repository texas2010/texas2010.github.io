import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import NavBar from '../NavBar'
import AboutSection from '../AboutSection'
import ProjectSection from '../ProjectSection'
import ContactSection from '../ContactSection'

export default class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <AboutSection />
                <ProjectSection />
                <ContactSection />
                <Container className="mb-5">
                    <Row>
                        <p className="mx-auto text-white">&copy; {new Date().getFullYear()} texas2010</p>
                    </Row>
                </Container>
            </div>
        )
    }
}

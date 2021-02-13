import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons'

export default class index extends Component {
    render() {
        return (
            <Container className="mb-5">
                <Row className="justify-content-center mb-3">
                    <Col>
                        <h1 id="contact" className="text-center text-primary">Contact</h1>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} md className="text-center mb-2">
                        <a className="btn btn-outline-light"
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/texas2010"
                        >
                            <FontAwesomeIcon icon={faGithub} /> Github/texas2010</a>
                    </Col>
                    <Col xs={12} md className="text-center mb-2">
                        <a className="btn btn-outline-light"
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.freecodecamp.org/texas2010"
                        ><FontAwesomeIcon icon={faFreeCodeCamp} /> freeCodeCamp/texas2010</a>
                    </Col>
                </Row>
            </Container>
        )
    }
}

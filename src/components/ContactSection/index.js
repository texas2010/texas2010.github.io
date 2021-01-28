import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

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
                        >Github/texas2010</a>
                    </Col>
                    <Col xs={12} md className="text-center mb-2">
                        <a className="btn btn-outline-light"
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.freecodecamp.org/texas2010"
                        >freeCodeCamp/texas2010</a>
                    </Col>
                </Row>
            </Container>
        )
    }
}

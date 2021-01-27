import React, { Component } from 'react'
import { Container, Row, Col, CardDeck } from 'react-bootstrap'
import ProjectCard from '../ProjectCard';


const range = (num) => [...Array(num).keys()]


export default class index extends Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-center mb-2">
                    <Col>
                        <h1 id="projects" className="text-center text-primary">Projects</h1>
                    </Col>
                </Row>
                <Row className="d-flex flex-wrap justify-content-center">
                    <CardDeck className="justify-content-center">

                        {
                            range(6).map((item) => (<ProjectCard key={item} />))
                        }
                    </CardDeck>
                </Row>
                <hr className="border-primary border-bottom" />
            </Container >
        )
    }
}

import React, { Component } from 'react'
import { Container, Row, Col, CardDeck, Card } from 'react-bootstrap'


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
                            range(6).map((item) => {
                                return (
                                    <a href="#project" key={item}>
                                        <Card style={{ width: '280px', flex: 'none' }} bg="dark" text="white" className="mb-4" border="primary">
                                            <Card.Img width="280px" height="160px" variant="top" src="https://via.placeholder.com/100x160.png" />
                                            <Card.Body>
                                                <Card.Title>Card title</Card.Title>
                                                <Card.Text>
                                                    This is a wider card with supporting text below as a natural lead-in to
                                                    additional content. This content is a little bit longer.
                                            </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </a>
                                )
                            })
                        }
                    </CardDeck>
                </Row>
                <hr className="border-primary border-bottom" />
            </Container>
        )
    }
}

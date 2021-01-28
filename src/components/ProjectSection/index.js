import React, { Component } from 'react'
import { Container, Row, Col, CardDeck } from 'react-bootstrap'
import ProjectCard from '../ProjectCard';

const range = (num) => [...Array(num).keys()]


export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: null
        }
    }
    async componentDidMount() {
        try {
            const result = await fetch('/data/projects.json')
            const { projects } = await result.json()
            this.setState({
                projects
            })
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        const { projects } = this.state
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
                            projects ? projects.map((project, index) => (<ProjectCard key={index} project={project} />)) : 'Loading'
                        }
                    </CardDeck>
                </Row>
                <hr className="border-primary border-bottom" />
            </Container>
        )
    }
}

// {
//     range(6).map((item) => (<ProjectCard key={item} />))
// }
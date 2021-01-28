import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import './style.css'

export default class index extends Component {
    render() {
        const {
            title,
            body,
            imgLink,
            projectLink,
            skills
        } = this.props.project
        return (
            <Card style={{ flex: 'none' }} bg="dark" text="white" className="mb-4 project-card" border="primary">
                <a href={projectLink}>
                    <Card.Img variant="top" src={`/images/${imgLink}`} alt={title} />
                    <Card.Body>
                        <Card.Title className='text-white'>{title}</Card.Title>
                        <Card.Text className='text-white'>{body}</Card.Text>
                        <Card.Text className='text-white'>{skills}</Card.Text>
                    </Card.Body>
                </a>
            </Card>
        )
    }
}

import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import './style.css'

export default class index extends Component {
    render() {
        return (
            <Card href="#project" style={{ width: '280px', flex: 'none' }} bg="dark" text="white" className="mb-4 project-card" border="primary">
                <a href="#project">
                    <Card.Img width="280px" height="160px" variant="top" src="https://via.placeholder.com/100x160.png" />
                    <Card.Body>
                        <Card.Title className='text-white'>Card title</Card.Title>
                        <Card.Text className='text-white'>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                </Card.Text>
                    </Card.Body>
                </a>
            </Card>
        )
    }
}

import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './style.css';

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      aboutList: [
        {
          title: 'Languages',
          body: ['HTML', 'CSS', 'JavaScript'],
        },
        {
          title: 'Libraries/Frameworks',
          body: ['React', 'Node.js', 'Express.js'],
        },
        {
          title: 'Tools',
          body: ['Visual Studio Code', 'Git', 'Terminal'],
        },
      ],
    };
  }
  render() {
    const aboutList = this.state.aboutList.map(({ title, body }) => {
      return (
        <Col key={title}>
          <hr className='border d-md-none' />
          <p className='h4 text-color text-center'>{title}</p>
          <div className='d-flex justify-content-center'>
            <ul className='about-list'>
              {body.map((item) => (
                <li key={item} className='text-color'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Col>
      );
    });
    return (
      <Container>
        <Row className='justify-content-center mb-1'>
          <Col>
            <h1 id='about' className='text-center text-primary'>
              About
            </h1>
          </Col>
        </Row>
        <Row className='justify-content-center mb-2'>
          <Col md={8}>
            <p className='text-center lead text-color'>
              I am a junior front-end developer seeking a position that utilizes
              my skills with React, among other JavaScript libraries. I'm always
              looking for ways to innovate and help companies succeed by
              creating user-friendly interfaces with a strong focus on features
              and intuitive layouts.
            </p>
          </Col>
        </Row>
        <Row className='d-block d-md-flex justify-content-center'>
          {aboutList}
        </Row>
        <hr className='border-primary border-bottom' />
      </Container>
    );
  }
}

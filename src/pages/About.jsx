import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Hero from '../components/Hero'
import Content from '../components/Content'
import pineapple from '../assets/images/pineapple.JPG'

const About = (props) => {
  return (
    <div className="full-screen">
      <Hero title={props.title} />
      <Container fluid={true}>
      <Row className="justify-content-center align-items-center">
        <Col md={8}>
          <Content>
            <p>I’m a focused individual with a positive outlook on life
              and a passion for creating value.
              I’m a curious, hardworking, and people-loving person
              who enjoys a challenge. I get a kick out of
              improvement and betterment - whether it's within
              myself, my work, or my projects.
            </p>
            <p>I work with an open mind and treat people with an
              open heart, and some of my strongest abilities are a
              great eye for detail, I seek and enjoy responsibility,
              that I always give it my all, and that I put up high
              standards for myself.
            </p>
            <p>I dream of a project-oriented workspace where my
              creative intentions can flourish and where change
              matters. I aim to reach this through becoming a
              proficient developer - one way or the other!
            </p>
          </Content>
        </Col>
        <Col>
        <img className="l-card-image" src={pineapple} alt="Pineapple"/>
        </Col>
      </Row>
    </Container>
      
      
    </div>
  )
}

export default About
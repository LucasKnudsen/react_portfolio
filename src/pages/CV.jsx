import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'

import Hero from '../components/Hero'
import Content from '../components/Content'
import ContactForm from '../components/ContactForm'

class CV extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cv: {}
    };
  };
  
  componentDidMount() {
    axios.get('./data/cv.json').then(response => {
      this.setState({ cv: response.data })
    })
  }

  render () {

    const skillList = this.state.cv.skills.forEach((skill) => {
      return <li>{skill}</li>
    })

    return (
      <div className="full-screen" id={`${this.props.id}-title`} >
        <Hero title={this.props.title} />
        <Container className="mt-5" fluid={true}>
          <Row className="justify-content-around">
            <Col >
            <Content>
              <h1 id={`${this.props.id}-h1`}>{this.state.cv.title}</h1>
              <h4>Experience:</h4>
              <p>{this.state.cv.experience}</p>
              <h4>Education:</h4>
              <p>{this.state.cv.education}</p>
              <h4>Skills:</h4>
          </Content>
            </Col>
            <Col >
            <Content>
              <ContactForm />
            </Content>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
};

export default CV
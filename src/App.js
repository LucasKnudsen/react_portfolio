import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom' 
import './App.css';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Lucas Knudsen",
      headerLinks: [
        { title: "Home", path: '/'},
        { title: "About", path: '/about'},
        { title: "Contact", path: '/contact'}
      ],
      home: {
        title: "Code 'n' Tonic",
        subTitle: "Fizzy creativity & bold functionality with hints of aesthetic design.",
        text: 'Checkout these vintages:'
      },
      about: {
        title: "About Me"
      },
      contact: {
        title: "Let's Talk!"
      }
    }
  }
  
  render() {

    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border=bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Lucas Knudsen</Navbar.Brand>
            
            <Navbar.Toggle className="border-0"aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

        </Container>
      </Router>
    );
    }
};

export default App;

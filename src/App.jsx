import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom' 
import './App.css';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import CV from './pages/CV'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Lucas Knudsen",
      headerLinks: [
        { title: "Home", path: '/'},
        { title: "About", path: '/about'},
        { title: "CV", path: '/cv'}
      ],
      home: {
        title: "Code 'n' Tonic",
        subTitle: "Fizzy creativity & bold functionality with hints of aesthetic design.",
        text: 'Checkout these vintages:'
      },
      about: {
        title: "About Me"
      },
      // Make this a JSON
      cv: {
        title: "Let's Talk!"
      }
    }
  }
  
  render() {

    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>{this.state.title}</Navbar.Brand>
            
            <Navbar.Toggle className="border-0"aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/cv">CV</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route exact path="/" render={() => <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>} />
          <Route exact path="/about" render={() => <About title={this.state.about.title} />} />
          <Route exact path="/cv" render={() => <CV title={this.state.home.title} />} />
          <Footer />

        </Container>
      </Router>
    );
    }
};

export default App;

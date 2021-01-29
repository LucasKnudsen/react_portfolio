import React from 'react'
import './App.css';

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
      <div>Hello from Me</div>
    );
    }
};

export default App;

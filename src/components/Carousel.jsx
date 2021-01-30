import React from 'react'
import axios from 'axios'

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  };

  componenDidMount() {
    axios.get("./projects.json").then((response)=> {
      this.setState({ items: response.data })
    });
  }

  render () {
    return (
      <p>Carousel Works</p>
    )
  }
}

export default Carousel
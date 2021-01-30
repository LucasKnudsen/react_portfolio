import React from 'react'
import axios from 'axios'

import Card from './Card'
import lucas from '../../assets/images/lucas.png'
import podcast from '../../assets/images/podcast.png'
import raketinvestor from '../../assets/images/raketinvestor.gif'

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
  // try to make this into hover later
  handleCardClick = (id, card) => {
    let items = [...this.state.items];
    //try with ! instead of tenary to refactor
    items[id].selected = items[id].selected ? false : true

    items.forEach(item => {
      if(item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({ items })

  };

  itemList = (items) => {
    return items.map(item =>{
      return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id}/>
    })
  }

  render () {
    return (
      <p>Carousel Works</p>
    )
  }
}

export default Carousel
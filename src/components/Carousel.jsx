import React from 'react'
// import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


import Card from './Card'
import lucas from '../assets/images/lucas.png'
import podcast from '../assets/images/podcast.png'
import raketinvestor from '../assets/images/raketinvestor.gif'

class Carousel extends React.Component {
  state = {
      items: [
        {
          id: 0,
          title: "Raket Investor",
          subTitle: "Build your own Investment Rocket",
          imgSrc: raketinvestor,
          link: "https://raketinvestor.dk",
          selected: false
        },
        {
          id: 1,
          title: "Project 2",
          subTitle: "Something Really Cool!",
          imgSrc: lucas,
          link: "#",
          selected: false
        },
        {
          id: 2,
          title: "Podcast",
          subTitle: "Learn more about Investing!",
          imgSrc: podcast,
          link: "https://open.spotify.com/show/7A0vQ615Htdfl7GWN4nM6P?si=PKGwVrPFR_2EZL4tWbCziQ",
          selected: false
        }
      ]
  };

  // componentDidMount() {
  //   axios.get("./data/projects.json").then((response)=> {
  //     this.setState({ items: response.data }) 
  //   });
  //   console.log('bla her er jeg')
  // }


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

  render () {
    const { items } = this.state;
    const itemList = items.map(item => {
      return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })

    return (
      <Container fluid={true} classname="p-0">
        <Row className="justify-content-around">
          {itemList}
        </Row>
      </Container>
    )
  }
}

export default Carousel
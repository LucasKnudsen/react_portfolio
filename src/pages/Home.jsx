import React from 'react'

import Hero from '../components/Hero'
import Carousel from '../components/Carousel'

const Home = (props) => {
  return (
    <>
      <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
      <Carousel />
    </>
  )
}

export default Home
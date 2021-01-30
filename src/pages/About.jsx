import React from 'react'

import Hero from '../components/Hero'
import Content from '../components/Content'

const About = (props) => {
  return (
    <div>
      <Hero title={props.title} />

      <Content>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quisquam, illum sapiente laborum ratione voluptatibus tempore doloribus magnam nulla, ad quibusdam delectus at fuga. Est ea commodi pariatur nisi repudiandae.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quisquam, illum sapiente laborum ratione voluptatibus tempore doloribus magnam nulla, ad quibusdam delectus at fuga. Est ea commodi pariatur nisi repudiandae.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quisquam, illum sapiente laborum ratione voluptatibus tempore doloribus magnam nulla, ad quibusdam delectus at fuga. Est ea commodi pariatur nisi repudiandae.</p>

      </Content>
    </div>
  )
}

export default About
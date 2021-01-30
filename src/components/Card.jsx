import React from 'react'

import CardInfo from './CardInfo'

const Card = (props) => {
  return (
    <div className="d-inline-block l-card" onClick={(e) => props.onClick(props.item)}>
      <img className="l-card-image" src={props.item.imgSrc} alt={props.item.title}/>
      { <CardInfo  title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/> }
    </div>
  )
}

export default Card
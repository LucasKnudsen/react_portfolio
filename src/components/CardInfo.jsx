import React from 'react'

const CardInfo = (props) => {
  
  return (
   <div className="l-card-info">
     <p className="l-card-title">{props.title}</p>
     <p className="l-card-sub-title">{props.subTitle}</p>
     <a href={props.link} target="_blank" rel="noopener noreferrer">Take a look</a>
   </div>

  );
}

export default CardInfo
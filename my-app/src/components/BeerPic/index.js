import React from "react";
import './style.css'

const BeerPic = (props) => {
  return (
      <img onClick={() => props.BeerClickHandler(props.id)} className="img-thumbnail mb-3" alt={props.name} src={props.image}  />
  )
}

export default BeerPic;
import React from "react";
import './style.css'

const BeerPic = (props) => {
  return (
      <img onClick={() => props.handleBeerClick(props.beer.id)} className="img-thumbnail mb-3" alt={props.name} src={props.image}  />
  )
}

export default BeerPic;
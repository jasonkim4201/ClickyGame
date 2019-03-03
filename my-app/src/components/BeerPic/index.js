import React from "react";
import './style.css'

const BeerPic = (props) => {
  return (
      <img onClick={() => console.log(`hands off my beer boi!`)} className="img-thumbnail mb-3" alt={props.name} src={props.image}  />
  )
}

export default BeerPic;
import { useState, useEffect } from "react";

export default function CardsContainer(props){
  let images;
  if(props.images){
     images = props.images.map((image) => {
      return (
        <div>
          <img src={image.url} alt={image.alt}></img>
        </div>
      )
    })
  }
  return (
    <div>{images}</div>
  )
}
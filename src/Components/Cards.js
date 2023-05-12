import { useState, useEffect } from "react";
import "../Styles/Card.css"

export default function Cards(props){
  let images;
  if(props.images){
     images = props.images.map((image) => {
      return (
        <img className="image" src={image.url} alt={image.alt}></img>
      )
    })
    const columns = () => {
      if(props.images.length === 4) return 4;
      else if(props.images.length === 6) return 3;
      else if(props.images.length === 8) return 4;
      else if(props.images.length === 10) return 5;
    }
    const rows = () => {
      if(props.images.length === 4) return 1;
      else return 2;
    }
    const styles = {
      gridTemplateColumns: `repeat(${columns()}, 300px)`,
      gridTemplateRows: `repeat(${rows()}, 300px)`
    }
    images = <div className="card-container" style={styles}>{images}</div>
  }
  return (
    <div>{images}</div>
  )
}
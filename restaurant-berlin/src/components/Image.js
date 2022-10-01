import React,{useState} from "react";


export default function Image(props) {
  const [hover, setHover]=useState(false)

  return (
     <div className="image-container">
      <img src={`./respics/${props.image}`} className="image-res" alt="restaurant" hovered={props.hovered}/>
     </div>
  )
}

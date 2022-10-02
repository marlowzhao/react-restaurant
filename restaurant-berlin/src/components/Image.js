import React,{useState} from "react";


export default function Image(props) {
  const [hovered, setHovered]=useState(false)

  return (
     <div className="image-container" onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
      <img src={`./respics/${props.image}`} className="image-res" alt="restaurant"/>
      {hovered&& <i className="ri-heart-line favorite">heart</i> }
      {hovered &&<i className="ri-add-circle-line cart">cart</i> }
     </div>
  )
}

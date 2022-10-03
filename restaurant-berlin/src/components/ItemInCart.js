import React,{useContext, useState} from "react";
import{Context} from "../Context"

export default function ItemInCart(props){
  const{removeItem}=useContext(Context)
  const[hovered, setHovered]=useState(false)
  const ifHovered = hovered? "ri-delete-bin-line" : "ri-delete-bin-fill"

  return (
    <div className="item-in-cart">
      <img src={`./respics/${props.image}`} width="150px" height="70px" />
      <p>price</p>
      <i className={ifHovered}
         onClick={()=>removeItem(props.id)}
         onMouseEnter={()=>setHovered(true)}
         onMouseLeave={()=>setHovered(false)}
      >
        Delete
      </i>
    </div>
  )
}

import React,{useContext, useState} from "react";
import{Context} from "../Context"

export default function ItemInCart(props){
  const{removeItem}=useContext(Context)
  const[hovered, setHovered]=useState(false)
  const ifHovered = hovered? "ri-delete-bin-fill" : "ri-delete-bin-line"

  return (
    <div className="item-in-cart">
      <img src={`./respics/${props.image}`} />
      <p>{props.name}</p>

      <div>
        <p>price</p>
        <i className={ifHovered}
          onClick={()=>removeItem(props.id)}
          onMouseEnter={()=>setHovered(true)}
          onMouseLeave={()=>setHovered(false)}
        >
          {/* remove item */}
        </i>
      </div>
    </div>
  )
}

import React,{useContext, useState} from "react";
import{Context} from "../Context";
import {MdShareLocation} from 'react-icons/md';

export default function ItemInCart(props){
  const{removeItem}=useContext(Context)
  const[hovered, setHovered]=useState(false)
  const ifHovered = hovered? "ri-delete-bin-fill" : "ri-delete-bin-line"

  return (
    <div className="item-in-cart">
      <img src={`./respics/${props.image}`} alt="restaurant"/>

      <div className="item-in-cart-right">
          <p>{props.name}</p>
          <p><MdShareLocation /> {props.location}</p>
          <i className={ifHovered}
             onClick={()=>removeItem(props.id)}
             onMouseEnter={()=>setHovered(true)}
             onMouseLeave={()=>setHovered(false)}
          >
          </i>
      </div>
    </div>
  )
}

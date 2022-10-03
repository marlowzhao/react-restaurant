import React,{useContext} from "react";
import{Context} from "../Context"

export default function ItemInCart(props){
  const{removeItem}=useContext(Context)

  return (
    <div className="item-in-cart">
      <img src={`./respics/${props.image}`} width="150px" height="70px" />
      <p>price</p>
      <i className="ri-delete-bin-line" onClick={()=>removeItem(props.id)}>Delete</i>
    </div>
  )
}

import React, {useState, useContext} from "react";
import {Context} from "../Context";


export default function Image(props) {
  const [hovered, setHovered]=useState(false)
  const {toggleFavorite, addItemCart, cartItems, removeItem} =useContext(Context)

  const heartHovered = hovered &&
    <i className={props.isFavorite? "ri-heart-fill favorite" : "ri-heart-line favorite" }
                  onClick={()=>toggleFavorite(props.id)}> like</i>


  function cartHovered(){
    const inCart = cartItems.some(item => props.id===item.id)
      if(inCart){
        return <i className="ri-shopping-cart-fill cart" onClick={()=>removeItem(props.id)}> in cart</i>
      } else if(hovered){
        return <i className="ri-add-circle-line cart" onClick={()=> addItemCart(props)}> add to cart</i>
      }
  }

  return (
     <div className="image-container" onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
      <p className="image-res-name">{props.name}</p>
      <img src={`./respics/${props.image}`} className="image-res" alt="restaurant"/>
      {heartHovered}
      {cartHovered()}
     </div>
  )
}

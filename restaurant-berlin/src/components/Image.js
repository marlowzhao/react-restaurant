import React, {useState, useContext} from "react";
import {Context} from "../Context";


export default function Image(props) {
  const [hovered, setHovered]=useState(false)
  const {toggleFavorite, addItemCart, cartItems, removeItem} =useContext(Context)

  const heartHovered = hovered &&
    <i className={props.isFavorite? "ri-heart-line favorite" : "ri-heart-fill favorite"}
                  onClick={()=>toggleFavorite(props.id)}>heart</i>


  function cartHovered(){
    const inCart = cartItems.some(item => props.id===item.id)
      if(inCart){
        return <i className="ri-shopping-cart-fill cart" onClick={()=>removeItem(props.id)}>buy coupon</i>
      } else if(hovered){
        return <i className="ri-add-circle-line cart" onClick={()=> addItemCart(props)}>buy coupon</i>
      }
  }

  return (
     <div className="image-container" onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
      <img src={`./respics/${props.image}`} className="image-res" alt="restaurant"/>
      {heartHovered}
      {cartHovered()}
     </div>
  )
}

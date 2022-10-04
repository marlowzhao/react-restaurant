import React, {useState, useContext} from "react";
import {Context} from "../Context";


export default function Image(props) {
  const [hovered, setHovered]=useState(false)
  const [showInfo, setShowInfo]=useState(false)
  const {toggleFavorite, addItemCart, cartItems, removeItem} =useContext(Context)

  const heartHovered = hovered &&
    <i className={props.isFavorite? "ri-heart-fill favorite" : "ri-heart-line favorite" }
                  onClick={()=>toggleFavorite(props.id)}></i>
  function infoShow(){
    return showInfo &&
                <div className="image-res-info">
                <div className="image-res-info-gap"></div>
                  <div className="image-res-info-words">
                    <p> {props.location}</p>
                  </div>
                </div>
  }

  function cartHovered(){
    const inCart = cartItems.some(item => props.id===item.id)
      if(inCart){
        return <i className="ri-shopping-cart-fill cart" onClick={()=>removeItem(props.id)}></i>
      } else if(hovered){
        return <i className="ri-add-circle-line cart" onClick={()=> addItemCart(props)}></i>
      }
  }

  // onMouseEnter={()=>setShowInfo(true)}
  // onMouseLeave={()=>setShowInfo(false)}

  return (
     <div className="image-container"
          onMouseEnter={()=>{
            setHovered(true)
            setShowInfo(true)
          }
          }
          onMouseLeave={()=>{
            setHovered(false)
            setShowInfo(false)
            }}>
      <a className="image-res-name" href={props.website} target="_blank">{props.name}</a>
      <img src={`./respics/${props.image}`}
           className="image-res" alt="restaurant"
      />
      {heartHovered}
      {cartHovered()}
      {/* <div className="image-res-info">
        <p>{props.website}</p>
        <p>{props.location}</p>
      </div> */}
      {infoShow()}
     </div>
  )
}

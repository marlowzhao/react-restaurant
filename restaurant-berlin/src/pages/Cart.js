import React,{useState, useContext} from "react";
import {Context} from "../Context";
import ItemInCart from "../components/ItemInCart";

export default function Cart() {
  const{cartItems, clearCart}=useContext(Context)
  const[clicked, setClicked] = useState(false)

  const inCartItems = cartItems.map(item=> <ItemInCart key={item.id} {...item}/>)
  // function ifItemThere() {
  //   return cartItems.length===0? <p>Your cart is now empty.</p> :
  // }

  return (
    <main className="cart-page">
      <h1>Check Out</h1>
      {inCartItems}
      {  cartItems.length===0?
        <p>Your cart is now empty.</p> :
        <div className="cart-order-button" onClick={()=>
          { setClicked(true)
            setTimeout(() => {
              setClicked(false)
              clearCart()
            }, 3000);
          }
      }>
         <a>{clicked? "Ordering..." : "Place Order"}</a>
      </div>}
    </main>
  )
}

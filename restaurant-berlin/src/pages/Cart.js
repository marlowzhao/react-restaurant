import React,{useState, useContext} from "react";
import {Context} from "../Context";
import ItemInCart from "../components/ItemInCart";

export default function Cart() {
  const{cartItems, clearCart}=useContext(Context)
  const[clicked, setClicked] = useState(false)

  const inCartItems = cartItems.map(item=> <ItemInCart key={item.id} {...item}/>)

  return (
    <main className="cart-page">
      <h1>Check Out</h1>
      <div className="cart-items-info">
      {inCartItems}
      {  cartItems.length===0?
        <p>You have no vouchers.</p> :
        <div className="cart-order-button" onClick={()=>
          { setClicked(true)
            setTimeout(() => {
              setClicked(false)
              clearCart()
            }, 1500);
          }
        }>
          <a>{clicked? "Ordering..." : "Place Order"}</a>
        </div>}
      </div>
    </main>
  )
}

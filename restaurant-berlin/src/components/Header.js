import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {Context} from "../Context";

export default function Header() {
  const {cartItems} = useContext(Context)

  const empty = cartItems.length===0

  return (
    <header>
      <Link to="/"><h2 >Choose your Restaurant Coupon</h2></Link>
      <Link to="/cart"><i className={empty? "shopping-cart empty" : "shopping-cart item"}>my shopping cart</i></Link>

    </header>
  )
}

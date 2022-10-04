import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {Context} from "../Context";

export default function Header() {
  const {cartItems} = useContext(Context)
  const empty = cartItems.length===0

  return (
    <header>
      <div className="header-items">
      <Link to="/"><h2 className="header-items-title">HOME</h2></Link>

      <div className="header-items-right">
      <div className="header-items-caption">{empty? "Add vouchers" : "View vouchers"} </div>
      <Link to="/cart"><i className={empty? "ri-shopping-cart-line ri-fw ri-2x" : "ri-shopping-cart-fill ri-fw ri-2x" }></i></Link>
      </div>
      </div>
    </header>
  )
}

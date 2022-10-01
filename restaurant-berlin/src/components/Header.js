import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/"><h2>Choose your Restaurant Coupon</h2></Link>
      <Link to="/cart"><i>cart</i></Link>

    </header>
  )
}

import React,{useContext} from "react";
import {Context} from "../Context"

export default function Cart() {
  const{cartItems}=useContext(Context)

  return (
    <main>
      <h1>Check Out</h1>
    </main>
  )
}

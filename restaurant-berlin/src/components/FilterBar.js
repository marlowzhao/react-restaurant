import React, {useContext, useState} from "react";
import {Context} from "../Context.js";
import {resData} from "../restaurantData.js";

export default function FilterBar(){
  const{filterBy, setResArray}=useContext(Context)
  // useState to see if buttons were clicked
  // const [clicked, setClicked]=useState(false)

  // function toggleColor(){
  //   setClicked(prevState=>!prevState)
  // }

  // function btnColor(){
  //  return clicked? "res-clicked-btn": "res-select-btn"
  // }

  return(
    <div className="btn-group">
      <h4 style={{color:"var(--pink)"}}>Select by Key Words:</h4>
      <button className="res-select-btn" onClick={()=>setResArray(resData)}>ALL</button>
      <button className="res-select-btn" onClick={()=>{
        filterBy("Sichuan")
        // toggleColor()
      }}>
        Sichuan
      </button>

      <button className="res-select-btn" onClick={()=>{
        filterBy("spicy")
        // toggleColor()
      }}>
        Spicy</button>

      <button className="res-select-btn"  onClick={()=>{
        filterBy("northeastern")
        // toggleColor()
      }}>Northeastern</button>

      <button className="res-select-btn" onClick={()=>{
        filterBy("hot pot")
        // toggleColor()
      }}>
        Hot Pot</button>
    </div>
  )
}

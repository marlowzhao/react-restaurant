import React, {useContext} from "react";
import {Context} from "../Context.js";

export default function Searchbar(){
  // const[clicked, setClicked]=useState(true)
  const{filterBySichuan, filterBySpicy, filterByNE}=useContext(Context)

  // function toggleSearch(){
  //   setClicked(prevState => !prevState)
  // }
  // clicked && filterBySichuan()
  return(
    <div className="btn-group">
      <h4 style={{color:"var(--pink)"}}>Select by Key Words:</h4>
      <button className="res-select-btn" onClick={()=>filterBySichuan()}>Sichuan</button>
      <button className="res-select-btn" onClick={()=>filterBySpicy()}>Spicy</button>
      <button className="res-select-btn" onClick={()=>filterByNE()}>Northeastern</button>
    </div>
  )
}

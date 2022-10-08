import "./filterbar.css";
import React, {useContext, useState} from "react";
import {Context} from "../../Context";
import {resData} from "../../restaurantData";
import {filterKeywords} from "../../filterKeywordsData"

export default function FilterBar(){
  const{filterBy, setResArray}=useContext(Context)

  const [buttons, setButtons]=useState(filterKeywords)

  function toggle(id){
    setButtons(prevBs=>{
      return prevBs.map((button)=>{
        return button.id===id ? {...button, clicked: !button.clicked} : button
      })
    })
  }
  const filterButtons = buttons.map(btn=>{
    return <button className={btn.clicked? "res-clicked-btn" : "res-select-btn"} key={btn.id}
                  onClick={()=>{
                    toggle(btn.id)
                    filterBy(btn.title)
                  }}
           >
            {btn.title}
           </button>
  })


  return(
    <div className="btn-group">
      <h4 style={{color:"var(--pink)", marginRight: "10px"}}>Select by Key Words:</h4>
      <button className="res-select-btn"
              onClick={()=>{
                setResArray(resData)
                setButtons(filterKeywords)
                }}
      >
        ALL
      </button>

       {filterButtons}
    </div>
  )
}

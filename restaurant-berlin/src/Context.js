import React, {useState, useEffect} from "react";
import {resData} from "./restaurantData";

const Context = React.createContext()

function ContextProvider({children}){
  const[resArray, setResArray]=useState([])

  useEffect(()=>{
    setResArray(resData)
  },[])
  // console.log(resArray)

  return(
    <Context.Provider value={{resArray: resArray}}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}

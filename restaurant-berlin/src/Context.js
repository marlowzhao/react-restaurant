import React, {useState, useEffect} from "react";
import {resData} from "./restaurantData";

const Context = React.createContext()

function ContextProvider({children}){
  const[resArray, setResArray]=useState([])
  const[cartItems, setCartItems]=useState([])

  useEffect(()=>{
    setResArray(resData)
  },[])
  // console.log(resArray)

  function toggleFavorite(id){
    const updateResArr = resArray.map(restaurant=>{
      if(restaurant.id === id) {
        return{ ...restaurant, isFavorite: !restaurant.isFavorite}
      }
      return restaurant
    })
    setResArray(updateResArr)
  }

  function addItemCart(newItem){
    setCartItems(prevItems=>[...prevItems, newItem])
  }

  function removeItem(id){
    setCartItems(prevItems => prevItems.filter(item => item.id !==id))
  }

  function clearCart(){
    setCartItems([])
  }

  // function filter if id>7
  // return fliteredArray
  function filterBySichuan(){
    const filteredResArray=resArray.filter(restaurant => {
      return restaurant.keywords.includes("Sichuan")
    })
    setResArray(filteredResArray)
  }

 
  function filterBySpicy(){
    const filteredResArray=resArray.filter(restaurant => {
      return restaurant.keywords.includes("spicy")
    })
    setResArray(filteredResArray)
  }

  function filterByNE(){
    const filteredResArray=resArray.filter(restaurant => {
      return restaurant.keywords.includes("northeastern")
    })
    setResArray(filteredResArray)
  }

  return(
    <Context.Provider value={{
        resArray,
        toggleFavorite,
        cartItems,
        addItemCart,
        removeItem,
        clearCart,
        // add new filter functions
        filterBySichuan,
        filterBySpicy,
        filterByNE
      }}>
        {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}

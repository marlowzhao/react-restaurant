import React from "react";
import {Routes, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Cart from "./pages/cart/Cart"
import Restaurants from "./pages/restaurants/Restaurants"

function App() {
  return (
    <div>
      <Header />
     <Routes>
       <Route exact path="/" element={<Restaurants />}>
       </Route>

       <Route path="/cart" element={<Cart />}>
       </Route>
     </Routes>
    </div>
  );
}

export default App;

import React from "react";
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart"
import Restaurants from "./pages/Restaurants"
import './App.css';

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

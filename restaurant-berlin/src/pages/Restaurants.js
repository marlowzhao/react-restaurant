import React, {useContext} from "react";
import { Context } from "../Context.js";
import Image from "../components/Image"

export default function Restaurants() {

  const{resArray}=useContext(Context)
  const restaurants = resArray.map(res=>(<Image key={res.id} {...res}/>))


  return (
    <main>
      <div  className="restaurants-right">
        <h2 className="restaurants-title">Chinese Restaurants in Berlin</h2>
        <h3 className="restaurants-subtitle">
          LIMITED OFFER: add free vouchers to your cart!
        </h3>
        <h4 className="restaurants-subtitle">
           This website is a foodie's guide to Chinese cuisine in Berlin. Check out
           affordable Chinese restaurants in Berlin!
        </h4>
      </div>
      <div className="restaurants">
      {restaurants}
      </div>
    </main>
  )
}

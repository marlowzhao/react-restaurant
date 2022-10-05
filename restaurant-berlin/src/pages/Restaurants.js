import React, {useContext} from "react";
import { Context } from "../Context.js";
import Image from "../components/Image"

export default function Restaurants() {

  const{resArray}=useContext(Context)
  const restaurants = resArray.map(res=>(<Image key={res.id} {...res}/>))


  return (
    <main>
      <div  className="restaurants-right">
        <h2 className="restaurants-title">CHINESE RESTAURANTS IN BERLIN</h2>
        <h4 className="restaurants-subtitle-pink">A foodie's encyclopedia </h4>

        <h4 className="restaurants-subtitle">
         <strong>LIMITED OFFER</strong>
        </h4>
        <h4 className="restaurants-subtitle-down">
            Check out <strong> affordable Chinese restaurants</strong> in Berlin below and add free vouchers to your cart!
        </h4>

      </div>
      <div className="restaurants">
      {restaurants}
      </div>
    </main>
  )
}

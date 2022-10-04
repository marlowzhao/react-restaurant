import React, {useContext} from "react";
import { Context } from "../Context.js";
import Image from "../components/Image"

export default function Restaurants() {

  const{resArray}=useContext(Context)
  const restaurants = resArray.map(res=>(<Image key={res.id} {...res}/>))


  return (
    <main>
      <h2 className="restaurants-title">Chinese Restaurants in Berlin</h2>
      <div className="restaurants">
      {restaurants}
      </div>
    </main>
  )
}

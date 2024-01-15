import React from "react"

export default function CoinItem(props) {
  
  return <div className="single-coin">
    <p>{props.coins.market_cap_rank}</p>
    <div className="coin--name">
    <p>{props.coins.name}</p>
    <img src={props.coins.image} alt='' className="coin--image" />
    </div>
    <div className="coin--prices">
    <p className="coin--currentprice">${props.coins.current_price}</p>
    <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p> 
            <p>${props.coins.market_cap}</p>

      

    </div>
    
  </div>
}
import React from "react"
import CoinItem from "./CoinItem"
import { Link } from "react-router-dom"
import Lottie from 'lottie-react'
import cryptoLoading from "../photos/crypto-loading.json"

export default function Coins({ coins }) {

  const CoinItems = coins.map(coin => (
    <Link to={`/coin/${coin.id}`} className="coins--link">
    <CoinItem coins={coin} key={`${coin.id}`}/>
    </Link>
  ))
 

  return <div id="coin-section">
    <div className="coins--header">
      <img />
      <p>#</p>
    <p>Coin</p>
    <p>Price</p>
    <p>24h</p>
    <p>Market Cap</p>
    </div>
    
    {CoinItems}
    
    
    
  </div>
}
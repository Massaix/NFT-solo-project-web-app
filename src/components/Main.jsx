import React from  "react"
import nftImage from "../photos/nfts.png"
import step1 from "../photos/step1.png"
import step2 from "../photos/step2.png"
import step3 from "../photos/step3.png"
import axios from "axios"
import Coins from "./Coins"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"




export default function Main({ coin }) {
  

 

  return (
    <main>
      <h1 className="main--title">Create your own NFT marketplace for free</h1>
      <div className="main--text-below">Create a liquid, on-brand marketplace on your ETH & Polygon collections - without writing code</div>
      <Link to="./create">
        <button className="main--create-marketplace-button">Create marketplace</button>
        </Link>
      <img src={nftImage} className="main--nftImage"/>
      <Coins coins={coin} key={coin.id}/>
      <div className="main--div-getting-started">
      <div className="main--getting-started">Getting started</div>
      <div className="main--launching-desc">Launching your marketplace is free for you and your community: 
        No setup charge, monthly const, or transaction fees.</div>
        <Link to="./create">
        <button className="main--create-marketplace-button-noposition">Create marketplace</button>
        </Link>
        
      </div>
      <div className="main--steps-grid-container">
      <div>
      <img src={step1}/>
      <div className="main--steps-number">Step 1</div>
      <div className="main--steps-desc">Connect to the wallet that owns the collection
         you want to create a marketplace for.</div>
      </div>
    
      <div>
    <img src={step2}/>
    <div className="main--steps-number">Step 2</div>
    <div className="main--steps-desc">Choose the connection you'd like to create the NFT marketplace for.</div>
      </div>

      <div>
    <img src={step3}/>
    <div className="main--steps-number">Step 3</div>
    <div className="main--steps-desc">Finish the form and... ta-da! Your marketplace is live. </div>
      </div>


      </div>

      <div className="main--div-getting-started">
      <div className="main--getting-started">White Glove</div>
      <div className="main--launching-desc">Some communities need special features, multiple collections 
      or other customizations. That's why we offer a white glove service for marketplaces on all blockchains Rarible supports.</div>
      <Link to="/contact">
      <button className="main--create-marketplace-button-noposition">Let's talk</button>
      </Link>
      </div>

      
      
    </main>
  )
}
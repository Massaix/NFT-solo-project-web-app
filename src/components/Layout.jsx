import React from  "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

export default function Layout({ coin }) {
  return (
    <div>
      <Header /> 
      <Main coin={coin}/>
      <Footer /> 
    </div>
  )
}
import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import cryptoAni from "../photos/crypto-ani.json"
import Lottie from "lottie-react"


export default function ContactPage() {
  const [email, setEmail] = React.useState()
  const [message, setMessage] = React.useState()

 
  return (
    <div >
    
    <Header />
    
    <div className="contact-page-body">
    <h1 className="contact-page--title">Contact us directly</h1>
    <form className="contact-form">
      <label className="contact-page-labels">email</label>
      <input type="text" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)}></input>
      <label className="contact-page-labels" >message</label>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

    </form>
    <button className="contact-page--submit-button" onClick={() => 
    {setMessage('')
    setEmail('')
    }}>Submit</button>
    </div>
    <Lottie animationData={cryptoAni} className="crypto-animation" speed={100}/>
    <Footer />
    
    </div>
  )
}
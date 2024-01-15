import React from  "react"
import line from "../photos/Rectangle.png"


export default function Footer() {
  return (
    <footer>
      <div className="upper-footer">
        <div className="footer--links-container">
          <div className="footer--titles">Stay in loop</div>
          <input placeholder="Your email" className="footer--input"/>
        </div>
        <div className="footer--links-container">
          <div className="footer--titles">Marketplace</div>
          <div>Explore</div>
          <div>Blog</div>
          <div className="footer--werehiring">
            <div>Jobs</div>
            <div className="footer--werehiring-text">We're hiring!</div>
          </div>
          <div>Help center</div>
        </div>
        <div className="footer--links-container">
          <div className="footer--titles">Links</div>
          <div>Rarible API</div>
          <div>RARI token</div>
          <div>Bug bounty</div>
          <div>Become a partner</div>
          <div>Branding</div>
        </div>
        <div className="footer--links-container">
          <div className="footer--titles">Join us</div>
          <div>X</div>
          <div>Instagram</div>
          <div>Discord</div>
        </div>
      </div>
      <img src={line} />
      <div className="down-footer">
        <div>© Rarible, Inc.</div>
        <div>Community guidelines</div>
        <div>Terms</div>
        <div>Privacy policy</div>
        
      </div>
    </footer>
  )
}
import React from  "react"
import ImageUrl from "../photos/logo.png"
import discordIcon from "../photos/discord.svg"
import telegramIcon from "../photos/telegram.svg"
import teams from "../photos/teams.svg"
import { Link, useLocation, matchRoutes } from "react-router-dom"
import ReactPlayer from 'react-player'
import video from "../video.mp4"


export default function Header() {

  const location = useLocation()
  
  const style = {
    borderRadius: '15px'
  }
  
  return (
    <nav className="navbar">
      <div className="header--logo-name">
        <Link to="..">
        <img src={ImageUrl}/>
        </Link>
        <Link to=".." className="navbar-brand-name-link">
        Rarible
        </Link>

      
      </div>
      <Link to=".." className="nav-link">Home</Link>
      
      {location.pathname === "/" ? <a href="#coin-section" className="market-link">Market</a> : null}
      <Link to="/create" className="nav-link">Create</Link>

      <Link to="/contact" className="nav-link">Contact</Link>

      <div className="header--icons">
        <a href="https://discord.com/" target="_blank">
        <img src={discordIcon}/>
        </a>
        <a href="https://web.telegram.org/a/" target="_blank">
        <img src={telegramIcon}/>
        </a>
        <a href="https://www.microsoft.com/pl-pl/microsoft-teams/free" target="_blank">
        <img src={teams} />
        </a>
        
      </div>
      <ReactPlayer url={video} muted={true} playing={true} loop={true} height="35px" style={style}/>
      
    </nav>
  )
}
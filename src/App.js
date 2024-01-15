
import './App.css';
import Layout from "./components/Layout"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import CoinInfoPage from "./components/CoinInfoPage"
import React from "react"
import axios from "axios"
import CreatePage from "./components/CreatePage"
import ScrollToTop from "./components/ScrollToTop"
import CreateWindow from "./components/CreateWindow"
import LoadingAnimation from "./components/LoadingAnimation"
import ContactPage from "./components/ContactPage"



function App() {

  const [coins, setCoins] = React.useState([])

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=7&page=1&sparkline=false&locale=en'

React.useEffect(() => {
  axios.get(url).then(res => 
    {setCoins(res.data)
     }).catch(error => {console.log(error)})
  
}, [])

  return (
    <BrowserRouter>
    <ScrollToTop />
    <Routes>
    <Route path='/' element={<Layout  coin={coins}/>} />
    <Route path='/coin' element={<CoinInfoPage />}>
          <Route path=':coinId' element={<CoinInfoPage/>} />
        </Route>
        <Route path="/create" element={<CreatePage />}/>
        <Route path="/window" element={<CreateWindow />}/>
        <Route path="/contact" element={<ContactPage />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;

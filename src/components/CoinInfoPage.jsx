import React from  "react"
import { useParams } from 'react-router-dom'
import axios from "axios"
import { Link } from "react-router-dom"
import DOMPurify from 'dompurify'


export default function CoinInfoPage() {

  const [coin, setCoin] = React.useState({})

  const param = useParams()
  

  const url = `https://api.coingecko.com/api/v3/coins/${param.coinId}`

  React.useEffect(() => {
    axios.get(url)
    .then(data => setCoin(data.data))
    .catch(err => console.log(err))
  }, [])

  
  return (
    <div className="coininfo-page">
      <div className="home-link">
      <Link to=".." className="home-link-directly"><h1>Home</h1></Link>
      </div>

      <div className="coininfo--name">{coin.name}</div>
      
      <div className="coin-info--body">
      <div>
      {coin.image ? <img src={`${coin.image.large}`} className="coin-info-page--coin-image"/> : null}
      
      <p className="coin-info--desc" dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),
                        }}></p>
      </div>
      <div>
      <div className="coin-info--rank">Rank: #{coin.market_cap_rank}</div>
        {coin.market_data ? <div>Current price: ${coin.market_data.current_price.usd}</div> : null}
        <div className="coin-info--timeframe1">
          <div>1h</div>
          <div>24h</div>
          <div>7d</div>
          <div>14d</div>
          <div>30d</div>
          <div>1y</div>
        </div>
        <div className="coin-info--timeframe2">
          <div>{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p> : null}</div>
          <div>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p> : null}</div>
          <div>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</p> : null}</div>
          <div>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</p> : null}</div>
          <div>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</p> : null}</div>
          <div>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</p> : null}</div>
        </div>
        <div >
                    <div className='coin-info--stats'>
                        <div >
                            <div className='coin-info--row'>
                                <h4>24 Hour Low</h4>
                                {coin.market_data?.low_24h ? <p>${coin.market_data.low_24h.usd.toLocaleString()}</p> : null}
                            </div>
                            <div className='coin-info--row'>
                                <h4>24 Hour High</h4>
                                {coin.market_data?.high_24h ? <p>${coin.market_data.high_24h.usd.toLocaleString()}</p> : null}                            </div>

                        </div>
                        <div >
                            <div className='coin-info--row'>
                                <h4>Market Cap</h4>
                                {coin.market_data?.market_cap ? <p>${coin.market_data.market_cap.usd.toLocaleString()}</p> : null}
                            </div>
                            <div className='coin-info--row'>
                                <h4>Circulating Supply</h4>
                                {coin.market_data ? <p>{coin.market_data.circulating_supply}</p> : null}
                            </div>

                        </div>
                    </div>
                </div>
      </div>
        
      </div>
      
      
    </div>
  )
}
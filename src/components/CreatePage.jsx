import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import eth from "../photos/eth.svg"
import polygon from "../photos/polygon.svg"
import zkSync from "../photos/zkSync.svg"
import immutable from "../photos/immutable.svg"
import { Link } from "react-router-dom"
import CreateWindow from "./CreateWindow"
import walletIcon from "../photos/walletIcon.svg"
import coinbaseIcon from "../photos/coinbase.svg"
import torus from "../photos/torus.svg"
import portis from "../photos/portis.svg"
import Lottie from 'lottie-react';
import animation from "../photos/animation.json"


export default function CreatePage() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [showMore, setShowMore] = React.useState(false)
  const [succesful, setSuccesful] = React.useState(false)

  const toggleModal = () => {
    setModalOpen(!modalOpen);
    setSuccesful(false)
    setShowMore(false)
  };

  const toggleShowMore = () => {
    setShowMore(!showMore)
  }

  const toggleSuccesful = () => {
    setSuccesful(!succesful)
  }
  
  if(modalOpen) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return <>
  <Header />
  <div className="create-page-body">
    <div>
    <h1 className="create-page-title">Choose Blockchain</h1>
      <div className="create-page--text-desc">Choose the most suitable blockchain for your needs.
You need to connect wallet for creation.</div>
</div>

      <div className="create-page--crypto-container">
        <div onClick={toggleModal}>
          <img src={eth} className="create-page--cryptoimg"/>
          <div>Ethereum</div>
        </div>
        <div onClick={toggleModal}>
          <img src={polygon} className="create-page--cryptoimg"/>
          <div>Polygon</div>
        </div>
        <div onClick={toggleModal}>
          <img src={zkSync} className="create-page--cryptoimg"/>
          <div>zkSync</div>
        </div>
        <div className="immutable" onClick={toggleModal}> 
          <img src={immutable} className="create-page--cryptoimg" />
          <div>Immutable X</div>
        </div>
      </div>

      {modalOpen ? 
      <div className="modal">
         <div onClick={toggleModal} className="overlay"></div>
         {!succesful ? <div className="modal-content">
          <div className="modal-title">Connect wallet</div>
          <div className="modal-text">Get started with your wallet to sign messages and send transactions</div>
          <div className="modal-popular-wallets">Popular</div>
          <div className="modal-wallet-container" onClick={toggleSuccesful}>
            <img src={walletIcon} className="modal-wallet-icon"/>
            <div>WalletConnect</div>
          </div>
          <div className="modal-wallet-container" onClick={toggleSuccesful}>
            <img src={coinbaseIcon}/>
            <div>Coinbase Wallet</div>
          </div>
          {showMore ? <div>
            <div className="modal-popular-wallets">More</div>
            <div className="modal-wallet-container" onClick={toggleSuccesful}>
            <img src={torus} className="modal-wallet-icon"/>
            <div>Torus</div>
            </div>
            <div className="modal-wallet-container" onClick={toggleSuccesful}>
            <img src={portis} className="modal-wallet-icon"/>
            <div>Portis</div>
            </div>
          </div> : null}
          <div className="modal-button" onClick={toggleShowMore}>{showMore ? "Show less" : "Show more"}</div>
          <div className="modal-button" onClick={toggleModal}>Cancel</div>
         </div> : 
          <div className="modal-content">
            <h1 className="modal-congrats-title">You did it!!</h1>
          <Lottie animationData={animation} />
          </div>}
      </div>
       : null}
  
  </div>
  <Footer />
  </>
}

// 
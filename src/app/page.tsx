"use client";

import { useState } from "react";
import Image from "next/image";
import BuyModal from "./components/BuyModal";
import Header from "./components/Header";
import CountdownTimer from "./components/CountdownTimer";

export default function Home() {
  const data = {
    totalAvailable: 90000000,
    totalBought: 33277838.4,
    stage: 1,
    bonus: 50,
  };
  const percentageBought = (data.totalBought / data.totalAvailable) * 100;

  const [showBuyModal, setShowBuyModal] = useState(false);

  const toggleBuyModal = () => {
    setShowBuyModal(!showBuyModal);
  };

  return (
    <>
      <Header toggleBuyModal={toggleBuyModal} />
      <section className="banner1-section">
        <div className="container">
          <div className="banner1-content text-center">
            <h5 className="outfit uppercase">Pre-Sale Ends in</h5>
            <CountdownTimer />
            <h2 className="orbitron">AIRTOKEN</h2>
            <h5 className="outfit">
              Buy tokens now and reap the benefits of the blockchain revolution!
            </h5>
            <div className="progress-section v1">
              <div className="progress-top-text">
                <p className="orbitron">Stage {data.stage}</p>
                <p className="orbitron">
                  {data.totalBought.toLocaleString()} /{" "}
                  {data.totalAvailable.toLocaleString()}
                </p>
              </div>
              <div className="progress-bar-container">
                <div
                  className="progress-bar-inner"
                  style={{ width: percentageBought + "%", maxWidth: "100%" }}
                >
                  <span className="inter">{percentageBought.toFixed()}%</span>
                </div>
              </div>
            </div>

            <div className="price-text">
              <p className="orbitron wt-600">
                1 <span className="gittu-token-symbol">AIRTK</span> = 0.10 USD
              </p>
              <p className="orbitron wt-600">NEXT STAGE PRICE = 0.15 USD</p>
              <p className="orbitron wt-600">MOQ = 300 USD</p>
            </div>
            <button
              type="button"
              className="banner1-btn wt-700 uppercase outfit"
              data-bs-toggle="modal"
              data-bs-target="#buyModal"
              onClick={toggleBuyModal}
            >
              Buy Now
            </button>

            <div className="banner1-social">
              <ul>
                <li>
                  <a href="https://telegram.org/" target="_blank">
                    <Image
                      width={20}
                      height={20}
                      src="./assets/images/icon/telegram.svg"
                      alt="icon"
                      style={{ marginTop: 10 }}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" target="_blank">
                    <Image
                      width={20}
                      height={20}
                      src="./assets/images/icon/twitter.svg"
                      alt="icon"
                      style={{ marginTop: 10 }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {showBuyModal && <BuyModal toggleBuyModal={toggleBuyModal} />}
    </>
  );
}

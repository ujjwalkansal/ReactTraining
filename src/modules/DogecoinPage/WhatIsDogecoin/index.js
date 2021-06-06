import React from "react";
import black_tick from "../../../utils/images/black_tick.svg";
import connection from "../../../utils/images/connection.svg";
import peerToPeer from "../../../utils/images/peerToPeer.svg";
import "./index.css";

function WhatIsDogecoin() {
  return (
    <div className={"whatContainer"}>
      <CommonCardFeature
        image={connection}
        feature={"decentralized"}
        title={"Decentralized"}
      />

      <WhatTextCard />

      <CommonCardFeature
        image={peerToPeer}
        feature={"peer"}
        title={"Peer-to-peer"}
      />
    </div>
  );
}

function CommonCardFeature(props) {
  return (
    <div className={"card_layout"}>
      <img src={props.image} className={props.feature} />
      <div className="featured_name">
        <img src={black_tick} alt={"tick"} />
        <span className="featured_title">{props.title}</span>
      </div>
    </div>
  );
}

function WhatTextCard() {
  return (
    <div className="whatTextCard">
      <p class={"whatHeading"}>{"What is Dogecoin?"}</p>
      <p class={"whatContent"}>
        {
          "Dogecoin (Doge) is a cryptocurrency created by software engineers in 2013. It’s been stated that it was created jokingly as a homage to Bitcoin, but with recent price surges, it’s becoming a much more serious investment for crypto-enthusiasts. "
        }
      </p>
    </div>
  );
}

export default WhatIsDogecoin;

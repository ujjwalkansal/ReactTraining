import React from "react";
import UpperPart from "../UpperPart";
import Cards from "../Cards";
import BuySellDoge from "../../../Components/BuySellDoge";
import WhyXCoins from "../WhyXCoins";
import "./index.css";
import WhatIsDogecoin from "../WhatIsDogecoin";

function MainContainer() {
  return (
    <div className="mainContainer">
      <UpperPart />
      <Cards />
      <div className={"buy"}>
        <BuySellDoge
          heading={"How to Buy Dogecoin"}
          option={"blue"}
          step1_heading={"Get verified quickly"}
          step2_heading={"Buy Dogecoin"}
          step3_heading={"Receive coins"}
          step1_desc={
            "Just sign up, upload your verification documents and open your account."
          }
          step2_desc={
            "Select which coins you would like to buy and how much you want to purchase. "
          }
          step3_desc={
            "We will send your coins to your wallet within 15 minutes of payment approval."
          }
          text_color={"blue_text"}
        />
      </div>

      <div className={"sell"}>
        <BuySellDoge
          heading={"How to Sell Dogecoin"}
          option={"green"}
          step1_heading={"Get verified quickly"}
          step2_heading={"Sell Dogecoin"}
          step3_heading={"Receive coins"}
          step1_desc={
            "Just sign up, upload your verification documents and open your account."
          }
          step2_desc={
            "Select which coins you would like to buy and how much you want to purchase. "
          }
          step3_desc={
            "We will send your coins to your wallet within 15 minutes of payment approval."
          }
          text_color={"green_text"}
        />
      </div>
      <WhyXCoins />
      <WhatIsDogecoin />
    </div>
  );
}
export default MainContainer;

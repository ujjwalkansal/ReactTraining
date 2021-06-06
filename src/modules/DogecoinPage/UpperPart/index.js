import React from "react";
import Header from "../Header";
import Buy_n_Sell_text from "../Buy_n_Sell_text";
import CurrencyConv from "../CurrencyConv";
import "./index.css";

function UpperPart() {
  return (
    <div className={"full_container"}>
      <Header />
      <div className="upper_part">
        <div className="curr_horiz_div">
          <Buy_n_Sell_text />
          <CurrencyConv />
        </div>
      </div>
    </div>
  );
}

export default UpperPart;

import React from "react";
import "./index.css";
import usflag from "../../../utils/images/us-flag.svg";
import btc from "../../../utils/images/btc.svg";
function CurrencyConv() {
  return (
    <div className="currency_box">
      <p className={"curr_head"}>{"Get your crypto now!"}</p>
      <div className={"exc_button_container"}>
        <button
          type={"button"}
          disabled
          className={"buy_sell_changer left_btn"}
        >
          {"BUY"}
        </button>
        <button
          type={"button"}
          disabled
          className={"buy_sell_changer right_btn"}
        >
          {"SELL"}
        </button>
      </div>
      <div>
        <Currency_input curr_icon={usflag} value={"100"} exc={"currency"} />
      </div>
      <div className={"hor_line_exc"}></div>
      <div>
        <Currency_input curr_icon={btc} value={"0.00956474"} exc={"crypto"} />
      </div>
      <center>
        <button className={"buy_doge_btn"}>{"BUY DOGECOIN"}</button>
      </center>
    </div>
  );
}

function Currency_input(props) {
  return (
    <div className={"curr_input"}>
      <div className={"left_part_input"}>
        <img src={props.curr_icon} className={"currency_icon"}></img>
        <input
          type="text"
          placeholder={""}
          className={"input_text"}
          value={props.value}
        />
      </div>
      <div className={"vertical_line_exchange"} />
      <SelectBox exc={props.exc} />
    </div>
  );
}

function SelectBox(props) {
  return props.exc == "currency" ? (
    <div className={"arrow_selector"}>
      <select className={"input_select_exc"}>
        <option>{"USD"}</option>
        <option>{"AUD"}</option>
        <option>{"CAD"}</option>
      </select>
    </div>
  ) : (
    <div>
      <select className={"input_select_exc"}>
        <option>{"BTC"}</option>
        <option>{"DOGE"}</option>
        <option>{"ETH"}</option>
      </select>
    </div>
  );
}

export default CurrencyConv;

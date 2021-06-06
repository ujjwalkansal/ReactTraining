import React from "react";
import "./index.css";
import tick from "../../utils/images/tick.svg";
import download from "../../utils/images/download.svg";
import timer from "../../utils/images/timer.svg";
import wallet from "../../utils/images/wallet.svg";
import tick2 from "../../utils/images/tick2.svg";
import download2 from "../../utils/images/download2.svg";
import timer2 from "../../utils/images/timer2.svg";
import wallet2 from "../../utils/images/wallet2.svg";
import lightning from "../../utils/images/lightning.svg";
import lightning2 from "../../utils/images/lightning2.svg";

function BuySellDoge(props) {
  return (
    <div className={"buySellDoge"}>
      <p className={"heading"}>{props.heading}</p>
      <p className={"only3"}>{"Only 3 simple steps"}</p>
      <div className={"cards_div"}>
        <Card
          img_div={<Card1image option={props.option} />}
          step_no={"1"}
          step_heading={props.step1_heading}
          desc={props.step1_desc}
          option={props.option}
        />

        <Card
          img_div={<Card2image option={props.option} />}
          step_no={"2"}
          step_heading={props.step2_heading}
          desc={props.step2_desc}
          option={props.option}
        />

        <Card
          img_div={
            <Card3image option={props.option} text_color={props.text_color} />
          }
          step_no={"3"}
          step_heading={props.step3_heading}
          desc={props.step3_desc}
          option={props.option}
        />
      </div>
      <Buy_sell_btn option={props.option} />
    </div>
  );
}

function Card(props) {
  return (
    <div className={"cardWrapper"}>
      {props.img_div}
      <div className={"step_head_div"}>
        <div className={props.option == "blue" ? "ellipse" : "round_ellipse"}>
          {props.step_no}
        </div>
        <p className="step_heading">{props.step_heading}</p>
      </div>
      <p className="step_desc">{props.desc}</p>
    </div>
  );
}

function Card1image(props) {
  return (
    <div className="card1image">
      <img src={props.option == "blue" ? tick : tick2} />
    </div>
  );
}

function Card2image(props) {
  return (
    <div className="card2image">
      <img
        src={props.option == "blue" ? download : download2}
        style={{
          width: "22.2px",
          height: "21.4px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <img
        src={props.option == "blue" ? wallet : wallet2}
        style={{ width: "73.1px", height: "64.2px", marginTop: "9.7px" }}
      />
    </div>
  );
}

function Card3image(props) {
  return (
    <div className="card3image">
      <img src={props.option == "blue" ? timer : timer2} />
      <div className={"text_near_timer " + props.text_color}>
        <span className={"a15_text " + props.text_color}>{"15"}</span>
        <div>
          <span className={"MIN " + props.text_color}>{"MIN"}</span>
          <img
            src={props.option == "blue" ? lightning : lightning2}
            className="lightning"
          ></img>
        </div>
      </div>
    </div>
  );
}

function Buy_sell_btn(props) {
  return (
    <button className={"btn " + props.option}>
      {props.option == "blue" ? "BUY DOGECOIN" : "SELL DOGECOIN"}
    </button>
  );
}
export default BuySellDoge;

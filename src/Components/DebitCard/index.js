import React from "react";
import "./index.css";

function DebitCard(props) {
  return (
    <div className={"debitCard " + props.size}>
      <img src={props.logo} />
      <div className="card_number">
        <Card_number_part />
        <Card_number_part />
        <Card_number_part />
        <div className="card_no_part">
          <div>{props.number[0]}</div>
          <div>{props.number[1]}</div>
          <div>{props.number[2]}</div>
          <div>{props.number[3]}</div>
        </div>
      </div>
      <div className="name_date">
        <div className="holder_name">
          <span>{"Card Holder"}</span>
          <span className="name">{props.holder_name}</span>
        </div>

        <div class={"holder_name expiry"}>
          <span style={{ textAlign: "right" }}>{"Expiry"}</span>
          <span className={"name"}>{props.expiry}</span>
        </div>
      </div>
    </div>
  );
}

function BlackDot() {
  return <div className={"black_dot"}></div>;
}

function Card_number_part() {
  return (
    <div className="card_no_part">
      <BlackDot />
      <BlackDot />
      <BlackDot />
      <BlackDot />
    </div>
  );
}

export default DebitCard;

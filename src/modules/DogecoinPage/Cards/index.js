import React from "react";
import "./index.css";
import DebitCard from "../../../Components/DebitCard";
import visa from "./images/visa.svg";
import mastercard from "./images/mastercard.svg";

function Cards() {
  return (
    <div className="cards_holder">
      <div className={"cards_div"}>
        <div className={"visaCard"}>
          <DebitCard
            size={"small"}
            logo={mastercard}
            number={"4212"}
            holder_name={"George Dux"}
            expiry={"09/15/2022"}
          />
        </div>

        <div className={"masterCard"}>
          <DebitCard
            size={"large"}
            logo={visa}
            number={"8246"}
            holder_name={"John Connor"}
            expiry={"09/15/2022"}
          />
        </div>

        <div className={"text_card_div"}>
          <TextCard className={"textCard"} />
        </div>
      </div>
    </div>
  );
}

function TextCard() {
  return (
    <div className="white_card">
      <p className="exchange_text">{"Exchange your Dogecoin Instantly!"}</p>
      <p className="small_text">
        {
          "Buy & sell your Doge using your Visa or Mastercard debit or credit card."
        }
      </p>
    </div>
  );
}

export default Cards;

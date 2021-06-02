import React from "react";
import "./index.css";
import img from "./preview.png";

class First_col extends React.Component {
  render() {
    return (
      <div className="container">
        <span id="save_text">{"Save your "}</span>
        <span id="money_txt">{"money now."}</span>

        <p className="desc">
          {
            "Manage your company Bot in few easy steps, join our Pro plan to try a 360 experience of our service."
          }
        </p>

        <p className="desc">
          {
            "Start your 14 days of free Pro plan, you can always upgrade it or stay with the Lite version for free."
          }
        </p>

        <img src={img} alt={"logo"} className="imageStyle" />
      </div>
    );
  }
}

export default First_col;

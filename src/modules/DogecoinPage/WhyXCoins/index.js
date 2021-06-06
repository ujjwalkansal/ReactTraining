import React from "react";
import "./index.css";
import shutterstock_1 from "../../../utils/images/shutterstock_1.png";
import shutterstock_2 from "../../../utils/images/shutterstock_2.png";
import shutterstock_3 from "../../../utils/images/shutterstock_3.png";
import lock from "../../../utils/images/lock.svg";
import msg from "../../../utils/images/msg.svg";
import SignupBox from "../SignUpBox";

function WhyXCoins() {
  return (
    <div className="WhyXcoinsContainer">
      <img
        src={shutterstock_1}
        srcset={(shutterstock_2, shutterstock_3)}
        className={"shutterstock_img"}
      />
      <div class={"right_box"}>
        <p className={"whyHeading"}>{"Why Buy & Sell Dogecoin with Xcoins?"}</p>
        <div className="reasons_div1">
          <img src={lock} alt={"lock_img"} />
          <span className={"reason_heading"}>{"Encryption technology"}</span>
        </div>
        <p className="reason_desc first">
          {
            "Xcoins reputation for speed and security will keep you coming back. World-class encryption technology keeps your data secure and your transactions safe. "
          }
        </p>
        <div className="reasons_div2">
          <img src={msg} alt={"msg_img"} />
          <span className={"reason_heading"}>{"Customer care"}</span>
        </div>
        <p className="reason_desc second">
          {
            "If you have any questions about Dogecoin or how to buy & sell it, you can contact our 24/7 customer support team"
          }
        </p>
        <div style={{ marginTop: "25px" }}>
          <SignupBox />
        </div>
      </div>
    </div>
  );
}
export default WhyXCoins;

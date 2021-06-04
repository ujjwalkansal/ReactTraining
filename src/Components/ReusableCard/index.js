import React from "react";
import "./index.css";
// import logo from "./images/logo.png";

class ReusableCard extends React.Component {
  render() {
    const { img_name, theme, heading, inf } = this.props;
    return (
      <div className={"blue_card_" + theme + " card_dim"}>
        <img src={img_name} alt="logo" className={"card_img"} />
        <div className={"card_right_part"}>
          <p className={"card_heading"}>{heading}</p>
          <p className={"card_text"}>{inf}</p>
        </div>
      </div>
    );
  }
}

export default ReusableCard;
